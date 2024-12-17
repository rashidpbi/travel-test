import React, { createContext ,useContext} from 'react'
import { destinations,properties,offers,communities} from '../assets/assets.js'

const DataContext = createContext()
export const DataProvider = ({children}) => {

      const dataToShare = {destinations,properties,offers,communities}

  return (
    <DataContext.Provider value={dataToShare}>
      {children}
    </DataContext.Provider>
  )
}


export const useData  = ()=> useContext(DataContext)
