"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PartnerSelectGroup from "./_components/PartnerSelectGroup";
import { usePlaceCreateStore } from "@/features/place/hooks/placeInfo";
import { useCreatePlace } from "@/features/place/queries";
import { toast } from "react-toastify";

export default function PlaceList() {
  const { title, setTitle, partnerUsername } = usePlaceCreateStore();

  const { mutate: create, isPending: isCreating } = useCreatePlace();

  const handleCreate = () => {
    if (partnerUsername === "" || title === "") {
      toast.error("프로그램명 혹은 파트너를 확인해주세요.");
      return;
    }

    if (!isCreating) {
      create();
    }
  };

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="플레이스 생성" />
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="p-6.5">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    플레이스명
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value as string)}
                  />
                </div>
                <PartnerSelectGroup />
                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  onClick={handleCreate}
                >
                  생성하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
