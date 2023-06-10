import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from "./PopoutMenu.module.css"

const PopOutSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className={styles.popOutNavIcon}
      onClick={() => setIsOpen(!isOpen)}
        >
        <FaBars  />
        </div>
      
        <div className={`${styles.popOutNav} ${isOpen && styles.isOpen}`} >
        <div className={styles.popOutNavContent}>
            <p>menu</p>
        </div>
        </div>
      
    </div>
  );
};

export default PopOutSideNav;