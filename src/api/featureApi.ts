
import ExternalResponseSuccess from "./response";
import SignInParamsDto, { SignInResponseDto } from "../@types/SignInDto";
import client from "./client";

export const fetchGuideHomeInfo = async () => {
  try {
    const response = await client.get<ExternalResponseSuccess<{ existUncheckedReservation: boolean }>>(
      '/api/v1/home/info',
    );
    return response;
  } catch (e: any) {
    console.log('fetchGuideHomeInfo)', e.response.data);
    return e.response;
  }
};