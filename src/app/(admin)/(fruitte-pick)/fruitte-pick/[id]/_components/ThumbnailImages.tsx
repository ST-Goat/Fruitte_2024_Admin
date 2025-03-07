"use client";

import React, { useEffect } from "react";
import ThumbnailImage from "./ThumbnailImage";
import { useFruittePickDetailStore } from "@/features/fruitte-pick/hooks/fruittePick";
import ThumbnailFileDropZone from "./ThumbnailFileDropZone";

const ThumbnailImages = () => {
  const { thumbnail } = useFruittePickDetailStore();
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        썸네일 이미지 (단일 업로드 가능)
      </label>
      {thumbnail?.map((imgSrc, i) => (
        <ThumbnailImage key={i} src={imgSrc} index={i} />
      ))}
      <ThumbnailFileDropZone />
    </>
  );
};

export default ThumbnailImages;
