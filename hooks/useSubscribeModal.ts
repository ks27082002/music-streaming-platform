import { create } from "zustand";

interface SubscribeModalStore {//Authmodal store
  isOpen:boolean
  onOpen: () => void
  onClose: () => void
}

const useSubscribeModal = create<SubscribeModalStore>((set)=> ({//use set functionality of zustand create
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useSubscribeModal