"use client";

import React, { useEffect } from "react";
import ImageCommponent from "./Image";
import { useFruittePickCreateStore } from "@/features/fruitte-pick/hooks/fruittePick";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { prologueImg } = useFruittePickCreateStore();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        프롤로그 이미지 (단일 업로드 가능)
      </label>
      {prologueImg?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
