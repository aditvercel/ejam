import React from "react";
import clarifon from "../public/icons/clarifon.svg";
import Mcafee from "../public/icons/Mcafee.svg";
import norton from "../public/icons/norton.svg";
import tickcircle from "../public/icons/tickcircle.svg";
import image4 from "../public/icons/image4.svg";
import Rectangle from "../public/icons/Rectangle.svg";
import Stars from "../public/icons/Stars.svg";
import verify1 from "../public/icons/verify1.svg";
import Phone from "../public/icons/Phone.svg";
import tickcircle1 from "../public/icons/tickcircle1.svg";
import percent from "../public/icons/percent.svg";
import Line1 from "../public/icons/Line1.svg";
import image6 from "../public/icons/image6.svg";

import Image from "next/image"; // Import Image from "next/image"

const step = [
  {
    text: "Step 1 : Cart Review",
    icon: tickcircle,
    color: "#85BF55",
  },
  {
    text: "Step 2 : Checkout",
    icon: tickcircle,
    color: "#85BF55",
  },
  {
    text: "Step 3 : Special Offer",
    icon: "",
    color: "#2C7EF8",
    numcolor: "white",
  },
  {
    text: "Step 4 : Confirmation",
    icon: "",
    color: "white",
    numcolor: "#2C7EF8",
  },
];

export default function Home() {
  return (
    <div>
      <div
        style={{ height: 96 }}
        className="flex justify-between pl-[10px] pr-[10px]"
      >
        <Image
          src={clarifon}
          alt="Clarifon Logo"
          width={192} // Set the desired width
          height={36} // Set the desired height
        />
        <div className="flex gap-[32px]">
          <Image
            src={Mcafee}
            alt="Clarifon Logo"
            width={88} // Set the desired width
            height={32} // Set the desired height
          />

          <Image
            src={norton}
            alt="Clarifon Logo"
            width={88} // Set the desired width
            height={32} // Set the desired height
          />
        </div>
      </div>
      <div className="grid justify-center align-middle text-center">
        <div style={{ fontWeight: 400, fontSize: 48 }}>
          Wait ! your order in progress.
        </div>
        <div style={{ fontWeight: 400, fontSize: 24 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
      </div>

      <div className=" flex justify-evenly mt-20">
        {step.map((item, index) => {
          return (
            <>
              <div className="flex justify-center align-middle items-center gap-5">
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt="Logo"
                    width={40} // Set the desired width
                    height={40} // Set the desired height
                    className=" text-white"
                    style={{
                      backgroundColor: `${item.color}`,
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <div
                    className="w-[40px] h-[40px] rounded-full border border-[#2C7EF8] flex justify-center align-middle items-center"
                    style={{
                      backgroundColor: `${item.color}`,
                      color: `${item.numcolor ? item.numcolor : "#2C7EF8"}`,
                    }}
                  >
                    {index + 1}
                  </div>
                )}
                <div>{item.text}</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="grid p-10 gap-10 lg:flex">
        <div className="grid lg:w-[50%] p-5">
          <Image src={image4} className="lg:w-[575px] lg:h-[591px]" />

          <div className="grid lg:flex gap-3 mt-10">
            <Image className="w-[48px] h-[48px]" src={Rectangle} />
            <div className="grid md:justify-center md:align-middle">
              <Image src={Stars} className="md:self-center md:flex" />
              <div className="flex justify-center align-middle items-center gap-3">
                <p>Ken T.</p> <Image src={verify1} /> <p>Verified Customer</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </div>
        </div>
        <div className="lg:w-[50%] pt-10">
          <div style={{ fontWeight: 400, fontSize: 32 }}>
            <span style={{ fontWeight: 600, fontSize: 32, color: "#2C7EF8" }}>
              ONE TIME ONLY
            </span>{" "}
            special price for 6 extra Clarifion for only
            <span style={{ fontWeight: 600, fontSize: 32, color: "#2C7EF8" }}>
              $14 each
            </span>{" "}
            ($84.00 total!)
          </div>
          <div className="mt-5 grid lg:flex gap-5 w-[100%]">
            <div className="w-[134px] h-[134px] bg-[#2C7EF8] rounded-xl">
              <Image src={Phone}></Image>
            </div>
            <div className="flex justify-between lg:w-[70%]">
              <div>
                <p>Clarifion Air Ionizer</p>
                <Image src={Stars} />
                <div className="flex align-middle items-center self-center gap-2">
                  <div
                    className="w-[16px] h-[16px] rounded-full bg-[#2C7EF8] mt-2"
                    style={{ border: "4px solid #E3EEFF" }}
                  ></div>
                  <p className="mt-2">12 left in Stock</p>
                </div>
                <p>
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
              <div className="flex gap-2">
                <p style={{ color: "#969696", textDecoration: "line-through" }}>
                  $180
                </p>
                <p style={{ color: "#2C7EF8", fontWeight: 600, fontSize: 22 }}>
                  $84
                </p>
              </div>
            </div>
          </div>
          <div className="grid pl-5 gap-3 mt-5">
            <div className="flex gap-2">
              <Image src={tickcircle1}></Image>
              <p style={{ fontWeight: 700, fontSize: 16 }}>
                Negative Ion Technology may <strong>help with allergens</strong>
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tickcircle1}></Image>
              <p style={{ fontWeight: 700, fontSize: 16 }}>
                Designed for <strong>air rejuvenation</strong>
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tickcircle1}></Image>
              <p style={{ fontWeight: 700, fontSize: 16 }}>
                <strong>Perfect for every room</strong> in all types of places.
              </p>
            </div>
            <div className="h-[56px] bg-[#EDF3FD] flex align-middle items-center self-center pl-3 gap-3">
              <div className=" rounded-full bg-[#2C7EF8] w-[20px] h-[20px]">
                <Image src={percent} />
              </div>
              <p>
                Save <span style={{ color: "#2C7EF8" }}>53%</span> and get{" "}
                <span style={{ color: "#2C7EF8" }}>6 extra Clarifision</span>{" "}
                for only <span style={{ color: "#2C7EF8" }}>$14 Each.</span>
              </p>
            </div>
          </div>
          <div className="h-[104px] rounded-full bg-[#59AE43] mt-10 text-white flex justify-center align-middle items-center">
            <p
              style={{ fontWeight: 700, fontSize: 20, display: "flex", gap: 5 }}
            >
              Yes - Claim my discount
              <Image src={Line1} />
            </p>
          </div>
          <div className="border h-[33px] mt-5 flex justify-evenly align-middle items-center">
            <div>Free shipping</div>
            <div>Secure 256-bit SSL encryption.</div>
            <div>Secure 256-bit SSL encryption.</div>
          </div>
          <p
            className=" text-center text-[#F82C2C] mt-3"
            style={{
              fontSize: 18,
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            No thanks, I don’t want this.
          </p>
          <div className="flex mt-3 gap-3">
            <Image src={image6} className="h-[88px] w-[88px]" />
            <p>
              If you are not completely thrilled with your Clarifion - We have a
              30 day satisfaction guarantee. Please refer to our return policy
              at the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
