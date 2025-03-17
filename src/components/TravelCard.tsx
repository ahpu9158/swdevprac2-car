
'use client'
import { useState } from "react";
import { VlogPlayer } from "./VlogPlayer";

export function TravelCard(){

    const [playing, setPlaying] = useState(true)

    

    return (
        <div className="w-[80% shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VlogPlayer vdoSrc="/video/ThailandNatural.mp4" isPlaying={playing}></VlogPlayer>
            <div>Natural Thailand
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={()=>{
                        setPlaying(!playing);
                    }}
            >
                {playing? 'pause' : 'play'} </button>


            </div>
        </div>
    );
}