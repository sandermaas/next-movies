export interface PagedRespone<T> {
  docs: Array<T>
  total: number
  limit: number
  page: number
  pages: number
}