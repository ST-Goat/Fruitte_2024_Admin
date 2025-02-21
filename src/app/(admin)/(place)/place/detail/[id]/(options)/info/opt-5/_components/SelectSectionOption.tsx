"use client";
import React from "react";
import { usePlaceInfoOpt5Store } from "@/features/place/hooks/placeInfo";
import { useGetInfoOpt5 } from "@/features/place/queries";
interface Section {
  id: string;
}

const sections: Section[] = [
  { id: "픽킹체험" },
  { id: "요리체험" },
  { id: "미술놀이" },
  { id: "몸놀이" },
  { id: "물놀이" },
  { id: "흙놀이" },
  { id: "자유시간" },
  { id: "피크닉" },
  { id: "바베큐" },
];

const CheckboxInputGroup: React.FC<{
  id: string;
  isChecked: boolean;
  onChange: () => void;
}> = ({ id, isChecked, onChange }) => (
  <div>
    <label className="relative flex cursor-pointer select-none items-center gap-2 font-medium text-black dark:text-white">
      <input
        className="sr-only"
        type="checkbox"
        name="roleSelect"
        id={id}
        checked={isChecked || false}
        onChange={onChange}
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          isChecked ? "border-primary" : "border-body"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full bg-primary ${
            isChecked ? "flex" : "hidden"
          }`}
        ></span>
      </span>
      {id}
    </label>
  </div>
);

const SelectSectionOption: React.FC = () => {
  const { sections: selectedSections, setSections } = usePlaceInfoOpt5Store();

  return (
    <div className="mb-6">
      <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
        프로그램의 구분을 선택해주세요. (다수 선택 가능)
      </label>

      <div className="flex flex-col gap-5">
        {sections.map((section) => (
          <CheckboxInputGroup
            key={section.id}
            id={section.id}
            isChecked={selectedSections?.includes(section.id)}
            onChange={() => setSections(section.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectSectionOption;
