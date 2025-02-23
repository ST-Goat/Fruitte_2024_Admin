"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import { usePlaceScheduleOpt6Store } from "@/features/place/hooks/placeSchedule";
import { useRouter } from "next/navigation";
import * as query from "@/features/place/queries/schedule";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

const PlaceScheduleOpt6 = ({ params }: Props) => {
  const router = useRouter();
  const { mode } = usePlaceScheduleOpt6Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetScheduleOpt6(params.id);
  const { mutate: create, isPending: isCreating } =
    query.useCreateScheduleOpt6();
  const { mutate: update, isPending: isUpdating } =
    query.useUpdateScheduleOpt6();

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
        <Breadcrumb pageName={`&quot;주의사항&quot; 설정 `} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    &quot;주의사항&quot; 설정
                  </h3>
                </div>
                <form action={handleUpdate}>
                  <div className="p-6.5">
                    <Textarea />
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

export default PlaceScheduleOpt6;
