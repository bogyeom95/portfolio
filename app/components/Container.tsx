"use client";
import { ReactNode } from "react";
export default function Container({ children }: { children: ReactNode }) {
  return <main className="w-[100vw]  ">{children}</main>;
}
