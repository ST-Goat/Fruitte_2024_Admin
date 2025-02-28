"use client";

import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormInput from "./_components/FormInput";
import Checkbox from "./_components/Checkbox";
import * as query from "@/features/notice/queries";
import Loader from "@/components/common/Loader";
import { Notice } from "@/features/notice/types/api";

type Props = {
  params: {
    id: string;
  };
};

const NoticeDetail = ({ params }: Props) => {
  const {
    data,
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetNoticeDetail(params.id);
  const { mutate: update, isPending: isUpdating } = query.useUpdateNotice(
    data as Notice,
  );

  const handleUpdate = () => {
    if (!isUpdating) {
      update();
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="공지사항 상세" />
      {isFetchLoading && <Loader />}
      {isFetchSuccess && (<div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                공지사항 상세
              </h3>
            </div>
            <div className="p-6.5">
              <FormInput />
              <FormInput />
              <Checkbox />
              <button
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                onClick={handleUpdate}
              >
                수정
              </button>
            </div>
          </div>
        </div>
      </div>)}

    </DefaultLayout>
  );
};

export default NoticeDetail;
