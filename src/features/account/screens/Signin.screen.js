import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import BgImage from '../../../../assets/images/signin/bg-image.png';

import { Checkbox, TextInput } from 'react-native-paper';

import {
  AccountContainerCard,
  SiginInNotRegisteredText,
  AccountTitle,
  SignInCreateAccountText,
  AccountBgImage,
  AccountButtonStyle,
  AccountButtonWrapperView,
  AccountContainer,
  AccountForgotPasswordRowView,
  AccountForgotPasswordText,
  AccountHeaderView,
  AccountKeepLoggedInText,
  AccountKeppLoggedInView,
  AccountSubtitle,
  AccountTextInput,
  AccountTextInputView,
  SinginCreateAccountRowView,
} from '../components/account.styles';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSignin = () => {
    console.log('email, password, keepLoggedIn', email, password, keepLoggedIn);
  };

  return (
    <AccountContainer>
      <AccountBgImage source={BgImage} resizeMode="cover">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <AccountContainerCard>
            <AccountHeaderView>
              <AccountTitle>Sign In</AccountTitle>
              <AccountSubtitle>
                Enter your email and password to sign in.
              </AccountSubtitle>
            </AccountHeaderView>

            <AccountTextInputView>
              <AccountTextInput
                label="Email"
                mode="outlined"
                outlineColor="#e0e5f2"
                activeOutlineColor="#efa452"
                textContentType="emailAddress"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
              <AccountTextInput
                label="Password"
                mode="outlined"
                outlineColor="#e0e5f2"
                activeOutlineColor="#efa452"
                textContentType="password"
                secureTextEntry={hidePassword ? true : false}
                autoCapitalize="none"
                value={password}
                onChangeText={(e) => setPassword(e)}
                right={
                  <TextInput.Icon
                    icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                }
              />
            </AccountTextInputView>

            <AccountForgotPasswordRowView>
              <AccountKeppLoggedInView>
                <Checkbox.Android
                  status={keepLoggedIn ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setKeepLoggedIn(!keepLoggedIn);
                  }}
                />
                <AccountKeepLoggedInText>
                  Keep me logged in
                </AccountKeepLoggedInText>
              </AccountKeppLoggedInView>

              <AccountForgotPasswordText
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                Forgot Password?
              </AccountForgotPasswordText>
            </AccountForgotPasswordRowView>

            <AccountButtonWrapperView>
              <AccountButtonStyle
                icon="mail"
                mode="contained"
                buttonColor="#efa452"
                onPress={handleSignin}
              >
                Sign In
              </AccountButtonStyle>
            </AccountButtonWrapperView>

            <SinginCreateAccountRowView>
              <SiginInNotRegisteredText>
                Not registered yet?
              </SiginInNotRegisteredText>
              <SignInCreateAccountText
                onPress={() => console.log('create Account')}
              >
                Create an Account
              </SignInCreateAccountText>
            </SinginCreateAccountRowView>
          </AccountContainerCard>
        </TouchableWithoutFeedback>
      </AccountBgImage>
    </AccountContainer>
  );
};

export default Signin;
