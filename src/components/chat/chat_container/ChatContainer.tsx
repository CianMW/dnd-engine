import { useState, useEffect, useRef } from "react";

import styles from "./ChatContainer.module.css"; 
import { Chat } from "@/components/main/Main";



export default function ChatContainer({chat}:{chat: Chat[]}) {
  const chatEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom whenever chat updates
    useEffect(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [chat]);
  return (
    <div className={`${styles.container} ${styles['style-3']}`}>

        {chat.length > 0 &&chat.map(({ time, message }, index) => { 
          if(typeof message === 'string'){

            return(
              <div
            key={index}
            className={` ${ index % 2 === 0 ? styles.bgDark : styles.bgLight} ${styles.message}`}
            >
            <span>{time}</span> - <span>{message}</span>
          </div>
        )} else {
          return(
            <div
          key={index}
          className={` ${ index % 2 === 0 ? styles.bgDark : styles.bgLight} ${styles.message} ${styles.arrayElementContainer}`}
          >
          <span>{time} -</span> 
           {message.map((elem) =><span className={styles.arrayElement}>{elem}</span>)}
        </div>
      )
        }
      }
        )}
        <div ref={chatEndRef} />
      <button
      className={styles.bottomScrollButton}
        onClick={() =>
          chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Scroll to Bottom
      </button>
    </div>
  );
}