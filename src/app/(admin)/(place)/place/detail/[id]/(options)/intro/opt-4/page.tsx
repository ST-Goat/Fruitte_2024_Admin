"use client";

import React, { useEffect } from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Textarea from "./_components/Textarea";
import {
  useCreateIntroOpt4,
  useGetIntroOpt4,
  useUpdateIntroOpt4,
} from "@/features/place/queries/intro";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import { usePlaceIntroOpt4DescStore } from "@/features/place/hooks/placeIntro";

type Props = {
  params: {
    id: string;
  };
};

const PlaceIntroOpt4 = ({ params }: Props) => {
  const router = useRouter();
  const { mode } = usePlaceIntroOpt4DescStore();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetIntroOpt4(params.id);
  const { mutate: create, isPending: isCreating } = useCreateIntroOpt4();
  const { mutate: update, isPending: isUpdating } = useUpdateIntroOpt4();

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError]);

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
        <Breadcrumb pageName={`"프로그램 VIEW" 설명 파트 설정 `} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    "프로그램 VIEW" 설명 파트 설정
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

export default PlaceIntroOpt4;
