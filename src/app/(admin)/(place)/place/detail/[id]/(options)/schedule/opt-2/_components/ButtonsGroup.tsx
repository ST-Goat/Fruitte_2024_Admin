import Link from "next/link";
import * as query from "@/features/place/queries/schedule";

const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  const { mutate: updateStep, isPending: isUpdating } =
    query.useUpdateScheduleOpt2Step();

  const handleUpdateStep = () => {
    if (!isUpdating) {
      updateStep(placeId);
    }
  };

  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <Link
        href={`/place/detail/${placeId}/schedule/opt-2/create`}
        className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
      >
        생성
      </Link>
      <button
        className="inline-flex rounded-lg border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
        onClick={handleUpdateStep}
      >
        노출순위 설정 완료
      </button>
    </div>
  );
};

export default ButtonsGroup;
