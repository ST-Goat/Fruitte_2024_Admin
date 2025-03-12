"use client";

import React, { useEffect } from "react";
import FruittePickLayout from "@/components/Layouts/FruittePickLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Table from "./_components/Table/Table";
import * as query from "@/features/fruitte-pick/queries";
import Loader from "@/components/common/Loader";
import ButtonsGroup from "./_components/ButtonsGroup";

type Props = {
  params: {
    id: string;
  };
};

const FruittePickIntroStep = ({ params }: Props) => {
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
        <Breadcrumb pageName="프룻PICK 컨텐츠 우선순위 수정" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    프룻PICK 컨텐츠 리스트
                  </h3>
                </div>
                <div className="p-6.5">
                  <ButtonsGroup pickId={params.id} />
                  <Table pickId={params.id} />
                </div>
              </div>
            </div>
          </div>
        )}
      </FruittePickLayout>
    </>
  );
};

export default FruittePickIntroStep;
