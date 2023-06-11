import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from "./PopoutMenu.module.css"

const PopOutSideNav = ({type, children =<></>}:{type:string, children:any}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className={`${styles.popOutNavIcon} ${styles[type]}`}
      onClick={() => setIsOpen(!isOpen)}
        >
        <FaBars  />
        </div>
      
        <div className={`${styles.popOutNav} ${styles[type]} ${isOpen && styles.isOpen}`} >
        <div className={styles.popOutNavContent}>
          {children}
        </div>
        </div>
      
    </div>
  );
};

export default PopOutSideNav;