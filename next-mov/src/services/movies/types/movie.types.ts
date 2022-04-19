export interface Movie {
  _id: string
  actors: Array<string>
  director: string
  duration: number
  genre: 'Action' | 'Anime' | 'Comedy' | 'Drama' | 'Horror' | 'Romance' | 'Sci-Fi' | 'Western'
  image?: string
  releaseDate: string
  title: string
}
