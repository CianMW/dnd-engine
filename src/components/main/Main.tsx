import { useState, useEffect, useRef, useContext } from "react";

import styles from "./Main.module.css"; // Import styles
import { getWeather } from "@/lib/weather";
import { getRumorLocation } from "@/lib/location";
import { getRandomWildernessEncounter } from "@/lib/wilderness";
import ChatContainer from "../chat/chat_container/ChatContainer";
import { getRandomAdventureElements } from "@/lib/adventureElements";
import PopOutSideNav from "../popoutMenu/PopoutMenu";
import getKeyword from "@/lib/keyword";
import getVerb from "@/lib/verbList";
import { getRandomUrbanEncounter } from "@/lib/urban";
import getRandomClue from "@/lib/clue";
import MainStore, { storageContext } from "@/context";
import Settings from "../settings/Settings";

export default function MainView() {
  // const [chat, setChat] = useState<Chat[]>([]);
  const {
    //@ts-ignore
    chat: [chat, setChat],
    //@ts-ignore
    addChatMessage,
    //@ts-ignore
    story:[story,setStory],
    //@ts-ignore
    addStoryMessage,
    //@ts-ignore
    adventureLocation:[adventureLocation,setAdventureLocation],
    //@ts-ignore
    season:[season,setSeason],
    //@ts-ignore
    wordCount:[wordCount,setWordCount],
    //@ts-ignore
  } = useContext(storageContext);

  function getSomeWeather() {
    let weather = getWeather(season);
    addChatMessage(weather);
  }

  function getSomeLocation() {
    let location = getRumorLocation();
    addChatMessage(location);
  }

  function getWildernessEnc() {
    let wildEnc = getRandomWildernessEncounter();
    addChatMessage(wildEnc);
  }
  function adventureElements() {
    let element = getRandomAdventureElements(adventureLocation);
    addChatMessage(element);
  }
  function getKeywords() {
    let element = getKeyword(wordCount);
    addChatMessage(element);
  }
  function getrandomVerbs() {
    let element = getVerb(wordCount);
    addChatMessage(element);
  }


  return (
    <>
      <PopOutSideNav type={'left'}><></></PopOutSideNav>
      <PopOutSideNav type={'right'}><Settings/></PopOutSideNav>
      <div className={styles.grid}>
        <div className={styles.buttonContainer}>
          <button onClick={adventureElements}>6D12</button>
          <button onClick={() => getSomeWeather()}>Weather</button>
          <button onClick={getSomeLocation}>Rumour Location</button>
          <button onClick={getWildernessEnc}>Wilderness Encounter</button>
          <button onClick={() => addChatMessage(getRandomUrbanEncounter())}>
            Urban Encounter
          </button>
          <button onClick={() => getKeywords()}>Keyword</button>
          <button onClick={() => getrandomVerbs()}>Verb</button>
          <button onClick={() => addChatMessage(getRandomClue())}>Clue</button>
          <button onClick={() => addChatMessage(getRandomClue())}>
            Wilderness Clue
          </button>
        </div>
        <div className={styles.chatContainer}>
          <ChatContainer chat={chat} story={story} addStoryMessage={addStoryMessage} />
        </div>
      </div>
    </>
  );
}
