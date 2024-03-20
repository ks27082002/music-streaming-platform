import { create } from "zustand";

interface AuthModalStore {//Authmodal store
  isOpen:boolean
  onOpen: () => void
  onClose: () => void
}

const useAuthModal = create<AuthModalStore>((set)=> ({//use set functionality of zustand create
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useAuthModal