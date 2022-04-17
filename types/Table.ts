import { StrapiEntity } from './StrapiEntity'

export type Table = StrapiEntity<{
  brand: 'rosengart' | 'leonhart'
  createdAt: string
  publishedAt: string
  rating: number
  updatedAt: string | null
}>
