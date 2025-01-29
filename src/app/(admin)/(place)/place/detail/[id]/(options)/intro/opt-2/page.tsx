"use client";

import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import { usePlaceIntroOpt1DescStore } from "@/features/place/hooks/placeIntro";
import {
  useGetIntroOpt1,
  useCreateIntroOpt1,
  useUpdateIntroOpt1,
} from "@/features/place/queries/intro";
import Table from "./_components/Table/Table";
import ButtonsGroup from "./_components/ButtonsGroup";

type Props = {
  params: {
    id: string;
  };
};

export default function IntroOpt2({ params }: Props) {
  const router = useRouter();

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb
          pageName={`"프룻 큐레이터의 PICK 포인트" 컨텐츠 파트 설정 `}
        />
        {/* {isFetchLoading && <Loader />} */}
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  프룻 큐레이터의 PICK 포인트" 컨텐츠 리스트
                </h3>
              </div>
              <div className="p-6.5">
                <ButtonsGroup placeId={params.id} />
                <Table />
              </div>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
}
