"use client";

import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DataTable from "./_components/DataTable";

export default function NoticeList() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="공지사항" />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* <!-- Survey Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  &quot;프룻 큐레이터의 PICK 포인트&quot; 컨텐츠 리스트
                </h3>
              </div>
              <div className="p-6.5">
                {/* <ButtonsGroup placeId={params.id} /> */}
                <DataTable />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
