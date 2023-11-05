import { useState } from 'react'
import Info from './components/Info'
import Ilustration from './components/Ilustration'
import Confirmation from './components/Confirmation'
import { useGlobalContext } from './GlobalContext'



function App() {
  const {confirmed} = useGlobalContext();

if(!confirmed){
  return  <main>
        <div className="card" >
          <Info/>
          <Ilustration />
        </div>
          </main>
} else {
  return <main>
    <div className="card confirm">
      <Confirmation/>
    </div>
        </main>
}

}

export default App
