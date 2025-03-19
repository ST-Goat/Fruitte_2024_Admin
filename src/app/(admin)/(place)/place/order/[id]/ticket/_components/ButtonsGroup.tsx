"use client";

import React from "react";
import { useTicketPopupStore } from "@/features/place/hooks/ticket/ticket";

const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  const { setValueForCreate } = useTicketPopupStore();

  const handleCreate = () => {
    setValueForCreate();
  };

  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <button
        className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
        onClick={handleCreate}
      >
        생성
      </button>
    </div>
  );
};

export default ButtonsGroup;
