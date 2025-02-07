import { API_URL } from "@/constants/api";
import ApiUtils from "@/lib/axiosInstanceAuth";
import { ResponseBody } from "@/constants/types";
import { AxiosResponse } from "axios";

interface getPresignedUrlRequest {
  fileName: string;
  fileType: string;
}
interface getPresignedUrlResponse
  extends ResponseBody<{
    presignedUrl: string;
    fileUrl: string;
  }> {}

export const uploadImgOnS3 = async (file: File, directory: string = "") => {
  const fileInfo = {
    fileName: file.name,
    fileType: file.type,
    directory,
  };

  // 2. presigned URL 요청
  const { data } = await ApiUtils.post<
    getPresignedUrlRequest,
    AxiosResponse<getPresignedUrlResponse>
  >(`${API_URL.getPresignedUrl}`, fileInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    const { presignedUrl, fileUrl } = response;

    // 3. presigned URL을 이용해 S3에 파일 업로드
    const uploadResponse = await fetch(presignedUrl, {
      method: "PUT",
      body: file, // 실제 파일 데이터
      headers: {
        "Content-Type": file.type, // 파일 타입 지정
      },
    });

    if (uploadResponse.ok) {
      // 4. S3 업로드 성공 시 파일 URL 반환
      return fileUrl;
    } else {
      throw new Error("Failed to upload image to S3");
    }
  } else {
    throw new Error(msg || "Failed to get presigned URL");
  }
};
