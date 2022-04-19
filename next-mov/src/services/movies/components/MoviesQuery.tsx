import { ReactElement } from 'react'

import { useMovies } from 'hooks'
import { PagedRespone } from 'types/api.types'
import { Movie } from 'types/movie.types'

interface MoviesQueryProps {
  render: (movies: PagedRespone<Movie>) => ReactElement
}

const MoviesQuery = ({ render }: MoviesQueryProps): ReactElement => {
  const moviesQuery = useMovies()

  if (moviesQuery.isError) {
    return <p>ERROR</p>
  }

  if (moviesQuery.isSuccess) {
    return <>{render(moviesQuery.data)}</>
  }

  return <p>Loading...</p>
}

export default MoviesQuery