import React from "react";

const Arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M11.414 3.635a.5.5 0 0 0 0-.707L9.293.807a.5.5 0 0 0-.707.707l.997.997a7.5 7.5 0 0 0-4.075 13.495a.5.5 0 0 0 .6-.8a6.5 6.5 0 0 1 5.29-11.554l.016-.017ZM8.586 16.363l.016-.016c.408.09.831.14 1.264.15l-.006.006a.502.502 0 0 1 .074-.004a6.5 6.5 0 0 0 3.959-11.706a.5.5 0 1 1 .6-.8a7.5 7.5 0 0 1-4.075 13.495l.996.996a.5.5 0 1 1-.707.707l-2.121-2.12a.5.5 0 0 1 0-.708Zm3.768-8.218a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L9 10.792l2.646-2.647a.5.5 0 0 1 .708 0ZM5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
    />
  </svg>
);
const Interface = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
    />
  </svg>
);
const Check = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="m8.46 1.897l.99.39a1.5 1.5 0 0 0 1.099 0l.99-.39a2.418 2.418 0 0 1 3.102 1.285l.424.975a1.5 1.5 0 0 0 .777.777l.975.424a2.418 2.418 0 0 1 1.285 3.103l-.39.99a1.5 1.5 0 0 0 0 1.098l.39.99a2.418 2.418 0 0 1-1.285 3.102l-.975.424a1.499 1.499 0 0 0-.777.777l-.424.975a2.418 2.418 0 0 1-3.103 1.285l-.99-.39a1.5 1.5 0 0 0-1.098 0l-.99.39a2.418 2.418 0 0 1-3.102-1.285l-.424-.975a1.5 1.5 0 0 0-.777-.777l-.975-.424a2.418 2.418 0 0 1-1.285-3.103l.39-.99a1.5 1.5 0 0 0 0-1.098l-.39-.99a2.418 2.418 0 0 1 1.285-3.102l.975-.424a1.5 1.5 0 0 0 .777-.777l.424-.975a2.418 2.418 0 0 1 3.103-1.285Zm4.166 5.77l-3.648 4.104l-1.625-1.625a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .727-.021l4-4.5a.5.5 0 0 0-.747-.665Z"
    />
  </svg>
);
const Truck = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="m245.57 117.78l-14-35a13.93 13.93 0 0 0-13-8.8H182V64a6 6 0 0 0-6-6H24a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H232a14 14 0 0 0 14-14v-64a6 6 0 0 0-.43-2.22ZM182 86h36.58a2 2 0 0 1 1.86 1.26l10.7 26.74H182ZM22 72a2 2 0 0 1 2-2h146v68H22Zm50 138a18 18 0 1 1 18-18a18 18 0 0 1-18 18Zm82.6-24h-53.2a30 30 0 0 0-58.8 0H24a2 2 0 0 1-2-2v-34h148v15.48A30.1 30.1 0 0 0 154.6 186Zm29.4 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18Zm50-26a2 2 0 0 1-2 2h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52Z"
    />
  </svg>
);

const nav = [
  {
    text: "30-DAY SATISFACTION GUARANTEE",
    icon: Check,
  },
  {
    text: "Free delivery on orders over $40.00",
    icon: Truck,
  },
  {
    text: "50.000+ HAPPY CUSTOMERS",
    icon: Interface,
  },
  {
    text: "100% Money Back Guarantee",
    icon: Arrow,
  },
];

export default function Navbar() {
  return (
    <div className="h-[50px] bg-[#252F3D] items-center align-middle flex justify-evenly">
      {nav.map((item) => {
        return (
          <>
            <div style={{ display: "flex", gap: 10 }}>
              <div className=" text-white text-xl">{item.icon}</div>
              <p
                className="font-medium"
                style={{ fontSize: "12px", color: "#FFFFFF" }}
              >
                {item.text}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
