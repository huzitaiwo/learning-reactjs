import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemePrivider({ children }) {

  return (
    <ThemeContext.Provider value={{ color: 'blue'}}>
      {children}
    </ThemeContext.Provider>
  )
}