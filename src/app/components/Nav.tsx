"use client";
import Link from "next/link";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
  title: string;
  icon?: string;
};
export default function Nav(p: Props) {
  return (
    <Link
      href={p.href}
      className="flex flex-col group border p-2 rounded-sm border-orange-500"
      prefetch={false}
    >
      <div className="flex items-center relative">
        <div>{p.title}</div>
        <div>
        </div>
      </div>
      <div>{p.children}</div>
    </Link>
  );
}