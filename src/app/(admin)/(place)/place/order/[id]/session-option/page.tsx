"use client";

import React from "react";
import PlaceOrderLayout from "@/components/Layouts/PlaceOrderLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader from "@/components/common/Loader";
import ButtonsGroup from "./_components/ButtonsGroup";
import Popup from "./_components/Popup/Popup";
import Table from "./_components/Table";
import * as q from "@/features/place/queries/session-option";

type Props = {
  params: {
    id: string;
  };
};

const SessionOption = ({ params }: Props) => {
  const { isLoading, isSuccess } = q.useGetSessionOptions(params.id);

  return (
    <PlaceOrderLayout>
      <Popup placeId={params.id} />
      <Breadcrumb pageName={`회차-옵션 관리`} />
      {isLoading && <Loader />}
      {isSuccess && (
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  회차-옵션 리스트
                </h3>
              </div>
              <div className="p-6.5">
                <ButtonsGroup placeId={params.id} />
                <Table />
              </div>
            </div>
          </div>
        </div>
      )}
    </PlaceOrderLayout>
  );
};

export default SessionOption;
