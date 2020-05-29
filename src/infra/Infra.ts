import CardRepository from '@/repositories/CardRepository'
import Card from '@/models/Model'

export default class APICardRepository implements CardRepository {
  async getCard (): Promise<Card[]> {
    return [
    ]
  }
}
