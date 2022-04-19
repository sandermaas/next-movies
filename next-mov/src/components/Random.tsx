import { ReactElement } from 'react'

import { useMoviesContext } from 'context/MoviesContext'

const Random = (): ReactElement => {
  const { currentPage, setCurrentPage } = useMoviesContext()

  console.log(currentPage)
  console.log(setCurrentPage)

  return (
    <>
      <p>DO RANDOM {currentPage} </p>
      <button onClick={() => setCurrentPage(currentPage + 1)}>+</button>
    </>

  )
}

export default Random