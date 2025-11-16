import api from './api'
import type { NobelLaureate, NobelResponse } from '@/interfaces/nobel'

export class NobelService {
  static async getLaureates(
    offset: number = 0,
    limit: number = 10,
    name?: string,
    year?: number
  ): Promise<NobelResponse> {
    const params: any = {
      offset,
      limit,
      sort: 'name',
    }

    if (name) {
      params.fullName = name
    }
    if (year) {
      params.nobelPrizeYear = year
    }

    const response = await api.get<NobelResponse>('/laureates', { params })
    return response.data
  }
}