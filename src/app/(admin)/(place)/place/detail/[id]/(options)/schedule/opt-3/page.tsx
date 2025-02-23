"use client";

import React from "react";
import Breadcrumb from "../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import DescriptionInput from "./_components/DescriptionInput";
import * as hook from "@/features/place/hooks/placeSchedule";
import * as query from "@/features/place/queries/schedule";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};
const PlaceScheduleOpt3 = ({ params }: Props) => {
  const { mode } = hook.usePlaceScheduleOpt3Store();

  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetScheduleOpt3(params.id);
  const { mutate: create, isPending: isCreating } =
    query.useCreateScheduleOpt3();
  const { mutate: update, isPending: isUpdating } =
    query.useUpdateScheduleOpt3();

  const handleUpdate = () => {
    if (mode === "create" && !isCreating) {
      create(params.id);
    }

    if (mode === "update" && !isUpdating) {
      update(params.id);
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`&quot;장소&quot; 설정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                &quot;장소&quot; 설정
              </h3>
            </div>
            <div className="p-6.5">
              <DescriptionInput />
              <button
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                onClick={handleUpdate}
              >
                수정 완료
              </button>
            </div>
          </div>
        )}
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceScheduleOpt3;
