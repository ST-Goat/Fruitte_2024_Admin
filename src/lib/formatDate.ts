export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
};

export const formatTime = (date: Date) => {
  return date.toTimeString().split(" ")[0]; // HH:MM:SS 형식으로 변환
};
