export interface TodayGuideScheduleDto {
  courseId: number;
  courseTitle: string;
  travelerName: string;
  totalTravelerCount: number;
}
export interface GuideScheduleDto {
  travelDate: string;
  reservations: GuideReservationDto[];
}
export interface GuideReservationDto {
  id: number;
  courseId: number;
  courseTitle: string;
  spots: SpotSquareImageDto[]
  travelerName: string;
  travelerPhone: string;
  requestMessage: string;
  adultCount: number;
  childCount: number;
  babyCount: number;
}
export interface SpotSquareImageDto {
  title: string;
  imageUrl: string;
}