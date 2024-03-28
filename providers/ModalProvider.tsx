"use client"

import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"
import React, { useEffect, useState } from "react"
import SubscribeModal from "@/components/SubscribeModal"
import { ProductWithPrice } from "@/types"

interface ModalProviderProps{
  products: ProductWithPrice[]
}

const ModalProvider: React.FC<ModalProviderProps> = ({products}) => {
  
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
      <UploadModal/>
      <SubscribeModal products={products}/>
    </>
  )
}
export default ModalProvider