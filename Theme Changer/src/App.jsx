import { react,useState,createContext } from 'react'
import Header from './Header'
import Home from './Home'
export const ThemeChange = createContext(null)

function App() {
  const [bgColor, setBgColor] = useState('white')
  const [color, setColor] = useState('black')
// setting state for context and sharing
  return (
    <>
    {/* Implementation using context APIs */}
      {/* <ThemeChange.Provider value={{bgColor,setBgColor,color,setColor}}>
        <Header />
        <Home />
      </ThemeChange.Provider>      */}

      <Header />
      <Home />
    </>
  )
}

export default App
