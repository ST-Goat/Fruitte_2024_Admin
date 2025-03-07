"use client";

import React from "react";
import Header from "./Header";
import Dropdown from "./Dropdown";

const TicketContainer = () => {
  return (
    <div className="mb-5">
      <Header />
      <div className="flex flex-col gap-9">
        {/* <!-- Todo list --> */}
        <div className="task relative flex justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div>
            <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
              Task title
            </h5>
            <div className="flex flex-col gap-2">
              <label htmlFor="taskCheckbox3" className="cursor-pointer">
                <div className="relative flex items-center pt-0.5">
                  <p>Here is task Three</p>
                </div>
              </label>
            </div>
          </div>
          <div className="absolute right-4 top-4">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
