"use client";

import React, { useState } from "react";
import Header from "./Header";
import Dropdown from "./Dropdown";
import { useFruittePickIntroDetailStore } from "@/features/fruitte-pick/hooks/fruittePick";

const OptionContainer = () => {
  const { option, setOption } = useFruittePickIntroDetailStore();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 기본 동작 방지 (드롭 허용)
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedOptions = [...option];
    const [draggedItem] = updatedOptions.splice(draggedIndex, 1); // 드래그한 항목 제거
    updatedOptions.splice(index, 0, draggedItem); // 새로운 위치에 추가

    setOption(updatedOptions); // 상태 업데이트
    setDraggedIndex(null); // 드래그 상태 초기화
  };

  return (
    <div className="mb-5">
      <Header />
      <div className="flex flex-col gap-2">
        {option.map((e, i) => (
          <div
            key={i}
            draggable="true"
            onDragStart={() => handleDragStart(i)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(i)}
            className="task relative flex cursor-grab justify-between rounded-sm border border-stroke bg-white p-7 shadow-default active:cursor-grabbing dark:border-strokedark dark:bg-boxdark"
          >
            <div>
              <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                {e.title}
              </h5>
              <div className="flex flex-col gap-2">
                <label htmlFor="taskCheckbox3" className="cursor-pointer">
                  <div className="relative flex items-center pt-0.5">
                    <p>{e.price.toLocaleString()} 원</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="absolute right-4 top-4">
              <Dropdown index={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionContainer;
