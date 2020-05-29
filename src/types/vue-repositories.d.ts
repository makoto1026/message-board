import Vue from 'vue'
import { CardRepository } from '@/repositories/CardRepository'

type Repositories = {
  CardRepository: CardRepository;
};
declare module 'vue/types/vue' {
  interface Vue {
    $repos: Repositories;
  }
}


