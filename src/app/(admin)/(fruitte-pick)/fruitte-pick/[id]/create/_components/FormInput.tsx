"use client";

import React from "react";
import { useFruittePickCreateStore } from "@/features/fruitte-pick/hooks/fruittePick";
import Checkbox from "./Checkbox";
// import DatePicker from "./DatePicker";
import Images from "./Images";
// import ThumbnailImages from "./ThumbnailImages";
import PlaceSelector from "./PlaceSelector";
import TicketContainer from "./Ticket/Container";
import OptionContainer from "./Option/Container";
import ProgramContainer from "./Program/Container";

const FormInput = () => {
  const { title, setTitle, writer, setWriter, prologue, setPrologue } =
    useFruittePickCreateStore();

  return (
    <>
      <div className="mb-5">
        {/* <ThumbnailImages /> */}
        <PlaceSelector />
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          제목
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          프롤로그
        </label>
        <textarea
          rows={6}
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={prologue || ""}
          onChange={(e) => setPrologue(e.target.value)}
        />
      </div>
      {/* <Images /> */}
      <TicketContainer />
      <OptionContainer />
      <ProgramContainer />
      <Checkbox />
      {/* <DatePicker /> */}
    </>
  );
};

export default FormInput;
