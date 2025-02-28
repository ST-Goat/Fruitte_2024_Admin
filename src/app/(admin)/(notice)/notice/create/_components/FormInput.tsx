"use client";

import React from "react";
import { useNoticeCreateStore } from "@/features/notice/hooks/notice";

const FormInput = () => {
  const { title, setTitle, content, setContent } = useNoticeCreateStore();

  return (
    <>
      <div className="mb-5">
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
      <div className="mb-5.5">
      <label
        htmlFor="textareaLabel"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        본문
      </label>
      <textarea
        rows={6}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        value={content || ""}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
    </>
  );
};

export default FormInput;
