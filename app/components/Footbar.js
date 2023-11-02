import React from "react";

export default function Footbar() {
  return (
    <div className="h-[88px] bg-[#252F3D] items-center align-middle flex justify-between p-[20px]">
      <div className=" text-white" style={{ fontWeight: 400, fontSize: "16" }}>
        Copyright (c) 2023 | Copyright (c) 2023
      </div>

      <div
        className=" text-white flex gap-5"
        style={{ fontWeight: 400, fontSize: "16" }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"
            />
          </svg>
        </div>
        <div> Secure 256-bit SSL encryption.</div>
      </div>
    </div>
  );
}
