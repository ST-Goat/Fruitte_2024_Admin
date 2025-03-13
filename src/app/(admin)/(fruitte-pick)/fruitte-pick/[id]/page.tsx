"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FruittePickLayout from "@/components/Layouts/FruittePickLayout";
import React, { useEffect } from "react";
import FormInput from "./_components/FormInput";
import Loader from "@/components/common/Loader";
import * as query from "@/features/fruitte-pick/queries";
import * as i from "@/features/fruitte-pick/types/api";

type Props = {
  params: {
    id: string;
  };
};

const FruittePickDetailPage = ({ params }: Props) => {
  const {
    data,
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetFruittePick(params.id);
  const { mutate: update, isPending: isUpdating } =
    query.useFruittePickUpdateStore(data as i.FruittePick);

  const handleUpdate = () => {
    if (!isUpdating) {
      update();
    }
  };

  return (
    <>
      <FruittePickLayout>
        <Breadcrumb pageName="프룻 PICK 수정" />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    프룻 PICK 수정
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      노출순위(step) - 공개우선순위수정 페이지에서 수정이
                      가능합니다.
                    </label>
                    <input
                      type="text"
                      disabled
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                      value={data?.step}
                    />
                  </div>
                  <FormInput />
                  <button
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    onClick={handleUpdate}
                  >
                    프룻 PICK 수정
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </FruittePickLayout>
    </>
  );
};

export default FruittePickDetailPage;
