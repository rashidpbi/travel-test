import React, { createContext ,useContext} from 'react'
import { destinations,properties,offers,communities,mountDestinations,mountRecents,mountInclusive,mountHoneymoon} from '../assets/assets.js'
import { useState } from "react";

const DataContext = createContext()
export const DataProvider = ({children}) => {
  const [bgImg,setBgImg] = useState("bg-hero")
  const [visibleNav, SetVisibleNav] = useState(false);
      const dataToShare = {destinations,properties,offers,communities,bgImg,setBgImg,mountDestinations,mountRecents,mountInclusive,mountHoneymoon,visibleNav, SetVisibleNav}

  return (
    <DataContext.Provider value={dataToShare}>
      {children}
    </DataContext.Provider>
  )
}


export const useData  = ()=> useContext(DataContext)
