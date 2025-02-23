"use client";

import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import SelectSectionOption from "./_components/SelectSectionOption";
import { usePlaceInfoOpt5Store } from "@/features/place/hooks/placeInfo";
import { useRouter } from "next/navigation";
import {
  useCreateInfoOpt5,
  useGetInfoOpt5,
  useUpdateInfoOpt5,
} from "@/features/place/queries";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";

type Props = {
  params: {
    id: string;
  };
};

export default function InfoOpt5({ params }: Props) {
  const router = useRouter();
  const { mode } = usePlaceInfoOpt5Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetInfoOpt5(params.id);
  const { mutate: create, isPending: isCreating } = useCreateInfoOpt5();
  const { mutate: update, isPending: isUpdating } = useUpdateInfoOpt5();

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError, router]);

  const handleUpdate = () => {
    if (mode === "create" && !isCreating) {
      create(params.id);
    }

    if (mode === "update" && !isUpdating) {
      update(params.id);
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb
          pageName={`프로그램 구분 설정  ${(isFetchSuccess && mode) === "create" ? "(최초 설정)" : ""}`}
        />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    프로그램 구분 설정
                  </h3>
                </div>
                <form action={handleUpdate}>
                  <div className="p-6.5">
                    <SelectSectionOption />
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                      설정 완료
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </PlaceDetailLayout>
    </>
  );
}
