import { QueryClient, QueryCache, Query } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ResponseBody } from "@/constants/types";

// 정확한 매개변수 타입 지정
function queryCacheOnError(
  error: unknown, // 'unknown'으로 지정
  query: Query<unknown, unknown, unknown, readonly unknown[]>, // Query 에러 타입을 유연하게 처리
) {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    "statusCode" in error &&
    "msg" in error
  ) {
    const responseBody = error as ResponseBody<any>;
    toast.error(
      `Error Code ${responseBody?.statusCode} : ${responseBody?.msg}`,
    );
  } else {
    toast.error(error as string);
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
  queryCache: new QueryCache({
    onError: queryCacheOnError,
  }),
});

export const enum TErrCodes {
  PLACE_OPT3_INFO_FETCH_FAILED,
  // other error codes...
}
