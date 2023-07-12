export interface ExternalResponse<T> {
  status: number;
  data: ExternalAllResponse<T>;
}
export default interface ExternalResponseSuccess<T> {
  code: string;
  data: T;
  detail: string;
  status: string;
  timestamp: string;
}
export interface ExternalResponseFailure<T> {
  code: string;
  data: T;
  detail: string;
  status: string;
  timestamp: string;
}
export type ExternalAllResponse<T> = ExternalResponseSuccess<T> | ExternalResponseFailure<T>;
