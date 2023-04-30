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
            <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
                <div className="flex flex-col w-screen h-screen overflow-y-auto">
                    <Toolbar/>
                    <div>

                {children}
                    </div>
                </div>
        </div>
    )
}