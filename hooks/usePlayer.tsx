import { create } from "zustand"

interface PlayStore{
  ids: string[]
  activeId?: string
  setId: (id:string) => void
  setIds: (id: string[]) => void
  reset: () => void
}

const usePlayer = create<PlayStore>((set) => ({//usePlayer Store
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({activeId: id}),//sets activeid to passes id
  setIds: (ids: string[]) => set({ids:ids}),// set ids
  reset: () => set({ids: [], activeId: undefined})//resets activeid and ids
}))

export default usePlayer