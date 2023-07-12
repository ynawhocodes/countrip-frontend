export default interface SignInParamsDto {
  username: string;
  password: string;
};
export interface SignInResponseDto {
  id: number;
  userType: string;
  tokenDto: TokenDto;
};
export interface TokenDto {
  accessToken: string;
  accessTokenExpiresIn: number;
  grantType: string;
  refreshToken: string;
}