import React from "react";
import StepDropdown from "./StepDropdown";
import UpdateDropdown from "./UpdateDropdown";
import { usePlaceIntroOpt2Store } from "@/features/place/hooks/placeIntro";

interface TableData {
  id: number;
  step: number;
  time: number;
  title: string;
}

const data: TableData[] = [
  {
    id: 1,
    step: 1,
    time: 10,
    title: "1번 설명",
  },
  {
    id: 2,
    step: 2,
    time: 30,
    title: "2번 설명",
  },
  {
    id: 3,
    step: 3,
    time: 40,
    title: "3번 설명",
  },
];

const Table: React.FC = () => {
  const { info } = usePlaceIntroOpt2Store();

  return (
    <div className="max-w-full overflow-x-auto overflow-y-auto">
      <div className="min-w-[760px]">
        {/* table header start */}
        <div className="grid grid-cols-8 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-1">
            <h5 className="font-medium text-white">노출순위(step)</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">고유번호</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">제목</h5>
          </div>
          <div className="col-span-1">
            <h5 className="font-medium text-white">소요시간(분)</h5>
          </div>
        </div>
        {/* table header end */}

        {/* table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-8 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">{item.step}</p>
              </div>
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">{item.id}</p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.title}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[#637381] dark:text-bodydark">{item.time}</p>
              </div>

              <div className="relative col-span-1">
                <StepDropdown
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= data.length - 2
                        ? "bottom-full mb-1"
                        : ""
                  }
                  id={item.id}
                  step={item.step}
                />
              </div>
              <div className="relative col-span-1">
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
