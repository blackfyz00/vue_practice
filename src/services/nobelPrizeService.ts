import api from './api'
import type { NobelPrize, NobelPrizesResponse } from '@/interfaces/nobel'

export class NobelPrizeService {
  static async getPrizes(
    offset: number = 0,
    limit: number = 10,
    year?: number
  ): Promise<NobelPrizesResponse> {
    const params: any = {
      offset,
      limit,
      sort: 'awardYear',
    }

    if (year) {
      params.awardYear = year
    }

    const response = await api.get<NobelPrizesResponse>('/nobelPrizes', { params })
    return response.data
  }
}