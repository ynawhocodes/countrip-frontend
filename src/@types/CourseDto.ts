import { SpotSquareImageDto } from "./GuideDto";

export default interface CourseDto {
  id: number;
  title: string;
  guideName: string;
  spots: SpotSquareImageDto[];
}