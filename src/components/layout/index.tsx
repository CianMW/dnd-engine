import Head from "next/head"
import { ReactNode } from "react"
import Toolbar from "../toolbar"

type Props = {
    children?: ReactNode;
    title?: string;
    layoutStyles?:string;
}

export default function Layout({layoutStyles="",children, title="home"}:Props) {
    return(
        <div className={`${layoutStyles} bg-white`}>
                <div className="flex flex-col max-w-screen w-screen h-screen max-h-screen overflow-y-auto">
                    <Toolbar/>

                {children}
                </div>
        </div>
    )
}