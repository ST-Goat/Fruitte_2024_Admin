"use client";

import React from "react";
import StepDropdown from "./StepDropdown";
import UpdateDropdown from "./UpdateDropdown";
import { useGetPlaceList } from "@/features/place/queries";
import moment from "moment";

const Table: React.FC = () => {
  const { data } = useGetPlaceList();

  return (
    <div className="max-w-full overflow-x-auto overflow-y-auto">
      <div className="min-w-[760px]">
        {/* table header start */}
        <div className="grid grid-cols-9 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-1">
            <h5 className="font-medium text-white">고유번호</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">플레이스명</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">파트너명</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">오픈일</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">오픈여부</h5>
          </div>
          <div className="col-span-2"></div>
        </div>
        {/* table header end */}

        {/* table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {data?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-9 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">{item.id}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.title}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.partnerUsername}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">
                  {moment(item.openDateTime).format("YYYY-MM-DD HH:mm")}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.openStatus === true ? "오픈" : "미오픈"}
                </p>
              </div>

              <div className="relative col-span-2">
                <UpdateDropdown
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= data.length - 2
                        ? "bottom-full mb-1"
                        : ""
                  }
                  id={item.id}
                />
              </div>
            </div>
          ))}
        </div>
        {/* table body end */}
      </div>
    </div>
  );
};

export default Table;
