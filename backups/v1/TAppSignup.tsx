import React from 'react';

// import { InputElm } from '../../../components/CustomElements/InputElm';
// import FormElm from '../../../components/CustomElements/FormElm';

// import useHookFormType from '../../../hooks/useHookFormType';
// import { SelectElm } from '../../../components/CustomElements/SelectElm';

import AsembleForm from '../v2/TestAsembleForm';

let renderCount = 0;

function AppSignup() {
  // const { zodValueWithHookForm } = useHookFormType();

  renderCount++;

  return (
    <div>
      <h2>Render Count = {renderCount}</h2>

      {/* <FormElm
        hookFormReturn={zodValueWithHookForm}
        onSubmit={(values) => console.log(values)}
      >
        <InputElm
          label="Your first name"
          type="text"
          placeholder="John"
          {...zodValueWithHookForm.register('firstName')}
        />
        <InputElm
          label="Choose username"
          type="text"
          placeholder="im_john_doe"
          {...zodValueWithHookForm.register('username')}
        />
        <InputElm
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          {...zodValueWithHookForm.register('email')}
        />

        <InputElm
          label="Password"
          type="password"
          placeholder="Your password (min 5)"
          {...zodValueWithHookForm.register('password')}
        />

        <SelectElm label="select something" />

        <button type="submit">Submit </button>
      </FormElm> */}
      <p>여기서부터 다시 시작</p>
      <AsembleForm />
    </div>
  );
}

export default AppSignup;
