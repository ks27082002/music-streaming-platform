import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

//wrapper function over onPlay                                                                     
const useOnPlay = (songs: Song[]) => {//to detect on which song user has clicked and make a playlist of the remaining songs of same respective type
  const player = usePlayer()//hook to keep track of current playing song
  const authModal = useAuthModal()

  const {user} = useUser()
  const onPlay = (id:string) => {
    if(!user){
      return authModal.onOpen()//user login before playsong
    }

    player.setId(id)//sets current playing song 
    player.setIds(songs.map((song) => song.id))//sets songs to follow
  }

  return onPlay
}

export default useOnPlay