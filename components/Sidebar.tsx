"use client";//side bar is client component while children are not necessarily
import { usePathname } from "next/navigation";
//proper methode to pass server components to client component

import React, { useMemo } from "react"
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode
}

//sidebar is dynamic therefore client component
const Sidebar: React.FC<SidebarProps> = ({children}) => {

  const pathname = usePathname()

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search'
    }

  ], [])
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4"
          >
            {routes.map((item) => (
              <SidebarItem
              key={item.label}//key used for map
              {...item}
              />

              
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library>
            
          </Library>
        </Box>

      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  )
}

export default Sidebar