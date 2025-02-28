"use client";

import React, { useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DataTable from "./_components/DataTable";
import ButtonsGroup from "./_components/ButtonsGroup";
import * as query from "@/features/notice/queries";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

export default function NoticeList({ params }: Props) {
  const { data, isLoading, isError, isSuccess, refetch } = query.useGetNotice();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="공지사항" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    공지사항 리스트
                  </h3>
                </div>
                <div className="p-6.5">
                  <ButtonsGroup />
                  <DataTable />
                </div>
              </div>
            </div>
          </div>
        )}
      </DefaultLayout>
    </>
  );
}
