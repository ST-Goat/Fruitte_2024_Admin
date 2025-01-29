import Link from "next/link";

const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <Link
        href={`/place/detail/${placeId}/orderPrice/opt-2/create`}
        className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
      >
        생성
      </Link>
      <Link
        href="#"
        className="inline-flex rounded-lg border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
      >
        노출순위 설정 완료
      </Link>
    </div>
  );
};

export default ButtonsGroup;
