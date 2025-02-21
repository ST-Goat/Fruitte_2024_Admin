"use client";

import { useEffect } from "react";
import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import PartnerSelectGroup from "./_components/PartnerSelectGroup";
import Checkbox from "./_components/Checkbox";
import DatePicker from "./_components/DatePicker";
import { usePlaceInfoOpt1Store } from "@/features/place/hooks/placeInfo";
import Loader from "@/components/common/Loader";
import {
  useGetInfoOpt1,
  useUpdateInfoOpt1,
  useDeletePlace,
  updatePlaceDetailJson,
} from "@/features/place/queries";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  params: {
    id: string;
  };
};

export default function InfoOpt1({ params }: Props) {
  const router = useRouter();
  const { title, setTitle } = usePlaceInfoOpt1Store();
  const {
    isLoading,
    isError: isFetchError,
    isSuccess: isFetchSuccess,
  } = useGetInfoOpt1(params.id);
  const {
    mutate: update,
    isPending: isUpdating,
    isError: isUpdateError,
  } = useUpdateInfoOpt1();
  const {
    mutate: deletePlace,
    isPending: isDeleting,
    isError: isDeleteError,
  } = useDeletePlace(params.id);
  const {
    mutate: updateJson,
    isPending: isUpdatingJson,
    isError: isUpdateJsonError,
  } = updatePlaceDetailJson(params.id);

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError]);

  useEffect(() => {
    if (isUpdateError) {
      toast.error("수정을 실패했습니다.");
    }
  }, [isUpdateError]);

  const handleUpdate = () => {
    if (!isUpdating) {
      update(params.id);
    }
  };

  const handleDelete = () => {
    if (!isDeleting && window.confirm("정말 삭제하시겠습니까?")) {
      deletePlace();
    }
  };

  const handleUpdateJson = () => {
    if (!isUpdatingJson) {
      updateJson();
    }
  };

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb pageName="프로그램 정보 설정" />
        {isLoading && <Loader />}
        {isFetchSuccess && (
          <>
            <div className="grid grid-cols-1 gap-9">
              <div className="flex flex-col gap-9">
                {/* <!-- Survey Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      프로그램 정보 설정
                    </h3>
                  </div>
                  <div className="p-6.5">
                    <div className="mb-5">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        플레이스 이름
                      </label>
                      <input
                        type="text"
                        placeholder="플레이스 이름을 작성해주세요."
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <PartnerSelectGroup id={params.id} />
                    <DatePicker />
                    <Checkbox />
                    <button
                      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                      onClick={handleUpdate}
                    >
                      설정 완료
                    </button>
                    <button
                      className="mt-3 flex w-full justify-center rounded bg-secondary p-3 font-medium text-gray hover:bg-opacity-90"
                      onClick={handleUpdateJson}
                    >
                      갱신하기
                    </button>
                    <button
                      className="mt-8 flex w-full justify-center rounded bg-red p-3 font-medium text-gray hover:bg-opacity-90"
                      onClick={handleDelete}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </PlaceDetailLayout>
    </>
  );
}
