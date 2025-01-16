"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { placeDetailOptions } from "./options";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">플레이스 설정</Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 py-4 lg:px-6">
          {/* place Menu */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {placeDetailOptions.info.title}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Calendar --> */}
              {placeDetailOptions.info.options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={
                      "/place/detail/" + "1" + "/info/opt-" + `${index + 1}`
                    }
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes(option.link) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {index + 1}. {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {placeDetailOptions.intro.title}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {placeDetailOptions.intro.options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={
                      "/place/detail/" + "1" + "/intro/opt-" + `${index + 1}`
                    }
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes(option.link) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {index + 1}. {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {placeDetailOptions.schedule.title}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {placeDetailOptions.schedule.options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={
                      "/place/detail/" + "1" + "/schedule/opt-" + `${index + 1}`
                    }
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes(option.link) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {index + 1}. {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {placeDetailOptions.orderPrice.title}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {placeDetailOptions.orderPrice.options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={
                      "/place/detail/" +
                      "1" +
                      "/orderPrice/opt-" +
                      `${index + 1}`
                    }
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes(option.link) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {index + 1}. {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {placeDetailOptions.nearBy.title}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {placeDetailOptions.nearBy.options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={
                      "/place/detail/" + "1" + "/nearby/opt-" + `${index + 1}`
                    }
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes(option.link) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {index + 1}. {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- Menu Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;