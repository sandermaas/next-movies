import Axios, { AxiosResponse } from 'axios'

import { PagedRespone } from 'types/api.types'
import { Article } from 'types/article.types'
import { Movie } from 'types/movie.types';

const apiInstance = Axios.create({
  baseURL: 'https://axxes-movies-api.herokuapp.com/api',
  headers: { 'Content': 'application/json' }
});

abstract class Api {
  public static getArticles(): Promise<AxiosResponse<Array<Article>>> {
    return apiInstance.get('/articles')
  }

  public static getMovies(): Promise<AxiosResponse<PagedRespone<Movie>>> {
    return apiInstance.get('/movies')
  }
}

export default Api;