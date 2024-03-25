"use client"

import usePlayer from "@/hooks/usePlayer"
import useGetSongById from "@/hooks/useGetSongById"
import useLoadSongUrl from "@/hooks/useLoadSongUrl"
import PlayerContent from "./PlayerContent"

//PlayerController
const Player = () => {
  const player = usePlayer()
  const {song} = useGetSongById(player.activeId)//get current playing song from usePlayer.activeId//deals with only current playing song 

  const songUrl = useLoadSongUrl(song!)
  if(!song || !songUrl || !player.activeId){
    return null
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent
      song={song}
      songUrl={songUrl}
      key={songUrl}//*key attribute when changed it destroys the component which was using it and re-renders the new component //to ensure current player is destroyed before next player starts
      //the useSound hook does not support dynamic url changes therefore we have to reset the entire hook  
      />
    </div>
  )
}
export default Player