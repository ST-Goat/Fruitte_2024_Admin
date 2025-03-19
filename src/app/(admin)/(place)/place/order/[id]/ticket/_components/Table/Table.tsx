import React from "react";
import StepDropdown from "./StepDropdown";
import UpdateDropdown from "./UpdateDropdown";
import { useTicketStore } from "@/features/place/hooks/ticket/ticket";

const Table: React.FC = () => {
  const { info } = useTicketStore();

  return (
    <div className="max-w-full overflow-x-auto overflow-y-auto">
      <div className="min-w-[760px]">
        {/* table header start */}
        <div className="grid grid-cols-7 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-1">
            <h5 className="font-medium text-white">고유번호</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">이름</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">가격</h5>
          </div>
        </div>
        {/* table header end */}

        {/* table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {info?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-7 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">{item.id}</p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.title}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.price}
                </p>
              </div>

              <div className="relative col-span-1">
                <UpdateDropdown
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= info.length - 2
                        ? "bottom-full mb-1"
                        : ""
                  }
                  placeId={item.placeId}
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
