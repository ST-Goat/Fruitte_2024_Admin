"use client";

import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import MainThumbnailImage from "./_components/MainThumbnailImage";
import Images from "./_components/Images";
import FileDropZone from "./_components/FileDropZone";
export default function InfoOpt1() {
  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName="썸네일 설정" />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  메인 썸네일 설정
                </h3>
              </div>
              <form action="#">
                <div className="p-6.5">
                  <MainThumbnailImage />
                  <FileDropZone />
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    메인 썸네일 저장
                  </button>
                </div>
              </form>
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  슬라이더 썸네일 설정
                </h3>
              </div>
              <form action="#">
                <div className="p-6.5">
                  <Images />
                  <Images />
                  <Images />
                  <FileDropZone />
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    슬라이더 썸네일 저장
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
}
