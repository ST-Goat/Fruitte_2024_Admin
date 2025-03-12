"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FruittePickLayout from "@/components/Layouts/FruittePickLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormInput from "./_components/FormInput";
import * as hook from "@/features/fruitte-pick/hooks/fruittePick";
import * as query from "@/features/fruitte-pick/queries/index";
import Loader from "@/components/common/Loader";
import * as i from "@/features/fruitte-pick/types/api";

type Props = {
  params: {
    id: string;
    contentId: string;
  };
};

const FruittePickIntroDetail = ({ params }: Props) => {
  const { isLoading, isError, isSuccess, data } =
    query.useGetFruittePickIntroDetail(params.id, params.contentId);
  const { mutate: create, isPending: isCreating } =
    query.useUpdateFruittePickIntro(data as i.FruittePickIntro);

  const handleCreate = () => {
    if (!isCreating) {
      create();
    }
  };

  return (
    <>
      <FruittePickLayout>
        <Breadcrumb pageName="프룻 PICK 컨텐츠 수정" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    프룻 PICK 컨텐츠 생성
                  </h3>
                </div>
                <div className="p-6.5">
                  <FormInput />
                  <button
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    onClick={handleCreate}
                  >
                    컨텐츠 생성
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </FruittePickLayout>
    </>
  );
};

export default FruittePickIntroDetail;
