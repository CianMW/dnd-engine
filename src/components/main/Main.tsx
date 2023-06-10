import { useState, useEffect, useRef } from "react";

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

export interface Chat {
  time: string; message: string|string[]
}
export default function MainView() {
  const [chat, setChat] = useState<Chat[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  function addChatMessage(message: string|string[]) {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChat((oldChat) => [...oldChat, { time, message }]);
  }

  function getSomeWeather(prop: "summer") {
    let weather = getWeather(prop);
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
    let element = getRandomAdventureElements('standard room');
    addChatMessage(element);
  }
  function getKeywords(amount:number) {
    let element = getKeyword(amount);
    addChatMessage(element);
  }
  function getrandomVerbs(amount:number) {
    let element = getVerb(amount);
    addChatMessage(element);
  }

  

  


  return (
    <>
                <PopOutSideNav/>
    <div className={styles.grid}>
      <div className={styles.buttonContainer}>
        <button onClick={adventureElements}>6D12</button>
        <button onClick={() => getSomeWeather("summer")}>Weather</button>
        <button onClick={getSomeLocation}>Rumour Location</button>
        <button onClick={getWildernessEnc}>Wilderness Encounter</button>
        <button onClick={() => addChatMessage(getRandomUrbanEncounter())}>Urban Encounter</button>
        <button onClick={() => getKeywords(3)}>Keyword</button>
        <button onClick={() => getrandomVerbs(3)}>Verb</button>
        <button onClick={() => getSomeWeather('summer')}>Weather</button>
        <button onClick={() => addChatMessage(getRandomClue())}>Clue</button>
        <button onClick={() => addChatMessage(getRandomClue())}>Wilderness Clue</button>
      </div>
      <div className={styles.chatContainer}>
        <ChatContainer chat={chat}/>
      </div>
    </div>
    </>
  );
}
