import { SubmitHandler } from 'react-hook-form';

import FormElm from '@components/customElements/Form/FormElm';
import InputElm from '@components/customElements/Input/InputElm';
import SubmitBtnElm from '@components/customElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '@components/customElements/UtilElements/ResetBtnElm';
import {
  UlList,
  UlLi,
  DisplayContainer,
} from '@components/styles/Display.style';

import LoginQuery from '../Query/LoginQuery';
import { LoginSchemaType, LoginFormSchema } from '../Utils/LoginSchema';
import { LoginFormDefaultData } from '../Utils/LoginData';

function LoginForm() {
  const {
    LoginQuery: { mutate: LoginUser },
  } = LoginQuery();

  const onLoginSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    if (data) {
      LoginUser(data);
    }
  };

  return (
    <FormElm<LoginSchemaType, typeof LoginFormSchema>
      onSubmit={onLoginSubmit}
      schema={LoginFormSchema}
    >
      <UlList>
        <UlLi margin="0 0 10px 0">
          <InputElm<LoginSchemaType>
            zodValidationKey="LoginUserNickname"
            LabelTxt="닉네임"
            LabelHide={true}
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="text"
            placeholder="닉네임을 입력해주세요"
            inputID="loginUserNickName"
            inputPadding="0 10px 0 10px"
            autoComplete="username"
          />
        </UlLi>
        <UlLi>
          <InputElm<LoginSchemaType>
            zodValidationKey="LoginUserPassword"
            LabelTxt="닉네임"
            LabelHide={true}
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="password"
            placeholder="비밀번호를 입력해주세요"
            inputID="loginUserPassword"
            inputPadding="0 10px 0 10px"
            autoComplete="current-password"
          />
        </UlLi>
        <UlLi margin="0 0 10px 0">
          <DisplayContainer>
            <SubmitBtnElm
              display="block"
              btnTxt="로그인"
              fontColor="#fff"
              bgColor="#375E97"
              width="100%"
              padding="10px 0 10px 0"
              margin="10px 0 10px 0"
            />
            <ResetBtnElm
              display="block"
              width="100%"
              btnTxt="초기화"
              bgColor="#FB6542"
              fontColor="#fff"
              padding="10px 0 10px 0"
              values={LoginFormDefaultData}
            />
          </DisplayContainer>
        </UlLi>
      </UlList>
    </FormElm>
  );
}

export default LoginForm;
