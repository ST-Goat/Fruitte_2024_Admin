"use client";

import PlaceDetailLayout from "@/components/Layouts/PlaceDetailLayout";
import Breadcrumb from "../_components/Breadcrumb";
import MainThumbnailImage from "./_components/MainThumbnailImage";
import Images from "./_components/Images";
import SliderImgFileDropZone from "./_components/SliderImgFileDropZone";
import MainThumbnailFileDropZone from "./_components/MainThumbnailFileDropZone";
import SliderImages from "./_components/SliderImages";
import Loader from "@/components/common/Loader";
import * as query from "@/features/place/queries";
import * as hook from "@/features/place/hooks/placeInfo";
type Props = {
  params: {
    id: string;
  };
};
export default function InfoOpt2({ params }: Props) {
  const { mode } = hook.usePlaceInfoOpt2Store();
  const {
    isLoading: isFetchLoading,
    isSuccess: isFetchSuccess,
    isError: isFetchError,
  } = query.useGetInfoOpt2(params.id);
  const { mutate: create, isPending: isCreating } = query.useCreateInfoOpt2();
  const { mutate: update, isPending: isUpdating } = query.useUpdateInfoOpt2();

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
        <Breadcrumb pageName="썸네일 설정" />
        {isFetchLoading && <Loader />}
        {isFetchSuccess && (
          <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
              {/* <!-- Survey Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    메인 썸네일 설정
                  </h3>
                </div>
                <div className="p-6.5">
                  <MainThumbnailImage />
                  <MainThumbnailFileDropZone />
                </div>
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    슬라이더 썸네일 설정
                  </h3>
                </div>
                <form action={handleUpdate}>
                  <div className="p-6.5">
                    <SliderImages />
                    <SliderImgFileDropZone />
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                      설정완료
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
