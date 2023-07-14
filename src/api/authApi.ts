
import ExternalResponseSuccess from "./response";
import SignInParamsDto, { SignInResponseDto } from "../@types/SignInDto";
import client, { travelerClient } from "./client";
import guideClient from "./client";

export const travelerLogin = async ({ username, password }: SignInParamsDto) => {
  try {
    const response = await travelerClient.post<ExternalResponseSuccess<SignInResponseDto>>(
      '/api/v1/auth/signin',
      {username: username, password: password},
    );
    const accessToken = response.data.data.tokenDto.accessToken;
    const refreshToken = response.data.data.tokenDto.refreshToken;
    const userType = response.data.data.userType;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userType', userType);
    return true;
  } catch (e: any) {
    console.log('login)', e.response.data);
    return false;
  }
};
export const guideLogin = async ({ username, password }: SignInParamsDto) => {
  try {
    const response = await guideClient.post<ExternalResponseSuccess<SignInResponseDto>>(
      '/api/v1/auth/signin',
      {username: username, password: password},
    );
    console.log(username, password);
    const accessToken = response.data.data.tokenDto.accessToken;
    const refreshToken = response.data.data.tokenDto.refreshToken;
    const userType = response.data.data.userType;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userType', userType);
    return true;
  } catch (e: any) {
    console.log('login)', e.response.data);
    return false;
  }
};
export const logout = async () => {
  try {
    // localStorage.setItem('accessToken', '');
    // localStorage.setItem('refreshToken', '');
    // localStorage.setItem('userType', '');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessToken');
    window.location.href = '/';
    return true;
  } catch (e: any) {
    console.log('logout)', e.response.data);
    return false;
  }
};