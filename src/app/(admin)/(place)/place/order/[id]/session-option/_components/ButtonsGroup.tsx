"use client";

import React from "react";
import { useOptionPopupStore } from "@/features/place/hooks/option/option";
import { useSessionMultipleCreatePopupStore } from "@/features/place/hooks/session/session";
import {
  useSessionOptionStore,
  useSessionOptionPopupStore,
} from "@/features/place/hooks/session-option/session-option";

const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  const { selectedRow } = useSessionOptionStore();
  const { setValueForCreate } = useSessionOptionPopupStore();
  const { setValueForCreate: multipleCreateOpen } =
    useSessionMultipleCreatePopupStore();

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
        <button
          className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
          onClick={multipleCreateOpen}
        >
          일괄생성
        </button>
      </div>
      {selectedRow.length > 0 && (
        <div className="flex gap-x-1">
          <button className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3">
            일괄삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonsGroup;
