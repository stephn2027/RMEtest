import React from "react"
import { useState } from "react/cjs/react.development";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";


export const ThemeContext = React.createContext();

function App() {
   const [theme,setTheme] = useState('green');
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    Counter
    <Counter initialCount={5}/>
    Counter Hooks
    <CounterHooks initialCount={5}/>
    <button onClick={()=>setTheme(prevTheme=>{
     return prevTheme === 'red' ? 'blue':'red';
    })
    }>Toggle Color</button>
    </ThemeContext.Provider>
  )
    
  
}

export default App;
