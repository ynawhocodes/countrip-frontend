export default interface ExternalResponseSuccess<T> {
  timestamp: string;
  code: string;
  status: string;
  detail: string;
  data: T;
}

export interface ExternalResponseFailure<T> {
  code: string;
  content: T;
  message: string;
}

export type ExternalResponse<T> = ExternalResponseSuccess<T> | ExternalResponseFailure<T>;