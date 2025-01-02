import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const api={
  key:"87bdf686e84f5a6de051ae507ec00cdb",
  base:"https://api.openweathermap.org/data/2.5/"

};

function App() {
  const [search, setsearch] = useState("");
  const [weather,setweather] = useState({}) 
  const serchPres=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
    })

  }

  return (
    <>
     <div className="App">
      <header className="App-header"><h1>Weather App</h1></header>
      <div><input type="text" onChange={(e)=>setsearch(e.target.value)}/>
      <button onClick={serchPres}>aymen</button>
      <p>{weather.weather[0].description}</p>
      </div>
      
      
     </div>
    </>
  )
}

export default App
