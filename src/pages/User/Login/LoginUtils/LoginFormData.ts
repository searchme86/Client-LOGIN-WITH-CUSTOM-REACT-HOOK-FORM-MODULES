import { FormSchemaType } from './LoginFormType';

export const Tiers = [
  {
    id: 'BRONZE',
    name: 'Bronze',
    description: 'Get average points',
    price: 0.99,
  },
  {
    id: 'SILVER',
    name: 'Silver',
    description: 'Get extra points',
    price: 4.99,
  },
  {
    id: 'GOLD',
    name: 'Gold',
    description: 'The highest possible tier',
    price: 19.99,
  },
] as const;

export const someDefaultValues: FormSchemaType = {
  email: '',
  username: '',
  pizzaChoice: 'Margarita',
  //@ts-ignore force accept to be false for reset
  accept: false,
  tier: 'BRONZE',
};
