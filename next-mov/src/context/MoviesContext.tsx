import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface MoviesContextValue {
  currentPage: number
  setCurrentPage: (page: number) => void
}

const MoviesContext = createContext<MoviesContextValue | null>(null)

// export const MoviesContextProvider = MoviesContext.Provider
// export const MoviesContextConsumer = MoviesContext.Consumer

export const useMoviesContext = () => {
  const moviesContext = useContext(MoviesContext)

  if (!moviesContext) {
    throw new Error('You can only use useMoviesContext inside of a MoviesContextProvider')
  }

  return moviesContext
}

export const MoviesContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  

  return (
    <MoviesContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </MoviesContext.Provider>
  )
}
