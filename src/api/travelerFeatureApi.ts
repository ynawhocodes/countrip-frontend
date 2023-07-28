import CourseDto, { CourseSearchDto } from "../@types/CourseDto";
import { MagazineDto } from "../@types/Magazine";
import { MAGAZINE_TYPE } from "../constants";
import { travelerClient } from "./client";
import ExternalResponseSuccess from "./response";

export const fetchMagazineNowList = async () => {
  try {
    const response = await travelerClient.get<
    ExternalResponseSuccess<MagazineDto[]>
    >("/api/v1/magazines/now");
    return response;
  } catch (e: any) {
    console.log("fetchMagazineNowList)", e.response.data);
    return e.response;
  }
};
export const fetchMagazineFarmExperienceList = async () => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<MagazineDto[]>
    >(`/api/v1/magazines/contents?types=${MAGAZINE_TYPE.FARM_EXPERIENCE}`);
    return response;
  } catch (e: any) {
    console.log("fetchMagazinFarmExperienceList)", e.response.data);
    return e.response;
  }
};
export const fetchMagazineRestaurantList = async () => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<MagazineDto[]>
    >(`/api/v1/magazines/contents?types=${MAGAZINE_TYPE.RESTAURANT}`);
    return response;
  } catch (e: any) {
    console.log("fetchMagazinRestaurantList)", e.response.data);
    return e.response;
  }
};
export const fetchMagazineTouristAttractionList = async () => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<MagazineDto[]>
    >(`/api/v1/magazines/contents?types=${MAGAZINE_TYPE.TOURIST_ATTRACTION}`);
    return response;
  } catch (e: any) {
    console.log("fetchMagazineTouristAttractionList)", e.response.data);
    return e.response;
  }
};
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
export const fetchLocationList = async () => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<CourseDto>
    >(`/api/v1/cities`);
    return response;
  } catch (e: any) {
    console.log("fetchLocationList)", e.response.data);
    return e.response;
  }
};
export const fetchCourseSearchResult = async (
  { cityId, travelDate, adultCount, childCount, babyCount }: CourseSearchDto,
  categoryId: number
) => {
  try {
    const response = await travelerClient.get<
      ExternalResponseSuccess<CourseDto[]>
    >(`/api/v1/courses/search?category=${categoryId}`, {
      params: {
        cityId: cityId,
        travelDate: travelDate,
        adultCount: adultCount,
        childCount: childCount,
        babyCount: babyCount,
      },
    });
    return response;
  } catch (e: any) {
    console.log("fetchCourseSearchResult)", e.response.data);
    return e.response;
  }
};
