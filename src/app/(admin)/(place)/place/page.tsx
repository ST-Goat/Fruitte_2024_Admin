"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "./_components/Table/Table";
import Loader from "@/components/common/Loader";
import { useGetPlaceList } from "@/features/place/queries";

export default function PlaceList() {
  const { data, isLoading, isSuccess } = useGetPlaceList();

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="플레이스 리스트" />
        {isLoading && <Loader />}
        {isSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    플레이스 리스트{" "}
                  </h3>
                </div>
                <div className="p-6.5">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        )}
      </DefaultLayout>
    </>
  );
}
