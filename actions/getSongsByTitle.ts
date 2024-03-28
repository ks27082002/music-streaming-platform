
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if(!title){
    const allSongs= await getSongs()
    return allSongs
  }

  const { data:data1, error:error1 } = await supabase.from('songs').select('*').ilike('title', `%${title}%`).order('created_at', { ascending: false })
  const { data:data2, error:error2 } = await supabase.from('songs').select('*').ilike('author', `%${title}%`).order('created_at', { ascending: false })

  if (error1) {
    console.log(error1.message);
  }
  if (error2) {
    console.log(error2.message);
  }

  for(let i = 0; i< data2?.length!; i++){
    let f = 1
    for (let j = 0;j<data1?.length!; j++){
    if(data2![i].id == data1![j].id) {f = 0}
    }
    if (f == 1){
      data1?.push(data2![i])
    }
  }

  
  return (data1 as any) || [];
};

export default getSongsByTitle;
