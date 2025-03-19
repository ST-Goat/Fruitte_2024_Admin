import React from "react";
import { useOptionPopupStore } from "@/features/place/hooks/option/option";
import * as q from "@/features/place/queries/option";

const Popup = ({ placeId }: { placeId: string }) => {
  const {
    open,
    setOpen,
    title,
    setTitle,
    price,
    setPrice,
    mode,
    id,
    isRequired,
    setIsRequired,
  } = useOptionPopupStore();
  const { mutate: create, isPending: isCreating } = q.useCreateOption(placeId);
  const { mutate: update, isPending: isUpdating } = q.useUpdateOption(
    id as number,
    placeId,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !price) return;

    if (mode === "create" && !isCreating) {
      create();
    }

    if (mode === "update" && !isUpdating) {
      update();
    }
    setOpen(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${
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
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              옵션명
            </label>
            <input
              type="text"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="taskTitle"
              className="mb-2.5 block font-medium text-black dark:text-white"
            >
              가격
            </label>
            <input
              type="number"
              name="taskTitle"
              id="taskTitle"
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="checkboxLabelTwo"
              className="flex cursor-pointer select-none items-center"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabelTwo"
                  className="sr-only"
                  onChange={() => {
                    setIsRequired(!isRequired);
                  }}
                />
                <div
                  className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                    isRequired && "border-primary bg-gray dark:bg-transparent"
                  }`}
                >
                  <span className={`opacity-0 ${isRequired && "!opacity-100"}`}>
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              필수 여부
            </label>
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
