export interface NobelLaureate {
  id: string
  fullName: { en: string }
  birth?: { date: string }
  nobelPrizes: Array<{
    awardYear: string
    category: { en: string }
  }>
}

export interface NobelResponse {
  laureates: NobelLaureate[]
  meta: {
    offset: number
    limit: number
    count: number
    total: number
  }
}