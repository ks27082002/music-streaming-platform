"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"

import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"//to create user-interface for logging in 
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react"

const AuthModal = () => {
  const supabaseClient = useSupabaseClient()//since wrapped in supabase context provider
  const router = useRouter()
  const {session} = useSessionContext()
  const {onClose , isOpen} = useAuthModal()

  useEffect(()=>{
    if(session){
      router.refresh()
      onClose()
    }
  },[session, router, onClose])

  const onChange = (open:boolean) => {
    if (!open){
      onClose()
    }
  }
  return(
    <Modal 
    title="Welcome Back"
    description= "Login to your account"
    isOpen= {isOpen}
    onChange={onChange}>
    
      {/* inbuilt login options provided by supabase */}
      <Auth 
      theme='dark'
      magicLink
      providers={["github" ,"google"]}
      supabaseClient={supabaseClient}
      appearance={{
        theme:ThemeSupa,
        variables: {
          default:{
            colors: {
              brand: '#404040',
              brandAccent: '#FFB300'
            }
          }
        }}}/>

    </Modal>
  )
}
export default AuthModal