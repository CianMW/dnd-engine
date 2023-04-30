import * as React from "react";
import { Router } from "next/router";
import {FaUser, FaHome} from 'react-icons/fa'


export default function Toolbar(){
    return(
        <nav className="sticky top-0 bg-none">
          <div className="w-full flex flex-row h-16 justify-between items-center">
            {/* <div onClick={() => setMenuIsOpen(!menuIsOpen)} className="flex items-center">
            </div> */}
            <div >
              <a
                href="/"
                className="border-indigo-500 rounded-full text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                aria-current="page"
              >
                <span className="text-green-400 hover:text-green-500 duration-400 transition">
                  <FaHome />
                  </span>
              </a>
              <span className="mx-2">{" | "}</span>
              <a
                href="/accounts"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <span
                    className="mr-2 text-purple-400 rounded-full hover:text-purple-500 duration-400 transition"
                >

                <FaUser
                  />
                  </span>
              </a>
            </div>
          </div>
      </nav>
    )
}
