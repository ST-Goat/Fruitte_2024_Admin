"use client";

import React, { useEffect } from "react";
import ImageCommponent from "./Image";
import { usePlaceIntroOpt2CreateStore } from "@/features/place/hooks/placeIntro";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { images } = usePlaceIntroOpt2CreateStore();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        이미지
      </label>
      {images?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
