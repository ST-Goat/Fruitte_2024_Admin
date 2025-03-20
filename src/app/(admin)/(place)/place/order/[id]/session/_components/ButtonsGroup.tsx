"use client";

import React from "react";
import { useOptionPopupStore } from "@/features/place/hooks/option/option";
import {
  useSessionStore,
  useSessionPopupStore,
} from "@/features/place/hooks/session/session";
const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  const { selectedRow } = useSessionStore();
  const { setValueForCreate } = useSessionPopupStore();

  const handleCreate = () => {
    setValueForCreate();
  };

  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <div className="flex gap-x-2">
        <button
          className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
          onClick={handleCreate}
        >
          생성
        </button>
        <button className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3">
          일괄생성
        </button>
      </div>
      {selectedRow.length > 0 && (
        <div className="flex gap-x-1">
          <button className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3">
            일괄삭제
          </button>
          <button className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3">
            일괄공개
          </button>
          <button className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3">
            일괄미공개
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonsGroup;
