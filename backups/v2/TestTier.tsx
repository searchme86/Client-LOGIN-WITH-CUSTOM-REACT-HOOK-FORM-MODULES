import { useFormContext } from 'react-hook-form';
import { Tiers } from './TestSchema';

export const Complex = ({ tiers }: { tiers: typeof Tiers }) => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  return (
    <div>
      <p className="block">Payment Tier</p>
      <ul className="space-y-2 mt-2">
        {tiers.map((tier) => {
          return (
            <li
              className={`border rounded-lg border-gray-200 text-gray-900`}
              key={tier.id}
            >
              <label
                className={`flex justify-between px-6 py-4 items-center cursor-pointer`}
              >
                <div>
                  <p className={`font-medium text-lg`}>{tier.name}</p>
                  <p className={`text-sm opacity-80`}>{tier.description}</p>
                </div>
                <div className="flex items-center">
                  <p className={`font-medium mr-4 text-sm`}>
                    {tier.price.toLocaleString('en-US', {
                      currency: 'USD',
                      style: 'currency',
                    })}
                  </p>
                  <input
                    type="radio"
                    className="w-6 h-6 border ring-0 border-gray-200 text-blue-600 disabled:text-gray-300 outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    value={tier.id}
                    {...register('tier')}
                    disabled={isSubmitting}
                  />
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      {errors.tier && (
        <p className="error">{errors.tier.message?.toString()}</p>
      )}
    </div>
  );
};
