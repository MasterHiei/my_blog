import { get } from './ajax'

const URL_ARTICLES = '/articles'

// Get all articles
export const requestArticles = () => get(URL_ARTICLES)
