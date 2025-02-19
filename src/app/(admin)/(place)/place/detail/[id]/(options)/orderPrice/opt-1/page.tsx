"use client";

import React from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import ButtonsGroup from "./_components/ButtonsGroup";
import Table from "./_components/Table/Table";
import Loader from "@/components/common/Loader";
import * as query from "@/features/place/queries/orderPrice";

type Props = {
  params: {
    id: string;
  };
};

const PlaceOrderPriceOpt1 = ({ params }: Props) => {
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetOrderPriceOpt1(params.id);

  return (
    <PlaceDetailLayout>
      <Breadcrumb pageName={`"가격 및 상품 정보" 티켓 리스트`} />
      {isFetchLoading && <Loader />}
      {isFetchSuccess && (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              "가격 및 상품 정보" 티켓 리스트{" "}
            </h3>
          </div>
          <div className="p-6.5">
            <ButtonsGroup placeId={params.id} />
            <Table />
          </div>
        </div>
      )}
    </PlaceDetailLayout>
  );
};

export default PlaceOrderPriceOpt1;
