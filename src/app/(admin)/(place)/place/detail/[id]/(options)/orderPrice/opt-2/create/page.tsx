"use client";

import React from "react";
import Breadcrumb from "../../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import DescriptionInput from "./_components/DescriptionInput";
import Images from "./_components/Images";

const Opt2CreatePage = () => {
  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`"가격 및 상품 정보" 옵션 생성`} />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  옵션 생성
                </h3>
              </div>
              <div className="p-6.5">
                <DescriptionInput />
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  생성
                </button>
              </div>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
};

export default Opt2CreatePage;
