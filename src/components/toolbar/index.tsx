import * as React from "react";
import { Router } from "next/router";
import {FaUser, FaHome} from 'react-icons/fa'
import PopOutSideNav from "../popoutMenu/PopoutMenu";


export default function Toolbar(){
    return(
        <nav className="sticky top-0 bg-none">
          <div className="w-full flex flex-row h-16 justify-between items-center">
            <div >
            </div>
          </div>
      </nav>
    )
}
