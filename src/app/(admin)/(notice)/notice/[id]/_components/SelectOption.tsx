"use client";
import React from "react";
import { NoticeType } from "@/features/notice/types/api";
import { useNoticeDetailStore } from "@/features/notice/hooks/notice";

interface Option {
  id: NoticeType;
  label: string;
}

const options: Option[] = [
  { id: "congratulation", label: "축하" },
  { id: "announcement", label: "공지" },
  { id: "notification", label: "알림" },
  { id: "warning", label: "경고" },
  { id: "security", label: "보안" },
  { id: "star", label: "별" },
];

const SelectOption: React.FC = () => {
  const { type, setType } = useNoticeDetailStore((state) => ({
    type: state.type,
    setType: state.setType,
  }));

  const handleRadioChange = (value: NoticeType) => {
    setType(value);
  };

  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        타입
      </label>

      <div className="flex flex-wrap items-center gap-5.5">
        {options.map((option) => (
          <div key={option.id}>
            <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
              <input
                className="sr-only"
                type="radio"
                name="roleSelect"
                id={option.id}
                checked={type === option.id}
                onChange={() => handleRadioChange(option.id)}
              />
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  type === option.id ? "border-primary" : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    type === option.id ? "flex" : "hidden"
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

export default SelectOption;
