"use client"
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import { translation } from "@/types/translation.props";

export default function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center" >
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >Patel Heel</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"> {translation?.COURSE_DESC}</p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem" className="bg-white-dark text-black-dark border-neutral-200-dark">
              {translation?.EXPLORE_COURSE}
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

