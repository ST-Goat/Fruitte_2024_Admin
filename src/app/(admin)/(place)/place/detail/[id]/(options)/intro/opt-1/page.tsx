"use client";

import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import Textarea from "./_components/Textarea";
import { usePlaceIntroOpt1DescStore } from "@/features/place/hooks/placeIntro";
import {
  useGetIntroOpt1,
  useCreateIntroOpt1,
  useUpdateIntroOpt1,
} from "@/features/place/queries/intro";

type Props = {
  params: {
    id: string;
  };
};

export default function IntroOpt1({ params }: Props) {
  const router = useRouter();
  const { mode } = usePlaceIntroOpt1DescStore();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = useGetIntroOpt1(params.id);
  const { mutate: create, isPending: isCreating } = useCreateIntroOpt1();
  const { mutate: update, isPending: isUpdating } = useUpdateIntroOpt1();

  const handleUpdate = () => {
    if (mode === "create" && !isCreating) {
      create(params.id);
    }

    if (mode === "update" && !isUpdating) {
      update(params.id);
    }
  };

  useEffect(() => {
    if (isFetchError) {
      router.push("/");
    }
  }, [isFetchError, router]);

  return (
    <>
      <PlaceDetailLayout>
        <Breadcrumb
          pageName={`&quot;프룻 큐레이터의 PICK 포인트&quot; 설명 파트 설정 `}
        />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    &quot;프룻 큐레이터의 PICK 포인트&quot; 설명 파트 설정
                  </h3>
                </div>
                <form action={handleUpdate}>
                  <div className="p-6.5">
                    <Textarea />
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
