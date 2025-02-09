"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import Images from "./_components/Images";

type Props = {
  params: {
    id: string;
  };
};

const PlaceScheduleOpt4 = ({ params }: Props) => {
  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`"길 안내" 설정`} />
        {/* {isFetchLoading && <Loader />} */}
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  "길 안내" 설정
                </h3>
              </div>
              <form action={"#"}>
                <div className="p-6.5">
                  <Textarea />
                  <Images />
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    설정 완료
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceScheduleOpt4;
