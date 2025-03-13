import axios from "axios";

export const searchAddress = async (query: string) => {
  try {
    const response = await axios.get(
      "https://dapi.kakao.com/v2/local/search/address.json",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        },
        params: {
          query,
        },
      },
    );

    return { x: response.data.documents[0].x, y: response.data.documents[0].y };
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};
