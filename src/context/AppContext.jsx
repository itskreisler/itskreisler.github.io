import PropTypes from 'prop-types'
import React, { useContext, createContext } from 'react'

const AppContext = createContext({
  myApp: { }
})

export const TagAppContext = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        myApp: { }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
TagAppContext.propTypes = {
  children: PropTypes
}
export const useAppContext = () => useContext(AppContext)
