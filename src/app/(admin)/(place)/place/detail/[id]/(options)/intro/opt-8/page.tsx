"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import TitleInput from "./_components/TitleInput";
import Images from "./_components/Images";
import { useRouter } from "next/navigation";
import * as query from "@/features/place/queries/intro";
import Loader from "@/components/common/Loader";
import { usePlaceIntroOpt8Store } from "@/features/place/hooks/placeIntro";

type Props = {
  params: {
    id: string;
  };
};

const PlaceIntroOpt8 = ({ params }: Props) => {
  const { mode } = usePlaceIntroOpt8Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetIntroOpt8(params.id);
  const { mutate: create, isPending: isCreating } = query.useCreateIntroOpt8();
  const { mutate: update, isPending: isUpdating } = query.useUpdateIntroOpt8();

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
        <Breadcrumb pageName={`"프로그램 소개" 설정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    "프로그램 소개" 설정
                  </h3>
                </div>
                <div className="p-6.5">
                  <TitleInput />
                  <Textarea />
                  <Images />
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

export default PlaceIntroOpt8;
