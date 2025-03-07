"use client";

import React, { useEffect } from "react";
import FruittePickLayout from "@/components/Layouts/FruittePickLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroup from "./_components/ButtonsGroup";
import DataTable from "./_components/DataTable";
import * as query from "@/features/fruitte-pick/queries";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

const FruittePickListIntroPage = ({ params }: Props) => {
  const { data, isLoading, isError, isSuccess, refetch } =
    query.useGetFruittePickIntroList(params.id);

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <>
      <FruittePickLayout>
        <Breadcrumb pageName="프룻 PICK 소개 컨텐츠 리스트" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    프룻 PICK 리스트
                  </h3>
                </div>
                <div className="p-6.5">
                  <ButtonsGroup pickId={params.id} />
                  <DataTable />
                </div>
              </div>
            </div>
          </div>
        )}
      </FruittePickLayout>
    </>
  );
};

export default FruittePickListIntroPage;
