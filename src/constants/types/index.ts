export interface ResponseBody<T> {
  response: T;
  statusCode: number;
  msg: string;
}

type Lng = number;
type Lat = number;
export type Coordinates = [Lng, Lat];

export type NaverMap = naver.maps.Map;

export type OrderStatus = "confirmed" | "completed" | "canceled";
export type mode = "create" | "update";
