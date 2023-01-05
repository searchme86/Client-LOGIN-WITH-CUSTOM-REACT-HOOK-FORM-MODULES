import FormElm from '../../../../components/CustomElements/Form/FormElm';
import InputElm from '../../../../components/CustomElements/Input/InputElm';
import SubmitBtnElm from '../../../../components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '../../../../components/CustomElements/UtilElements/ResetBtnElm';

import {
  UlList,
  UlLi,
  DisplayContainer,
} from '../../../../assets/styles/Display.style';

import { LoginSchemaType } from '../LoginUtils/LoginSchema';
import { LoginFormSchema } from '../LoginUtils/LoginSchema';
import { LoginFormDefaultData } from '../LoginUtils/LoginData';
import useLoginFormAction from '../LoginUtils/useLoginFormAction';

function LoginForm() {
  const { onLoginSubmit } = useLoginFormAction();

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
          />
        </UlLi>
        <UlLi margin="0 0 10px 0">
          <DisplayContainer>
            <SubmitBtnElm
              display="block"
              btnTxt="등록"
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
