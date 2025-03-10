"use client";

import React, { useEffect } from "react";
import ThumbnailImage from "./Image";
import ThumbnailFileDropZone from "./FileDropZone";
import * as hook from "@/features/fruitte-pick/hooks/fruittePick";

const Images = () => {
  const { img } = hook.useProgramDetailStore();

  // img 값이 없거나, 유효한 URL이 아닐 경우 렌더링하지 않음
  const isValidImg = typeof img === "string" && img.startsWith("http");

  return (
    <>
      {isValidImg && <ThumbnailImage src={img} />}
      <ThumbnailFileDropZone />
    </>
  );
};

export default Images;
