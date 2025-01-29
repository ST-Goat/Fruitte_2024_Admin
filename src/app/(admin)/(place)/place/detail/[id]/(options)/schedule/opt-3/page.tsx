"use clinet";

import React from "react";
import Breadcrumb from "../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import DescriptionInput from "./_components/DescriptionInput";

const PlaceScheduleOpt3 = () => {
  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`"장소" 설정`} />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              "장소" 설정
            </h3>
          </div>
          <div className="p-6.5">
            <DescriptionInput />
            {/* 지도 찾기 기능 추가 */}
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              수정 완료
            </button>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceScheduleOpt3;
