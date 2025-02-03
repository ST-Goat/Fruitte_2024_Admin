import React, { useEffect } from "react";
import ImageResize from "@/js/image-resize";
import Image from "next/image";
import { usePlaceIntroOpt2DetailStore } from "@/features/place/hooks/placeIntro";

const ImageCommponent = ({ src, index }: { src: string; index: number }) => {
  const { setImageStep, removeImage } = usePlaceIntroOpt2DetailStore();
  useEffect(() => {
    ImageResize();
  });

  return (
    <>
      <div className="flex justify-between border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          {index + 1}번째 썸네일
        </h3>
        <div className="flex gap-2">
          {index !== 0 && (
            <svg
              onClick={() => setImageStep(index, -1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          )}

          <svg
            onClick={() => setImageStep(index, 1)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
          <svg
            onClick={() => removeImage(index)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 sm:p-6 xl:p-10">
        <div className="relative">
          <div id="pane" className="overflow-hidden">
            <Image src={src} width={1374} height={520} alt="Cover" />
          </div>
          <div
            id="ghostpane"
            className="absolute left-0 top-0 duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ImageCommponent;
