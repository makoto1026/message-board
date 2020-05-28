import Card from '@/models/Model'

export interface CardRepository {
  getCard(): Promise<Card[]>;
  createCard(card: Card): Promise<Card>;
}