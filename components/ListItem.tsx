"use client"

import { useRouter } from "next/navigation"//dont use next/router 
import React from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

interface ListItemProps{
  image:string
  name:string
  href:string
}

const ListItem:React.FC<ListItemProps> = ({image, name, href}) => {
  const router = useRouter()
  const onClick = () =>{
    router.push(href)
  }


  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    onClick={onClick}>
      <div className="relative min-h-[64px] min-w-[64px] ">  
      {/* we make a group so that child is affected when we hover over parent  */}
      {/* we make parent as relative and child as absolute so child div is above parent and to position child exactly we can use right-5*/}
        <Image className="object-cover" fill src={image} alt="image"/>
      </div>
      <p className="font-medium truncate py-5">
        {name}
      </p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-amber-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">{/*absolute group-hover:opacity-100 opacity:0 right-5*/}
        <FaPlay className="text-black"></FaPlay>
      </div>
    </button>
  )
}
export default ListItem