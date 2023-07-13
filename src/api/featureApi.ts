
import ExternalResponseSuccess from "./response";
import SignInParamsDto, { SignInResponseDto } from "../@types/SignInDto";
import client from "./client";
import { GuideReservationDto, GuideScheduleDto, TodayGuideScheduleDto } from "../@types/GuideDto";
import CourseDto from "../@types/CourseDto";

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
export const fetchBookedGuideDatesByCurrentMonth = async (month: string) => {
  try {
    const response = await client.get<ExternalResponseSuccess<{ date: string[] }>>(
      `/api/v1/home/calendar/${month}`,
    );
    return response;
  } catch (e: any) {
    console.log('fetchBookedGuideDatesByCurrentMonth)', e.response.data);
    return e.response;
  }
};
export const fetchGuideTodaySchedule = async () => {
  try {
    const response = await client.get<ExternalResponseSuccess<TodayGuideScheduleDto[]>>(
      `/api/v1/home/today-plans`,
    );
    return response;
  } catch (e: any) {
    console.log('fetchGuideTodaySchedule)', e.response.data);
    return e.response;
  }
};
export const fetchGuideSchedule = async () => {
  try {
    const response = await client.get<ExternalResponseSuccess<GuideScheduleDto[]>>(
      `/api/v1/guides/plans`,
    );
    return response;
  } catch (e: any) {
    console.log('fetchGuideSchedule)', e.response.data);
    return e.response;
  }
};
export const fetchMyCourseList = async () => {
  try {
    const response = await client.get<ExternalResponseSuccess<CourseDto[]>>(
      `/api/v1/courses`,
    );
    return response;
  } catch (e: any) {
    console.log('fetchMyCourseList)', e.response.data);
    return e.response;
  }
};
