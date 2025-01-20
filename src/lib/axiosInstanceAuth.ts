import { BASE_URL } from "@/constants/api";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from "axios";
import { signOut } from "next-auth/react";
import { ResponseBody } from "@/constants/types";
import { getSession } from "next-auth/react";

// 헤더 isAuth 여부 체크
interface CustomHeaders {
  isAuth: boolean;
}

const initHeader: CustomHeaders = { isAuth: true };

const isAuth = async () => {
  const session = await getSession();

  if (session === null) {
    return false;
  } else {
    return {
      accessToken: session?.user?.accessToken,
      refreshToken: session?.user?.refreshToken,
    };
  }
};

// 각 메소드에 담을 header 생성 함수 작성
const getHeader = async (customHeader?: CustomHeaders) => {
  const header: any = customHeader || {};
  const initCustomHeader = customHeader ? customHeader : initHeader;

  if (!initCustomHeader?.isAuth) {
    delete header.Authorization;
  } else {
    // isAuth로 토큰 여부 검사 후 토큰 값
    const token = await isAuth();

    if (!token) return { ...header };

    // 헤더에 토큰 담아서 전달
    header.Authorization = `Bearer ${token.accessToken}`;
    header["x-refresh-token"] = `Bearer ${token.refreshToken}`;
  }

  return { ...header };
};

/**
 * Axios 인스턴스
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Credentials": "*",
  //   "Access-Control-Allow-Private-Network": true,
  // },
  withCredentials: true,
});

const redirectToLogin = () => {
  void signOut({ redirect: true, callbackUrl: "/" });
};

// Request Interceptor 설정
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    const accessToken = session?.user.accessToken;
    const refreshToken = session?.user.refreshToken;

    // Authorization과 RefreshAuth 헤더에 토큰을 추가
    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    if (refreshToken) {
      config.headers["refreshauth"] = `Bearer ${refreshToken}`;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 응답 인터셉터
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // 원래 응답을 그대로 반환
  },
  (error) => {
    const e = error as AxiosError<ResponseBody<any>>;

    const { response, msg } = e.response?.data || {};

    const responseBody: ResponseBody<any> = {
      response: response || {}, // 서버에서 전달된 응답 데이터
      statusCode: error.status || 500, // 상태 코드, 없을 경우 500 (서버 에러)
      msg: msg || error.message, // 에러 메시지
    };

    return Promise.reject(responseBody); // 타입에 맞게 가공된 에러를 던짐
  },
);

async function fetch<ReqType, ResType>(
  url: string,
  params?: ReqType,
  // 백엔드 단에서 header 요청시 포함하여 전달,
  customHeaders?: CustomHeaders,
  responseType?: ResponseType,
): Promise<ResType> {
  const headers = await getHeader(customHeaders);

  return axiosInstance.get(url, { ...params, headers: headers, responseType });
}

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders,
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.post(url, { ...data }, { headers: headers });
}

async function put<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders,
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.put(url, { ...data }, { headers: headers });
}

async function patch<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders,
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = await getHeader(customHeaders);
  return axiosInstance.patch(url, { ...data }, { headers: headers });
}

async function remove<ResType>(
  url: string,
  customHeaders?: CustomHeaders,
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = await getHeader(customHeaders);
  return axiosInstance.delete(url, { headers: headers });
}

const ApiUtils = { post, fetch, put, patch, remove };

export default ApiUtils;
