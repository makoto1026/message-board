import { CardRepository } from '@/repositories/CardRepository'
import Card from '../models/Model'

class APICardRepository implements CardRepository {
  async getCard(): Promise<Card[]> {
    return [
      { "name": "佐藤", "message": "sdf" }
    ]
  }
  async createCard(_Card: Card):Promise<any> {
  }
}