"use client";

import { use, useEffect } from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import SelectRestroomOption from "./_components/SelectRestroomOption";
import SelectParkingOption from "./_components/SelectParkingOption";
import SelectRainOption from "./_components/SelectRainOption";
import SelectBabycarOption from "./_components/SelectBabycarOption";
import SelectPetOption from "./_components/SelectPetOption";
import SelectFoodOption from "./_components/SelectFoodOption";
import {
  useCreateInfoOpt4,
  useGetInfoOpt4,
  useUpdateInfoOpt4,
} from "@/features/place/queries";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import { usePlaceInfoOpt4Store } from "@/features/place/hooks/placeInfo";

type Props = {
  params: {
    id: string;
  };
};

export default function InfoOpt4({ params }: Props) {
  const router = useRouter();
  const { mode } = usePlaceInfoOpt4Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetInfoOpt4(params.id);
  const { mutate: create, isPending: isCreating } = useCreateInfoOpt4();
  const { mutate: update, isPending: isUpdating } = useUpdateInfoOpt4();

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError, router]);

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
        <Breadcrumb
          pageName={`프로그램 환경 설정 ${(isFetchSuccess && mode) === "create" ? "(최초 설정)" : ""}`}
        />
        {isFetchLoading && <Loader />}

        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  프로그램 환경 설정
                </h3>
              </div>
              <form action={handleUpdate}>
                <div className="p-6.5">
                  <SelectRestroomOption />
                  <SelectParkingOption />
                  <SelectRainOption />
                  <SelectBabycarOption />
                  <SelectPetOption />
                  <SelectFoodOption />
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    설정 완료
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
}
