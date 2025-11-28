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

export interface NobelPrize {
  awardYear: string
  category: {
    en: string
    no: string
    se: string
  }
  prizeAmount: number
  dateAwarded: string // в формате "YYYY-MM-DD"
}

export interface NobelPrizesResponse {
  nobelPrizes: NobelPrize[]
  meta: {
    total: number
    offset: number
    limit: number
  }
}