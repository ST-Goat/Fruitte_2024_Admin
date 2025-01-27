"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "nouislider/dist/nouislider.css";
import "dropzone/dist/dropzone.css";
import "@/css/satoshi.css";
import "@/css/simple-datatables.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { SessionProvider } from "next-auth/react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  Query,
} from "@tanstack/react-query";
import TokenExpiration from "@/components/Auth/Auth";
import { toast, ToastContainer } from "react-toastify";
import { ResponseBody } from "@/constants/types";
import { queryClient } from "@/lib/queryClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <TokenExpiration />
        <body suppressHydrationWarning={true}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {children}
            </div>
          </QueryClientProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
