import { z } from 'zod';

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

// type TireIDType = typeof Tiers[number]['id'];
export type TireIDType = typeof Tiers[number]['id'];

const TireIDEnum: [TireIDType, ...TireIDType[]] = [
  Tiers[0].id,
  ...Tiers.slice(1).map((p) => p.id),
];

export const FormSchema = z.object({
  email: z.string().trim().email(),
  username: z
    .string()
    .trim()
    .min(3, { message: 'Must be more than 3 characters' }),
  pizzaChoice: z.string(),
  accept: z.literal(true, {
    errorMap: () => ({
      message: 'You must accept Terms and Conditions.',
    }),
  }),

  // accept: z.coerce.boolean().parse(true, {
  //   errorMap: () => ({
  //     message: 'You must accept Terms and Conditions.',
  //   }),
  // }),

  // tier: z
  //   .string({ invalid_type_error: 'Please select a payment tier.' })
  //   .refine((val) => Tiers.map((tier) => tier.id).includes(val)),
  tier: z
    // .string({ invalid_type_error: 'Please select a payment tier.' })
    .enum(TireIDEnum)
    .refine((val) => Tiers.map((tier) => tier.id).includes(val)),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export type FormContextType = {
  register: (name: string, options?: any) => {};
};
