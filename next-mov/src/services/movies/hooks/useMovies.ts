import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import Api from 'api'
import { PagedRespone } from 'types/api.types'
import { Movie } from 'types/movie.types'

export const MOVIES_KEY = 'movies'

const useMovies = (initialData?: PagedRespone<Movie>) => {
  return useQuery<PagedRespone<Movie>, AxiosError>(MOVIES_KEY, () => Api.getMovies().then((response) => response.data), {
    initialData
  })
}

export default useMovies