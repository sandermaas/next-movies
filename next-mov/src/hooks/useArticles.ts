import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import Api from 'api'
import { Article } from 'types/article.types'

export const ARTICLE_KEY = 'articles'

const useArticles = () => {
  return useQuery<Array<Article>, AxiosError>(ARTICLE_KEY, () => Api.getArticles().then((response) => response.data))
}

export default useArticles