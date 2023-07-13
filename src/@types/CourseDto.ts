import { SpotSquareImageDto } from "./GuideDto";

export default interface CourseDto {
  id: number;
  title: string;
  guideName: string;
  spots: SpotSquareImageDto[];
}
// TODO: 위 구조와 겹치는데 spos의 dto 변경이 필요할 듯
export interface CourseDetailDto {
  id: number;
  title: string;
  guideName: string;
  // TODO: SpotDto가 있어서 이렇게 지음. 변경하기
  spots: SpotDetailDto[];
}
export interface SpotDetailDto {
  title: string;
  imageUrl: string;
  address: string;
  telephone: string;
  homepage: string;
  description: string;
  orderNum: number;
}