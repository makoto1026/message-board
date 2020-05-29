import Card from '@/models/Model'

export default interface CardRepository {
  getCard(): Promise<Card[]>;
}
