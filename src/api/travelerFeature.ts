import { MagazineDto } from "../@types/Magazine";
import { travelerClient } from "./client";
import ExternalResponseSuccess from "./response";


export const fetchMagazineNowList = async () => {
  try {
    const response = await travelerClient.get<ExternalResponseSuccess<MagazineDto[]>>(
      '/api/v1/magazines/now',
    );
    return response;
  } catch (e: any) {
    console.log('fetchMagazineNowList)', e.response.data);
    return e.response;
  }
};