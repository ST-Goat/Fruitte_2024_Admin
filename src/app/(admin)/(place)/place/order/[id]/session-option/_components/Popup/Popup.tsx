import React from "react";
import { useSessionOptionPopupStore } from "@/features/place/hooks/session-option/session-option";
import * as q from "@/features/place/queries/session-option";
import { formatDate, formatTime } from "@/lib/formatDate";
import SelectSession from "./SelectSession";
import SelectOption from "./SelectOption";

const Popup = ({ placeId }: { placeId: string }) => {
  const {
    open,
    setOpen,
    mode,
    id,
    maxSelectable,
    setMaxSelectable,
    minRequired,
    setMinRequired,
    totalStock,
    setTotalStock,
    remainingStock,
    setRemainingStock,
  } = useSessionOptionPopupStore();

  const { mutate: create, isPending: isCreating } =
    q.useCreateSessionOption(placeId);
  const { mutate: update, isPending: isUpdating } = q.useUpdateSessionOption(
    id as number,
    placeId,
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "create" && !isCreating) {
      create();
    }
    if (mode === "update" && !isUpdating) {
      console.log("update");

      update();
    }

    setOpen(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-99999 block flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${
        open === true ? "block" : "hidden"
      }`}
    >
      <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-1 top-1 sm:right-5 sm:top-5"
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
              fill=""
            />
          </svg>
        </button>

        <form>
          <SelectSession placeId={placeId} />
          <SelectOption placeId={placeId} />
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              최대 선택 가능 수
            </label>
            <input
              type="number"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={maxSelectable}
              onChange={(e) => setMaxSelectable(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              최소 선택 필요 수
            </label>
            <input
              type="number"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={minRequired}
              onChange={(e) => setMinRequired(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              총 재고 수
            </label>
            <input
              type="number"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={totalStock}
              onChange={(e) => setTotalStock(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              남은 재고 수
            </label>
            <input
              type="number"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={remainingStock}
              onChange={(e) => setRemainingStock(e.target.value)}
            />
          </div>
          {mode === "create" && (
            <button
              className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4.5 py-2.5 font-medium text-white hover:bg-opacity-90"
              onClick={handleSubmit}
            >
              생성
            </button>
          )}
          {mode === "update" && (
            <button
              className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4.5 py-2.5 font-medium text-white hover:bg-opacity-90"
              onClick={handleSubmit}
            >
              수정
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Popup;
