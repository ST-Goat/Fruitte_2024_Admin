"use client";
import React from "react";
import { usePlaceInfoOpt4Store } from "@/features/place/hooks/placeInfo";
import { parkingStatus } from "@/features/place/hooks/placeInfo";

interface Option {
  id: parkingStatus;
  label: string;
}

const options: Option[] = [
  { id: "perfection", label: "완비" },
  { id: "narrow", label: "주차공간 협소" },
  { id: "disable", label: "불가" },
];

const SelectParkingOption: React.FC = () => {
  const { parking, setParking } = usePlaceInfoOpt4Store();

  const handleRadioChange = (value: parkingStatus) => {
    setParking(value);
  };
  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        주차 환경
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
                  parking === option.id ? "border-primary" : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    parking === option.id ? "flex" : "hidden"
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

export default SelectParkingOption;
