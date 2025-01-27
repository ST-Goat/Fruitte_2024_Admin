"use client";
import React, { useState } from "react";
import {
  usePlaceInfoOpt4Store,
  rainStatus,
} from "@/features/place/hooks/placeInfo";

interface Option {
  id: rainStatus;
  label: string;
}

const options: Option[] = [
  { id: "progress", label: "진행" },
  { id: "raincoat", label: "비옷 입고 진행" },
  { id: "disable", label: "불가" },
];

const SelectRainOption: React.FC = () => {
  const { rain, setRain } = usePlaceInfoOpt4Store();

  const handleRadioChange = (value: rainStatus) => {
    setRain(value);
  };
  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        우천시 환경
      </label>

      <div className="flex flex-wrap items-center gap-5.5">
        {options.map((option) => (
          <div key={option.id}>
            <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
              <input
                className="sr-only"
                type="checkbox"
                name="roleSelect"
                id={option.id}
                onChange={() => handleRadioChange(option.id)}
              />
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  rain === option.id ? "border-primary" : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    rain === option.id ? "flex" : "hidden"
                  }`}
                ></span>
              </span>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRainOption;
