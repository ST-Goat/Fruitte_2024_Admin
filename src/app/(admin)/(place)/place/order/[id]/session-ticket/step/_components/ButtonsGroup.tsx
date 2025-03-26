"use client";

import React from "react";
import { useUpdateSessionTicketsStep } from "@/features/place/queries/session-ticket";

const ButtonsGroup = ({ placeId }: { placeId: string }) => {
  const { mutate: updateStep, isPending: isUpdating } =
    useUpdateSessionTicketsStep();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUpdating) {
      updateStep(placeId);
    }
  };

  return (
    <div className="mb-6 flex items-center justify-between gap-x-4">
      <div className="flex gap-x-2">
        <button
          className="inline-flex rounded-lg border px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
          onClick={handleSubmit}
        >
          공개순위 수정
        </button>
      </div>
    </div>
  );
};

export default ButtonsGroup;
