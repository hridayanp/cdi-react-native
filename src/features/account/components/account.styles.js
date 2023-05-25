import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const AccountContainer = styled.View`
  flex: 1;
`;

export const AccountBgImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const AccountContainerCard = styled.View`
  /* flex: 0.6; */
  background-color: #fff;
  border: 1px solid #e9edf7;
  border-radius: 5px;
  margin: 20px;
`;

export const AccountHeaderView = styled.View`
  padding: 25px 30px;
  align-items: flex-start;
  justify-content: center;
`;

export const AccountTitle = styled.Text`
  color: #01426b;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  margin-top: 2px;
`;

export const AccountSubtitle = styled.Text`
  color: #313131;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 2px;
`;

export const AccountTextInputView = styled.View`
  padding-top: 0;
  padding-left: 30px;
  padding-right: 30px;
`;

export const AccountTextInput = styled(TextInput)`
  margin-bottom: 15px;
`;

export const AccountForgotPasswordRowView = styled.View`
  padding-top: 0;
  padding-left: 20px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccountKeppLoggedInView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AccountKeepLoggedInText = styled.Text`
  color: #313131;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const AccountForgotPasswordText = styled.Text`
  color: #01426b;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const AccountButtonWrapperView = styled.View`
  margin: 20px 30px 20px 30px;
`;

export const AccountButtonStyle = styled(Button)`
  border-radius: 5px;
  height: 45px;
`;

export const SinginCreateAccountRowView = styled.View`
  padding: 0px 30px 30px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SiginInNotRegisteredText = styled(AccountKeepLoggedInText)`
  margin-right: 10px;
`;

export const SignInCreateAccountText = styled(AccountForgotPasswordText)`
  margin-right: 5px;
`;
