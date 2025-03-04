"use client";

import React, { useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Table from "./_components/Table/Table";
import * as query from "@/features/notice/queries";
import Loader from "@/components/common/Loader";
import ButtonsGroup from "./_components/ButtonsGroup";

const NoticeStep = () => {
  const { isSuccess, refetch, isLoading } = query.useGetExposedNotice();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="공지사항 우선순위 수정" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    공개중인 공지사항 리스트
                  </h3>
                </div>
                <div className="p-6.5">
                  <ButtonsGroup />
                  <Table />
                </div>
              </div>
            </div>
          </div>
        )}
      </DefaultLayout>
    </>
  );
};

export default NoticeStep;
