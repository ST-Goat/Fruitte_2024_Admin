"use client";

import React, { useEffect } from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import Checkbox from "./_components/Checkbox";
import * as query from "@/features/place/queries/schedule";
import * as hook from "@/features/place/hooks/placeSchedule";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const PlaceScheduleOpt1 = ({ params }: Props) => {
  const router = useRouter();
  const { mode } = hook.usePlaceScheduleOpt1Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetScheduleOpt1(params.id);
  const { mutate: create, isPending: isCreating } =
    query.useCreateScheduleOpt1();
  const { mutate: update, isPending: isUpdating } =
    query.useUpdateScheduleOpt1();

  const handleUpdate = () => {
    if (mode === "create" && !isCreating) {
      create(params.id);
    }

    if (mode === "update" && !isUpdating) {
      update(params.id);
    }
  };

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError, router]);

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`총 소요시간, 날짜 및 시간 설정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    총 소요시간, &quot;날짜 및 시간&quot; 설정
                  </h3>
                </div>
                <div className="p-6.5">
                  <Textarea />
                  <Checkbox />
                  <button
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    onClick={handleUpdate}
                  >
                    설정 완료
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

export default PlaceScheduleOpt1;
