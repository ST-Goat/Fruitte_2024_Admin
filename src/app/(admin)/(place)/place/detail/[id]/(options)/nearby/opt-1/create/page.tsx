"use client";

import React from "react";
import Breadcrumb from "../../_components/Breadcrumb";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Images from "./_components/Images";
import * as query from "@/features/place/queries/nearby";
import FormInput from "./_components/FormInput";
import Checkbox from "./_components/Checkbox";
type Props = {
  params: {
    id: string;
  };
};

const Opt1CreatePage = ({ params }: Props) => {
  const { mutate: create, isPending: isCreating } = query.useCreateNearbyOpt1();

  const handleCreate = () => {
    if (!isCreating) {
      create(params.id);
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName={`주변 시설 생성`} />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  주변 시설 생성
                </h3>
              </div>
              <div className="p-6.5">
                <FormInput />
                <Checkbox />
                <Images />
                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  onClick={handleCreate}
                >
                  옵션 생성
                </button>
              </div>
            </div>
          </div>
        </div>
      </PlaceDetailLayout>
    </>
  );
};

export default Opt1CreatePage;
