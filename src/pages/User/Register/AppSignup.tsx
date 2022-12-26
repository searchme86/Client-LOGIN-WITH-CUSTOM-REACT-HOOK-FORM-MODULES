import React from 'react';

import { InputElm } from '../../../components/CustomElements/InputElm';
import FormElm from '../../../components/CustomElements/FormElm';

import useHookFormType from '../../../hooks/useHookFormType';

let renderCount = 0;

function AppSignup() {
  const { form } = useHookFormType();

  renderCount++;

  return (
    <div>
      <h1>Signup form using RHF + ZOD [Uncontrolled]</h1>
      <h2>Render Count = {renderCount}</h2>
      <p>
        Try making mistakes in the form. You can check console to see submitted
        values.
      </p>

      {/* provide the form and onSubmit handler to form component */}
      <FormElm form={form} onSubmit={(values) => console.log(values)}>
        <InputElm
          label="Your first name"
          type="text"
          placeholder="John"
          // press ctrl + space when you type firstName
          {...form.register('firstName')}
        />
        <InputElm
          label="Choose username"
          type="text"
          placeholder="im_john_doe"
          {...form.register('username')}
        />
        <InputElm
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          {...form.register('email')}
        />

        <InputElm
          label="Password"
          type="password"
          placeholder="Your password (min 5)"
          {...form.register('password')}
        />
        <button type="submit">Submit </button>
      </FormElm>
    </div>
  );
}

export default AppSignup;
