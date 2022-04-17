import { StrapiEntity } from './StrapiEntity'
import { Table } from './Table'

export type Place = StrapiEntity<{
  name: string
  beerRating: number
  address: string
  description: string | null
  createdAt: string
  updatedAt: string | null
  publishedAt: string
  tables: Table[]
}>
