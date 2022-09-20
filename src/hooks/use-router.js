import { useMemo } from 'react'
import {
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom'
import queryString from 'query-string'
const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const navigateTo = useNavigate()

  return useMemo(() => {
    return {

      push: navigateTo,
      pathname: location.pathname,

      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params
      },

      location
    }
  }, [params, location, navigateTo])
}
export { useRouter }
