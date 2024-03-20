"use client"

import AuthModal from "@/components/AuthModal"
import { useEffect, useState } from "react"

const ModalProvider = () => {
  
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{ //rendering modals on server side causes hydration errors, therefore use useEffect which is run only on client side to prevenrt server side rendering
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }

  return(
    <>
      <AuthModal/>
    </>
  )
}
export default ModalProvider