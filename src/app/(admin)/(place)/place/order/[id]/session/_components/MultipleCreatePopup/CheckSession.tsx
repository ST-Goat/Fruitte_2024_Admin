"use client";

import React from "react";
import { useSessionMultipleCreatePopupStore } from "@/features/place/hooks/session/session";
import moment from "moment";
import { useParams } from "next/navigation";
import { CreateSessionRequest } from "@/features/place/types/session/api";

const CheckSession = () => {
  const { getSessionArray } = useSessionMultipleCreatePopupStore();
  const params = useParams();
  const placeId = params?.id as string;

  return (
    <div className="my-4">
      <label
        htmlFor="taskTitle"
        className="mb-2.5 block font-medium text-black dark:text-white"
      >
        생성 예정 회차 ({getSessionArray(placeId).length}개)
      </label>
      {getSessionArray(placeId).map((e: CreateSessionRequest, i: number) => (
        <div className="task relative mb-0.5 flex justify-between rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div>
            <p
              className="text-lg font-medium text-black dark:text-white"
              key={i}
            >
              {moment(e.sessionDate).format("YYYY-MM-DD(ddd)")} /{" "}
              {e.sessionTime} /{" "}
              {e.mode === "session"
                ? `회차모드 / 총재고:${e.totalStock} / 남은재고:${e.remainingStock}`
                : "티켓모드"}
              {" / "}
              {e.exposed ? "공개" : "미공개"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckSession;
