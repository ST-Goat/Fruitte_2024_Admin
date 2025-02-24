"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import Images from "./_components/Images";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import * as hook from "@/features/place/hooks/placeSchedule";
import * as query from "@/features/place/queries/schedule";

type Props = {
  params: {
    id: string;
  };
};

const PlaceScheduleOpt5 = ({ params }: Props) => {
  const router = useRouter();
  const { mode } = hook.usePlaceScheduleOpt5Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetScheduleOpt5(params.id);
  const { mutate: create, isPending: isCreating } =
    query.useCreateScheduleOpt5();
  const { mutate: update, isPending: isUpdating } =
    query.useUpdateScheduleOpt5();

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
        <Breadcrumb pageName={`주차 안내 설정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    &quot;주차 안내&quot; 설정
                  </h3>
                </div>
                <form action={handleUpdate}>
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
        )}
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceScheduleOpt5;
