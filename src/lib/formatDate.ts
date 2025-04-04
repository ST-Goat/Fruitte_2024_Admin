import moment from "moment";

export const formatDate = (date: Date) => {
  return moment(date).format("YYYY-MM-DD"); // YYYY-MM-DD 형식으로 변환
};

export const formatTime = (date: Date) => {
  return moment(date).format("HH:mm"); // HH:MM:SS 형식으로 변환
};

export const formatStringDate = (stringDate: string | Date) => {
  return new Date(stringDate);
};

export const formatStringTime = (stringTime: string | Date) => {
  return new Date(`1970-01-01T${stringTime}`);
};
