"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import Checkbox from "./_components/Checkbox";

type Props = {
  params: {
    id: string;
  };
};

const PlaceOrderPriceOpt1 = ({ params }: Props) => {
  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`총 소요시간, "날짜 및 시간" 설정`} />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  총 소요시간, "날짜 및 시간" 설정
                </h3>
              </div>
              <div className="p-6.5">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    총 소요시간(분) - 소요시간 별 설명 파트의 총 소요시간(분)과
                    동일하게 설정해주세요.
                  </label>
                  <input
                    type="number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <Textarea />
                <Checkbox />
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  설정 완료
                </button>
              </div>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceOrderPriceOpt1;
