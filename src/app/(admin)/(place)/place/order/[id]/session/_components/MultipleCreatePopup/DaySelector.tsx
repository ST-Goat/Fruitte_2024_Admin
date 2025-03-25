"use client";
import React, { useState } from "react";
import { useSessionMultipleCreatePopupStore } from "@/features/place/hooks/session/session"; // Store import

interface Day {
  id: string;
  name: string;
}

const days: Day[] = [
  { id: "mon", name: "월요일" },
  { id: "tue", name: "화요일" },
  { id: "wed", name: "수요일" },
  { id: "thu", name: "목요일" },
  { id: "fri", name: "금요일" },
  { id: "sat", name: "토요일" },
  { id: "sun", name: "일요일" },
];

const CheckboxInputGroup: React.FC<{
  id: string;
  name: string;
  isChecked: boolean;
  onChange: () => void;
}> = ({ id, name, isChecked, onChange }) => (
  <label className="relative  flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
    <input
      className="sr-only"
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onChange}
    />
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full border bg-white ${
        isChecked ? "border-primary" : "border-gray-400"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full bg-primary ${
          isChecked ? "flex" : "hidden"
        }`}
      ></span>
    </span>
    {name}
  </label>
);

const DaySelector: React.FC = () => {
  const { selectedDays, setSelectedDays } =
    useSessionMultipleCreatePopupStore();

  const handleDayChange = (id: string) => {
    setSelectedDays(id);
  };

  return (
    <div className="my-4">
      <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
        요일을 선택하세요.
      </label>

      <div className="grid grid-cols-3 gap-2.5">
        {days.map((day) => (
          <CheckboxInputGroup
            key={day.id}
            id={day.id}
            name={day.name}
            isChecked={selectedDays.includes(day.id)}
            onChange={() => handleDayChange(day.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
