import React, { FC, ReactNode } from "react";
import Navbar from "../components/navbar";

interface props {
    children: ReactNode,
}

const MainLayout:FC<props> = ({children})=>{
    return(
        <div className="w-full h-full">
            <Navbar></Navbar>
            <div className=" h-[90%] w-full justify-between flex flex-col gap-10 items-center">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;