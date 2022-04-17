import { Place } from '../types/Place'

const BASE_URL = 'https://my-app-6lya3.ondigitalocean.app/api'

export class Strapi {
  static async getPlaces() {
    const url = `${BASE_URL}/places?sort=beerRating:desc&populate=tables`
    const response = await fetch(url)

    let { data } = await response.json()
    data = data.map((place: any) => ({
      ...place,
      attributes: {
        ...place.attributes,
        tables: place.attributes.tables.data,
      },
    }))

    return data as Place[]
  }
}
