"use client";

import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const PlaceOrderPriceOpt1 = () => {
  return (
    <div className="grid grid-cols-1 gap-9">
      <div className="flex flex-col gap-9">
        {/* <!-- Survey Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white"></h3>
          </div>
          <div className="p-6.5">
            <div className="mb-5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                플레이스 이름
              </label>
              <input
                type="text"
                placeholder="플레이스 이름을 작성해주세요."
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* <PartnerSelectGroup />
        <DatePicker />
        <Checkbox /> */}
            <button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              //   onClick={handleUpdate}
            >
              설정 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPriceOpt1;
