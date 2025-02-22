"use client";

import React from "react";
import ImageCommponent from "./Image";
import { usePlaceIntroOpt8Store } from "@/features/place/hooks/placeIntro";
import FileDropZone from "./FileDropZone";

const Images = () => {
  const { images } = usePlaceIntroOpt8Store();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        이미지 (4장까지 가능)
      </label>
      {images?.map((imgSrc, i) => (
        <ImageCommponent key={i} src={imgSrc} index={i} />
      ))}
      <FileDropZone />
    </>
  );
};

export default Images;
