"use client";
import React from "react";
import { useEffect } from "react";
export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something Went Wrong.Please try again later!</h1>
      <button onClick={() => reset()} className="text-amber-600">
        Try again
      </button>
    </div>
  );
}
