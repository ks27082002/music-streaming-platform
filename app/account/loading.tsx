"use client"

import Box from "@/components/Box"
import { BounceLoader, ScaleLoader } from "react-spinners"

const Loading = () => {
  return(
    <Box className="h-full flex items-center justify-center">
      <ScaleLoader
      color="#FAC218" 
      height={40}/>
    </Box>
  )
}

export default Loading