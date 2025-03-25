"use client";

import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";
import { useSessionMultipleCreatePopupStore } from "@/features/place/hooks/session/session";
import moment from "moment";

const DatePicker = () => {
  const {
    sessionStartDate,
    sessionEndDate,
    setSessionStartDate,
    setSessionEndDate,
  } = useSessionMultipleCreatePopupStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    flatpickr(inputRef.current, {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "Y-m-d",
      defaultDate: sessionStartDate,
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          const newStartDate = selectedDates[0];

          // 시작일이 변경될 때, 종료일보다 늦어지면 종료일을 조정
          if (sessionEndDate && newStartDate > sessionEndDate) {
            setSessionEndDate(newStartDate);
          }

          setSessionStartDate(newStartDate);
        }
      },
    });
  }, [
    sessionStartDate,
    sessionEndDate,
    setSessionStartDate,
    setSessionEndDate,
  ]);

  useEffect(() => {
    if (!endInputRef.current) return;

    flatpickr(endInputRef.current, {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "Y-m-d",
      defaultDate: sessionEndDate,
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          const newEndDate = selectedDates[0];

          // 종료일이 시작일보다 이전이면 변경을 허용하지 않음
          if (sessionStartDate && newEndDate < sessionStartDate) {
            alert("종료일은 시작일 이전으로 설정할 수 없습니다.");
            return;
          }

          setSessionEndDate(newEndDate);
        }
      },
    });
  }, [sessionStartDate, sessionEndDate, setSessionEndDate]);

  return (
    <>
      <div className="mb-4">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          시작 날짜
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            className="form-enddatepicker w-full rounded border-[1.5px] border-stroke bg-transparent bg-white px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder="날짜"
            data-class="flatpickr-session-start-date"
            value={
              sessionStartDate
                ? moment(sessionStartDate).format("YYYY-MM-DD")
                : ""
            } // sessionStartDate 값 반영
            readOnly
          />

          <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
                fill="#64748B"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          종료 날짜
        </label>
        <div className="relative">
          <input
            ref={endInputRef}
            className="form-startdatepicker w-full rounded border-[1.5px] border-stroke bg-transparent bg-white px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder="날짜"
            data-class="flatpickr-session-end-date"
            value={
              sessionEndDate ? moment(sessionEndDate).format("YYYY-MM-DD") : ""
            } // sessionEndDate 값 반영
            readOnly
          />

          <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
                fill="#64748B"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
