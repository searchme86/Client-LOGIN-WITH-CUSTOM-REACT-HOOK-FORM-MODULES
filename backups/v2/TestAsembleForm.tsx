import React from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import TestForm from './TestForm';
import TestInput from './TestInput';
import TestCheckbox from './TestCheckbox';
import TestSelect from './TestSelect';
import { Complex } from './TestTier';
import { FormSchema, FormSchemaType, Tiers } from './TestSchema';

import './Test.css';

import { TireIDType } from './TestSchema';

type ResetType = {
  values: FormSchemaType;
};

const Pre = () => {
  const { watch } = useFormContext();

  return (
    <pre style={{ color: 'white' }}>{JSON.stringify(watch(), null, 2)}</pre>
  );
};

const ResetButton = ({ values }: ResetType) => {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <input
      disabled={isSubmitting}
      type="button"
      onClick={() => reset && reset(values)}
      value="Reset"
    />
  );
};

const AgreementConfirmation = () => {
  const { getValues } = useFormContext();
  const data = getValues(); //watch() as FormSchemaType
  return data.accept ? <p>Thank you for accepting the agreements</p> : null;
};

const SubmitButton = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <button
      type="submit"
      className="w-full px-8 py-4 flex items-center justify-center uppercase text-white font-semibold bg-blue-600 rounded-lg disabled:bg-gray-100 disabled:text-gray-400"
      disabled={isSubmitting}
    >
      Create account
    </button>
  );
};

function AsembleForm() {
  console.log('render form');
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log({ data });
    await new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(undefined);
      }, 3000);
    });
  };

  const someDefaultValues: FormSchemaType = {
    email: '',
    username: '',
    pizzaChoice: 'Margarita',
    //@ts-ignore force accept to be false for reset
    accept: false,
    tier: 'BRONZE',
  };

  return (
    <TestForm<FormSchemaType, typeof FormSchema>
      onSubmit={onSubmit}
      schema={FormSchema}
      defaultValues={someDefaultValues}
    >
      <TestInput<FormSchemaType> displayName="Email" name="email" type="text" />
      <TestInput<FormSchemaType>
        displayName="Username"
        name="username"
        type="text"
      />
      <TestSelect
        name="pizzaChoice"
        options={['Chicken BBQ', 'Margarita', 'All-dressed']}
      />

      <TestCheckbox name="accept" text="I accept the Terms of Service" />
      <AgreementConfirmation />

      <Complex tiers={Tiers} />
      <Pre />
      <SubmitButton />
      <ResetButton values={someDefaultValues} />
    </TestForm>
  );
}

export default AsembleForm;
