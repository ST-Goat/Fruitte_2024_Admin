"use client";
import React from "react";
import {
  usePlaceInfoOpt4Store,
  restroomStatus,
} from "@/features/place/hooks/placeInfo";

interface Option {
  id: restroomStatus;
  label: string;
}

const options: Option[] = [
  { id: "traditional", label: "재래식" },
  { id: "flush", label: "수세식" },
  { id: "none", label: "없음" },
];

const SelectRestroomOption: React.FC = () => {
  const { restroom, setRestroom } = usePlaceInfoOpt4Store();

  const handleRadioChange = (value: "traditional" | "flush" | "none") => {
    setRestroom(value);
  };

  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        화장실 환경
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
                  restroom === option.id ? "border-primary" : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    restroom === option.id ? "flex" : "hidden"
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

export default SelectRestroomOption;
