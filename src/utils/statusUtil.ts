import { logout } from "../api/authApi";
import { FAILURE_STATUS_CODE, SUCCESS_STATUS_CODE } from "../config/status.code.config";

const checkResponseStatus = (status : number) => {
  if (status === 401) {
    alert('토큰 정보가 만료되어 로그인 화면으로 이동합니다');
    window.location.href = '/signin';
    logout();
    return FAILURE_STATUS_CODE;
  }
  else if (getHundredsDigit(status) === 2) {
    return SUCCESS_STATUS_CODE;
  }
  else {
    alert('500 ERROR');
    return FAILURE_STATUS_CODE;
  }
};
export default checkResponseStatus;

export function getHundredsDigit(status: number) {
  return Math.floor(status / 100);
};