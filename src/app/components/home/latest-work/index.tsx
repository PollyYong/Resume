"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const renderDescription = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
    return (
      <ul className="list-disc pl-5 text-sm md:text-base space-y-2 text-justify">
        {lines.map((line, index) => (
          <li key={index} className="leading-relaxed text-justify">
            {line}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Projects</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-3 xl:gap-6"
                  >
                    <Link
                      href={value?.link || "#!"}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block rounded-lg overflow-hidden aspect-[4/3]"
                    >
                      <Image
                        src={getImgPath(value?.image)}
                        alt={value?.title || "project image"}
                        fill
                        sizes="(min-width: 1024px) 570px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 backdrop-blur-xs bg-primary/15 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#89CFF0"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <Link href={`${value.slug}`}>
                          <h5>{value?.title}</h5>
                        </Link>
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow-icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      {renderDescription(value?.Description)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;