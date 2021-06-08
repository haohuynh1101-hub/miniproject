import {
  observable,
  action,
  computed,
  reaction,
  makeObservable,
  toJS,
} from 'mobx';
import { createContext } from 'react';

const fakeCardPerson = [
  {
    rank: 1,
    image: 'https://via.placeholder.com/350',
    name: 'Nguyễn Văn A',
    sales: 150,
    target: 300,
  },
  {
    rank: 2,
    image: 'https://via.placeholder.com/350',
    name: 'Nguyễn Văn B',
    sales: 123321,
    target: 321123,
  },
  {
    rank: 3,
    image: 'https://via.placeholder.com/350',
    name: 'Nguyễn Văn C',
    sales: 1200,
    target: 3000,
  },
  {
    rank: 4,
    image: 'https://via.placeholder.com/350',
    name: 'Nguyễn Văn D',
    sales: 60,
    target: 150,
  },
  {
    rank: 5,
    image: 'https://via.placeholder.com/350',
    name: 'Nguyễn Văn E',
    sales: 123,
    target: 321,
  },
  {
    rank: 6,
    image: 'https://via.placeholder.com/350',
    name: 'Trần Văn A',
    sales: 60,
    target: 321,
  },
  {
    rank: 7,
    image: 'https://via.placeholder.com/350',
    name: 'Trần Văn B',
    sales: 123,
    target: 300,
  },
  {
    rank: 8,
    image: 'https://via.placeholder.com/350',
    name: 'Trần Văn C',
    sales: 123321,
    target: 321123,
  },
  {
    rank: 9,
    image: 'https://via.placeholder.com/350',
    name: 'Trần Văn D',
    sales: 1233,
    target: 3000,
  },
  {
    rank: 10,
    image: 'https://via.placeholder.com/350',
    name: 'Trần Văn E',
    sales: 1234,
    target: 4000,
  },
];

export interface Person {
  rank: number;
  image: string;
  name: string;
  sales: number;
  target: number;
}
class PersonStore {
  listPerson: Person[] = fakeCardPerson;
  constructor() {
    makeObservable(this, {
      listPerson: observable,
    });
  }
}
export default createContext(new PersonStore());
