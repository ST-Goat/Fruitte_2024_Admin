"use client";

import React from "react";
import Breadcrumb from "../../../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Images from "./_components/Images";
import * as query from "@/features/place/queries/nearby";
import Loader from "@/components/common/Loader";
import { Opt6Info } from "@/features/place/types/intro/api";
import FormInput from "./_components/FormInput";
import { NearbyOpt1 } from "@/features/place/types/nearby/api";

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
  } = query.useGetNearbyOpt1Detail(params.id, params.contentId);
  const { mutate: update, isPending: isUpdating } = query.useUpdateNearbyOpt1(
    data as NearbyOpt1,
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
                  <FormInput />
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
