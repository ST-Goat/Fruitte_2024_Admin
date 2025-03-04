import Link from "next/link";

const ButtonsGroup = () => {
  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <Link
        href={`/notice/create`}
        className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
      >
        생성
      </Link>
    </div>
  );
};

export default ButtonsGroup;
