import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'
import { useLang } from './useLang'

const AppContext = createContext({
})

export const TagAppContext = ({ children, hashKey }) => {
  const language = useLang()
  return (
    <AppContext.Provider
      value={ language }
    >
      {children}
    </AppContext.Provider>
  )
}
TagAppContext.propTypes = {
  children: PropTypes.node.isRequired,
  hashKey: PropTypes.number
}
TagAppContext.defaultProps = {
  hashKey: null
}
export const useAppContext = () => useContext(AppContext)
