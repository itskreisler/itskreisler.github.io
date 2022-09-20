import { matchRoutes } from 'react-router-dom'

const useCurrentPath = (path, location) => {
  const route = matchRoutes([{ path }], location)
  return !!route
}

export { useCurrentPath }
