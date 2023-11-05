import { createContext, useContext, useState } from "react"

const GlobalContext = createContext(); 

export function AppContext(props) {

    const [confirmed,setConfirmed] = useState(false)
    const [emailInput, setEmailInput] = useState("")
    const [errorForm,setErrorForm] = useState(false)

  return <GlobalContext.Provider value={{confirmed,setConfirmed,emailInput,setEmailInput,errorForm,setErrorForm}} >
    {props.children}
  </GlobalContext.Provider>
      
  
}

export const useGlobalContext = () => useContext(GlobalContext)

