import { useEffect, useState } from "react";

import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";
import Bottom from "./Bottom";

import styles from "./MainIndex.module.css";

export default function MainIndex(){
    const[position, setPosition] = useState(0);

    function onScroll(){
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    
    return (
        <div className={styles.main}>
            <MainTitle position={position}/>
            <IndexCommunity/>
            <IndexWiki/>
            <SendToFeedback/>
            <Bottom/>
        </div>
    );
}