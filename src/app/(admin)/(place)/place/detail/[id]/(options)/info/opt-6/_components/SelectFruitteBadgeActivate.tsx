"use client";
import React from "react";
import { usePlaceInfoOpt6Store } from "@/features/place/hooks/placeInfo";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "true", label: "활성화" },
  { id: "false", label: "비활성화" },
];

const SelectFruitteBadgeActivate: React.FC = () => {
  const { fruitte, setFruitte } = usePlaceInfoOpt6Store();

  const handleRadioChange = (value: string) => {
    const status = value === "true";
    setFruitte(status);
  };

  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        프루떼 뱃지
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
                  String(fruitte) === option.id
                    ? "border-primary"
                    : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    String(fruitte) === option.id ? "flex" : "hidden"
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

export default SelectFruitteBadgeActivate;
