import { create } from "zustand";

interface UploadModalStore {//Authmodal store
  isOpen:boolean
  onOpen: () => void
  onClose: () => void
}

const useUploadModal = create<UploadModalStore>((set)=> ({//use set functionality of zustand create
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useUploadModal