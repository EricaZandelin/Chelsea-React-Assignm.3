import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Games", 
        path: "/games",
        icon: <GiIcons.GiSoccerBall />,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },
]
