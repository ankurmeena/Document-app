import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data,reference }) {
    return (
        <motion.div drag 
        dragConstraints={reference} 
        whileDrag={{scale:1.2}}
        dragElastic={2}
        className='relative w-52 h-64 p-5 rounded-[35px] bg-sky-700 text-white overflow-hidden flex-shrink-0'>
            <FaRegFileAlt />
            <br />
            <hr />
            <p className='text-xs leading-tight mt-5 font-semibold text-wrap '>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full h-15 left-0 '>
                <div className="flex items-center justify-between px-4 mb-2">
                    <h5 className='text-xs'>{data.filesize}</h5>
                    <span className='w-5 h-5 bg-zinc-500 rounded-full flex items-center justify-center'>
                        {data.close ? <IoCloseSharp size=".9em" color='#fff' /> : <LuDownload size=".9em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tagDetails.isOpen && (
                        <div className={`tag h-11 w-full ${data.tagDetails.tagColor === "green" ? "bg-green-600" : "bg-violet-950"} text-black flex item-center justify-center p-2`}>
                        {data.tagDetails.tagTitle}
                    </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card
