"use client";

import React, { useEffect } from "react";
import ImageCommponent from "./Image";
import { usePlaceNearbyOpt1DetailStore } from "@/features/place/hooks/placeNearby";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { images } = usePlaceNearbyOpt1DetailStore();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        이미지(단일 업로드 가능)
      </label>
      {images?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
