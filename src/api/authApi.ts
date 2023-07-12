
import ExternalResponseSuccess from "./response";
import SignInParamsDto, { SignInResponseDto } from "../@types/SignInDto";
import client from "./client";

export const login = async ({ username, password }: SignInParamsDto) => {
  try {
    const response = await client.post<ExternalResponseSuccess<SignInResponseDto>>(
      '/auth/signin',
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