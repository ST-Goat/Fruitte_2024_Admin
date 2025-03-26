"use client";

import React from "react";
import PlaceOrderLayout from "@/components/Layouts/PlaceOrderLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroup from "./_components/ButtonsGroup";
import SessionSelector from "./_components/SessionSelector";
import Table from "./_components/Table/Table";

type Props = {
  params: {
    id: string;
  };
};

const SessionTicketStep = ({ params }: Props) => {
  return (
    <PlaceOrderLayout>
      <Breadcrumb pageName={`회차-티켓 공개순위 관리`} />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Survey Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                회차-티켓 공개순위 리스트
              </h3>
            </div>
            <div className="p-6.5">
              <SessionSelector placeId={params.id} />
              <ButtonsGroup placeId={params.id} />
              <Table placeId={params.id} />
            </div>
          </div>
        </div>
      </div>
    </PlaceOrderLayout>
  );
};

export default SessionTicketStep;
