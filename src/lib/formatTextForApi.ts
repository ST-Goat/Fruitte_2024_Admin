export const formatTextForAPI = (text: string): string => {
  if (!text) return "";
  // 줄바꿈을 \n로 유지
  return text.replace(/\r?\n/g, "\\n");
};
