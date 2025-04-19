"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`hover:text-gray-700 font-semibold  ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-gray-600 rounded-lg"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}
