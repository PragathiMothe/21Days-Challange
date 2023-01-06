import React from 'react'
import { createContext,useState } from 'react'

const ThemChanger=createContext();

const Them = ({children}) => {
    const [them,SetThem]=useState();
  return (
    <div>
        <ThemChanger.Provider value={[them,SetThem]}>
            {children}
        </ThemChanger.Provider>
        

    </div>
  )
}

export {Them,ThemChanger}