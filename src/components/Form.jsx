import { useState } from "react";
import { useGlobalContext } from "../GlobalContext"


function Form() {

  const {confirmed,emailInput,setEmailInput,setConfirmed,errorForm,setErrorForm} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
            if(emailInput.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
              setConfirmed(true)
            } else {
              setErrorForm(true)
              setTimeout(function(){
                setErrorForm(false)
              }, 3500);
            }
    }

  return (
    <form onSubmit={handleSubmit} >
        <div className="message" >
          <label htmlFor="email"><b>Email address</b></label>
          {errorForm ? <span style={{color:"hsl(4, 100%, 67%)"}} >Valid email required</span> : null}
        </div>
        <input onChange={(e) => setEmailInput(e.target.value)} placeholder="email@company.com" style={errorForm ? {borderColor:"hsl(4, 100%, 67%)", color:"hsl(4, 100%, 67%)", backgroundColor:"hsl(4, 55%, 95%)"} : null} id="email" type="email" name="email"/>
        <button>Subscribe to monthly newsletter</button>
    </form>
  )
}
export default Form