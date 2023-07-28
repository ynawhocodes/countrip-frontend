import { MagazineDto } from "../@types/Magazine";
import { MAGAZINE_TYPE } from "../constants";
import { travelerClient } from "./client";
import ExternalResponseSuccess from "./response";

export const fetchMagazineLandscapeList = async () => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<MagazineDto[]>
    >(`/api/v1/magazines/contents?types=${MAGAZINE_TYPE.LANDSCAPE}`);
    return response;
  } catch (e: any) {
    console.log("fetchMagazineLandscapeList)", e.response.data);
    return e.response;
  }
};