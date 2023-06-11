import { useState, useEffect, useRef } from "react";

import styles from "./ChatContainer.module.css"; 
import { Chat } from "@/context";



export default function ChatContainer({chat,story, addStoryMessage}:{chat: Chat[],story:Chat[], addStoryMessage:Function}) {
  const chatEndRef = useRef<HTMLDivElement>(null);
const [currentMessage, setCurrentMessage]= useState('')
const [messageHistory, setMessageHistory]= useState<Chat[]>([])


function handleSubmitMessage(){
    addStoryMessage(currentMessage)
    setCurrentMessage('')
}
    // Scroll to bottom whenever chat updates
    useEffect(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [chat]);
    useEffect(() => {
     const history = [...chat, ...story]
     console.log("THE HISTORY", history)
     //@ts-ignore
     const sortedHistory = history.sort((a,b) => {
       if(+a.time < +b.time) {
        return -1
       } else {
        return 1
       }
    })
     console.log("THE SORTED HISTORY", sortedHistory)

     setMessageHistory(sortedHistory)
    }, [chat, story]);
  return (
    <div className={`${styles.container} ${styles['style-3']}`}>

        {messageHistory.length > 0 &&messageHistory.map(({ time, message, type }, index) => { 
          if(typeof message === 'string'){

            return(
              <div
            key={index}
            className={` ${type === 'chat' ? index % 2 === 0 ? styles.bgDark : styles.bgLight : styles.storyMessage} ${styles.message}`}
            >
            <span>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span> - <span>{message}</span>
          </div>
        )} else {
          return(
            <div
          key={index}
          className={` ${ index % 2 === 0 ? styles.bgDark : styles.bgLight} ${styles.message} ${styles.arrayElementContainer}`}
          >
          <span>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -</span> 
           {message.map((elem, index) =><span key={index} className={styles.arrayElement}>{elem}</span>)}
        </div>
      )
        }
      }
        )}
        <textarea className={styles.textInput} value={currentMessage} onChange={(e) =>setCurrentMessage(e.currentTarget.value)} >

        </textarea>
        <button className={styles.textInputButton} onClick={handleSubmitMessage}>Submit message</button>
      <button
      className={styles.bottomScrollButton}
        onClick={() =>
          chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Scroll to Bottom
      </button>
        <div ref={chatEndRef} />
    </div>
  );
}