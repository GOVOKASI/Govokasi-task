import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div
      className={` ${inter} w-[364px] h-[735.50px] bg-gradient-to-b from-amber-500 to-amber-600 flex-col justify-start items-start inline-flex`}
    >
      <div className="self-stretch h-20  bg-white flex-col justify-center items-center flex">
        <Image
          className="w-[167px] h-12"
          width={500}
          height={500}
          src="/site-logo.png"
          alt="site-logo"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-[364px] h-12 justify-center items-center gap-5 inline-flex">
        <div className="text-white text-xs font-bold leading-none">Talent</div>
        <div className="text-orange-200 text-xs font-normal leading-none">
          Hiring Partner
        </div>
      </div>
      <div className="self-stretch h-[607.50px] px-5 pt-28 pb-10 flex-col justify-start items-start gap-10 flex">
        <div className="w-[307px] h-[219px] relative">
          {/* //* Hour training */}
          <div className="w-[100px] h-[46px] px-3 py-2 left-[210px] top-[45px] z-10 absolute bg-gradient-to-r from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-yellow-900 text-sm font-bold leading-none ">
                +500
              </div>
              <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                Hour Training
              </div>
            </div>
          </div>
          {/* //* Talent Pool */}
          <div className="w-[100px] h-[46px] px-3 py-2 right-[40px] top-[-80px] z-10 absolute bg-gradient-to-r from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-yellow-900 text-sm font-bold leading-none ">
                +6000
              </div>
              <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                Talent Pool
              </div>
            </div>
          </div>
          {/*//* intern full time */}
          <div className="w-[109px] h-[46px] px-3 py-2 left-[30px] top-[90px] z-10 absolute bg-gradient-to-l from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-center items-end inline-flex">
              <div className="text-yellow-900 text-sm font-bold leading-none ">
                80%
              </div>
              <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                Intern To FullTime
              </div>
            </div>
          </div>
          {/*//* start up partners */}
          <div className="w-[100px] h-[46px] px-3 py-2 left-[5px] top-[-50px] z-10 absolute bg-gradient-to-l from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-center items-end inline-flex">
              <div className="text-yellow-900 text-sm font-bold leading-none ">
                +120
              </div>
              <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                Startup Partner
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[195.50px] flex-col justify-start items-start flex">
          <div className="w-[324px] relative">
            <div className="w-[324px] h-[195.50px] z-0 bottom-[-35px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
              <Image
                className=" w-full"
                width={500}
                height={500}
                src="/frame 4.svg"
                alt="frame 2"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch z-10">
            <span className="text-white text-[40px] font-black leading-[48px]">
              JUMPSTART YOUR{" "}
            </span>
            <span className="text-white text-[40px] font-black leading-[48px]">
              CAREER
            </span>
          </div>
          <div className="self-stretch z-10 text-orange-200 text-xl font-bold leading-normal">
            Govokasi help you to growth and gain your full potential skills
          </div>
          <div className="mt-6 z-10">
            <div className=" px-5 p-4 bg-white rounded-[999px] justify-center items-center gap-4 inline-flex">
              <div className="text-slate-950 text-sm font-bold leading-none">
                Register Now
              </div>
              <div>
                {" "}
                <ArrowRightIcon className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[307px] h-[219px] relative">
          <Image
            className="absolute z-0 bottom-[-40px] right-[-30px]"
            width={200}
            height={200}
            src="/vector 2.svg"
            alt="site-logo"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="absolute h-min z-0 bottom-[-40px] right-[-30px]"
            width={100}
            height={200}
            src="/vector 3.svg"
            alt="site-logo"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="absolute h-min z-0 bottom-[140px] right-[230px]"
            width={45}
            height={43}
            src="/star 2.svg"
            alt="big star"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="absolute h-min z-0 bottom-[90px] right-[200px]"
            width={22.28}
            height={21.31}
            src="/star 3.svg"
            alt="little star"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
