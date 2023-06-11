import { createContext, useEffect, useState } from 'react'

export interface Chat {
    time: Date; message: string|string[]; type:string
  }


export const storageContext = createContext({})


export function useStateWithLocalStorage<T>(
    key: string,
    initialValue: T
  ): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(initialValue);
  
    useEffect(() => {
      try {
        const item = localStorage.getItem(key);
        if (item) setValue(JSON.parse(item) as T);
      } catch (error) {
        console.warn(`Error reading localStorage key “${key}”:`, error);
      }
    }, [setValue, key]);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }

const MainStore = ({ children }: any) => {

    const [chat, setChat] =  useStateWithLocalStorage<Chat[]>("chat", []);
    const [story, setStory] =  useStateWithLocalStorage<Chat[]>("story", []);
    const [season, setSeason] = useStateWithLocalStorage<string>("season", 'spring');
    const [wordCount, setWordCount] = useStateWithLocalStorage<number>("wordCount", 1);
    const [adventureLocation, setAdventureLocation] = useStateWithLocalStorage<string>("adventureLocation", 'standard wilderness');


  // CHAT START
  function addChatMessage(message: string|string[]) {
    const time = new Date();
    // const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const type = 'chat'
    setChat((oldChat)=>[...oldChat, { time, message, type }]);
  }
  function addStoryMessage(message: string|string[]) {
    const time = new Date();
    const type ='story'
    setStory((oldChat)=>[...oldChat, { time, message, type }]);
  }

  return (
    <storageContext.Provider
      value={{
        chat:[chat,setChat],
        story:[story,setStory],
        adventureLocation:[adventureLocation,setAdventureLocation],
        season:[season,setSeason],
        wordCount:[wordCount,setWordCount],
        addChatMessage:addChatMessage,
        addStoryMessage:addStoryMessage,
      }}
    >
      {children}
    </storageContext.Provider>
  )
}

export default MainStore