import { useEffect, useRef } from "react";
import CreatePopup from "./CreatePopup";
import Image from "next/image";
import * as hooks from "@/features/fruitte-pick/hooks/fruittePick";

const Header = () => {
  const { open, setOpen, setValue, setMode, reset } =
    hooks.useTicketDetailStore();

  const trigger = useRef<any>(null);
  const popup = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!popup.current) return;
      if (
        !open ||
        popup.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!open || keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleCreate = () => {
    reset();
    setOpen(true);
    setMode("create");
  };

  return (
    <>
      <div className="flex flex-col gap-y-4 rounded-sm bg-white pb-4 dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            티켓
          </label>
        </div>
        <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">
          <div>
            <button
              ref={trigger}
              onClick={handleCreate}
              className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                  fill=""
                />
              </svg>
              티켓 추가
            </button>

            {/* <!-- ===== Task Popup Start ===== --> */}
            <CreatePopup />
            {/* <!-- ===== Task Popup End ===== --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
