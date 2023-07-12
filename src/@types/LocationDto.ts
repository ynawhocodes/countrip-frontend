export default interface LocationDto {
  id: number;
  name: string;
  cities: CityDto[];
};
export interface CityDto {
  id: number;
  name: string;
}