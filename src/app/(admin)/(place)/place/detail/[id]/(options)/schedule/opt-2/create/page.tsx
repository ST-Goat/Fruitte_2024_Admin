"use client";

import React from "react";
import Breadcrumb from "../../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import DescriptionInput from "./_components/DescriptionInput";
import Images from "./_components/Images";
import Textarea from "./_components/Textarea";
import * as query from "@/features/place/queries/schedule";

type Props = {
  params: {
    id: string;
  };
};

const Opt2CreatePage = ({ params }: Props) => {
  const { mutate: create, isPending: isCreating } =
    query.useCreateScheduleOpt2();

  const handleCreate = () => {
    if (!isCreating) {
      create(params.id);
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`소요시간 별 설명 생성`} />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  컨텐츠 생성
                </h3>
              </div>
              <div className="p-6.5">
                <DescriptionInput />
                <Textarea />
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
      </PlaceDetailLayout>
    </>
  );
};

export default Opt2CreatePage;
