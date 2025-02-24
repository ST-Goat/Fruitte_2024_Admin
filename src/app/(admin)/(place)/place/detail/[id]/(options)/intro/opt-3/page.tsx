"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import ButtonsGroup from "./_components/ButtonsGroup";
import Table from "./_components/Table/Table";
import { useGetIntroOpt3 } from "@/features/place/queries/intro";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

const PlaceIntroOpt3 = ({ params }: Props) => {
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetIntroOpt3(params.id);

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`클래스를 즐기는 방법 설정`} />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                &quot;클래스를 즐기는 방법&quot; 컨텐츠 리스트
              </h3>
            </div>
            <div className="p-6.5">
              <ButtonsGroup placeId={params.id} />
              <Table />
            </div>
          </div>
        )}
      </PlaceDetailLayout>
    </>
  );
};

export default PlaceIntroOpt3;
