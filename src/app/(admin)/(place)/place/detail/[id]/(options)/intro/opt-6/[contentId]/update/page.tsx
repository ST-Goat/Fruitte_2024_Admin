"use client";

import React from "react";
import Breadcrumb from "../../../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import TitleInput from "./_components/TitleInput";
import DescriptionInput from "./_components/DescriptionInput";
import Images from "./_components/Images";
import * as query from "@/features/place/queries/intro";
import Loader from "@/components/common/Loader";
import { Opt6Info } from "@/features/place/types/intro/api";

type Props = {
  params: {
    id: string;
    contentId: string;
  };
};
const Opt6DetailPage = ({ params }: Props) => {
  const {
    data,
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetIntroOpt6Detail(params.id, params.contentId);
  const { mutate: update, isPending: isUpdating } = query.useUpdateIntroOpt6(
    data as Opt6Info,
  );

  const handleUpdate = () => {
    if (!isUpdating) {
      update();
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`"프로그램 VIEW" 옵션 수정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    옵션 수정
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      노출순위(step) - 리스트 조회페이지에서 수정이 가능합니다.
                    </label>
                    <input
                      type="text"
                      disabled
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                      value={data?.step}
                    />
                  </div>
                  <TitleInput />
                  <DescriptionInput />
                  <Images />
                  <button
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    onClick={handleUpdate}
                  >
                    수정 완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </PlaceDetailLayout>
    </>
  );
};

export default Opt6DetailPage;
