"use client"


import SongItem from "@/components/SongItem"
import useOnPlay from "@/hooks/useOnPlay"
import { Song } from "@/types"

interface PageContentProps{
  songs: Song[]
}

const PageContent :React.FC<PageContentProps> = ({songs}) => {
  const onPlay = useOnPlay(songs)//useOnPlay demands a list of songs
  if (songs.length === 0){
    return (
      <div className="mt-4 text-neutral-400">
        No songs available
      </div>
    )
  }
  return (
    <div
    className="grid grid-col sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((item) => (
        <SongItem
        key={item.id}
        onClick={(id: string)=>{onPlay(id)}}//onPlay demands a songid to set activeId in usePlayer store
        data={item}/>
      ))}
    </div>
  )
}

export default PageContent