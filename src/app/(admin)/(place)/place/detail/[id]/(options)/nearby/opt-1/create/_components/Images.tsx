"use client";

import React, { useEffect } from "react";
import ImageCommponent from "./Image";
import { usePlaceIntroOpt6CreateStore } from "@/features/place/hooks/placeIntro";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { images } = usePlaceIntroOpt6CreateStore();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        썸네일(단일 업로드 가능)
      </label>
      {images?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
