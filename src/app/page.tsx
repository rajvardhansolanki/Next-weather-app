import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
