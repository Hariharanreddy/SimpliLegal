"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight, Contact } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/landingUI/Hero";
import Brands from "@/components/landingUI/Brands";
import Feature from "@/components/landingUI/Features";
import About from "@/components/landingUI/About";
import FeaturesTab from "@/components/landingUI/FeaturesTab";
import FunFact from "@/components/landingUI/FunFact";
import Integration from "@/components/landingUI/Integration";
import CTA from "@/components/landingUI/CTA";
import FAQ from "@/components/landingUI/FAQ";

export default function Home() {

  return (
    <>
      <main>
        <MaxWidthWrapper>
          <Hero />
          <Brands />
          <Feature />
          <About />
          <FeaturesTab />
          <FunFact />
          <Integration />
          <CTA />
          <FAQ />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
