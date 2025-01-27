"use client";

import { useEffect } from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import Checkbox from "./_components/Checkbox";
import { usePlaceInfoOpt3Store } from "@/features/place/hooks/placeInfo";
import {
  useGetInfoOpt3,
  useUpdateInfoOpt3,
  useCreateInfoOpt3,
} from "@/features/place/queries";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function InfoOpt3({ params }: Props) {
  const router = useRouter();
  const {
    progressTime,
    minimumPrice,
    pricePerPerson,
    youtubeLink,
    setProgressTime,
    setMinimumPrice,
    setPricePerPerson,
    setYoutubeLink,
    mode,
  } = usePlaceInfoOpt3Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetInfoOpt3(params.id);
  const { mutate: create, isPending: isCreating } = useCreateInfoOpt3();
  const { mutate: update, isPending: isUpdating } = useUpdateInfoOpt3();

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError]);

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
          pageName={`상세 정보 설정  ${(isFetchSuccess && mode) === "create" ? "(최초 설정)" : ""}`}
        />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    상세 정보 설정
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      총 진행 시간
                    </label>
                    <input
                      type="number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={progressTime}
                      onChange={(e) =>
                        setProgressTime(e.target.value as string)
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      최소인원
                    </label>
                    <input
                      type="number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={pricePerPerson}
                      onChange={(e) => setPricePerPerson(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      프로그램 참가 최소 비용 (최소인원*기본권 가격)
                    </label>
                    <input
                      type="number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={minimumPrice}
                      onChange={(e) => setMinimumPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      유튜브 릴스 링크
                    </label>
                    <input
                      type="text"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={youtubeLink}
                      onChange={(e) => setYoutubeLink(e.target.value)}
                    />
                  </div>
                  <Checkbox />
                  <button
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    onClick={handleUpdate}
                  >
                    설정 완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </PlaceDetailLayout>
    </>
  );
}
