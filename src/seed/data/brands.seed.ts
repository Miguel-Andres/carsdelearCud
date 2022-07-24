import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name : 'toyota' ,
    createAt : new Date().getTime()
  },  {
    id: uuid(),
    name : 'Jeep' ,
    createAt : new Date().getTime()
  },  {
    id: uuid(),
    name : 'tesla' ,
    createAt : new Date().getTime()
  },
];