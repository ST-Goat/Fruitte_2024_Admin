"use client";

import React, { useEffect } from "react";
import ImageCommponent from "./Image";
import { usePlaceScheduleOpt5Store } from "@/features/place/hooks/placeSchedule";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { images } = usePlaceScheduleOpt5Store();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        이미지(다수 업로드 가능)
      </label>
      {images?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
