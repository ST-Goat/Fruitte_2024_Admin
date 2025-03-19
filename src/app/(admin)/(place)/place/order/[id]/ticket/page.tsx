"use client";

import React from "react";
import PlaceOrderLayout from "@/components/Layouts/PlaceOrderLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroup from "./_components/ButtonsGroup";
import Table from "./_components/Table/Table";
import Popup from "./_components/Popup";
import * as q from "@/features/place/queries/ticket";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

const Ticket = ({ params }: Props) => {
  const { isLoading, isSuccess } = q.useGetTickets(params.id);

  return (
    <PlaceOrderLayout>
      <Popup placeId={params.id} />
      <Breadcrumb pageName={`티켓 관리`} />
      {isLoading && <Loader />}
      {isSuccess && (
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  티켓 리스트
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

export default Ticket;
