"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect } from "react";
import FormInput from "./_components/FormInput";
import * as query from "@/features/fruitte-pick/queries";

const FruittePickCreatePage = () => {
  const { mutate: create, isPending: isCreating } =
    query.useFruittePickCreate();

  const handleCreate = () => {
    if (!isCreating) {
      create();
    }
  };

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="프룻 PICK 생성" />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  프룻 PICK 생성
                </h3>
              </div>
              <div className="p-6.5">
                <FormInput />
                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  onClick={handleCreate}
                >
                  프룻 PICK 생성
                </button>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default FruittePickCreatePage;
