import React from "react";
import StepDropdown from "./StepDropdown";
import { useSessionOptionStepStore } from "@/features/place/hooks/session-option/session-option";
import moment from "moment";
import { useGetSessionOptionsBySessionId } from "@/features/place/queries/session-option";
import Loader from "@/components/common/Loader";

const Table = ({ placeId }: { placeId: string }) => {
  const { info } = useSessionOptionStepStore();
  const { isLoading, isSuccess } = useGetSessionOptionsBySessionId();

  return (
    <div className="max-w-full overflow-x-auto overflow-y-auto">
      <div className="min-w-[760px]">
        {/* table header start */}
        <div className="grid grid-cols-9 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-1">
            <h5 className="font-medium text-white">공개순위</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">고유번호</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">옵션명</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">남은재고</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">총재고</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">날짜</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">시간</h5>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
        {/* table header end */}

        {/* table body start */}
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
            {info?.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-9 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
              >
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">
                    {item.step}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">{item.id}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">
                    {item.option}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">
                    {item.remainingStock}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">
                    {item.totalStock}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">
                    {moment(item.sessionDate, "YYYY-MM-DD").format(
                      "YYYY-MM-DD",
                    )}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#637381] dark:text-bodydark">
                    {item.sessionTime
                      ? moment(item.sessionTime, "HH:mm:ss").format("HH:mm")
                      : "시간 없음"}
                  </p>
                </div>
                <div className="relative col-span-1">
                  <StepDropdown
                    classes={
                      index < 2
                        ? "top-full mt-1"
                        : index >= info.length - 2
                          ? "bottom-full mb-1"
                          : ""
                    }
                    id={item.id}
                    step={item.step}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {/* table body end */}
      </div>
    </div>
  );
};

export default Table;
