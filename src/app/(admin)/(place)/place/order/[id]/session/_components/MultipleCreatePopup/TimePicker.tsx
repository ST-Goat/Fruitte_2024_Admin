"use client";

import { useSessionMultipleCreatePopupStore } from "@/features/place/hooks/session/session";
import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";
import Time from "./Time";

const TimePicker = () => {
  const {
    sessionTime,
    setSessionTime,
    sessionTimes,
    setSessionTimes,
    getSessionArray,
  } = useSessionMultipleCreatePopupStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    flatpickr(inputRef.current, {
      mode: "single",
      static: true,
      enableTime: true,
      noCalendar: false,
      dateFormat: "h:i K",
      time_24hr: true,
      defaultDate: sessionTime,
      disable: [
        function (date) {
          return true;
        },
      ],
      disableMobile: true,
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          const selectedTime = selectedDates[0];
          setSessionTime(selectedTime);
          setSessionTimes(selectedDates[0]);
        }
      },
    });
  }, [setSessionTime, sessionTimes, setSessionTimes]);

  return (
    <>
      <div className="mb-2">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          시간선택(날짜와 상관없이 시간이 선택됩니다.)
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            className="form-timepicker w-full rounded border-[1.5px] border-stroke bg-transparent bg-white px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder="시간"
            data-class="flatpickr-session-time"
            readOnly
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {sessionTimes?.map((time, index) => <Time key={index} time={time} />)}
        {/* {getSessionArray()} */}
      </div>
    </>
  );
};

export default TimePicker;
