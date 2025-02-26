import ApiUtils from "@/lib/axiosInstanceAuth";

export const getExample = async () => {
  const { data } = await ApiUtils.fetch<any, any>("/event/list");

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    const { events } = response;
    return events;
  }
};
