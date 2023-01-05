import { SubmitHandler } from 'react-hook-form';

import { LoginSchemaType } from './LoginSchema';

function LoginFormAction() {
  const onLoginSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    if (data) {
      console.log('data', data);
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(undefined);
      }, 3000);
    });
  };

  return { onLoginSubmit };
}

export default LoginFormAction;
