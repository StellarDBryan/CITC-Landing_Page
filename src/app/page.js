import Image from "next/image";
import Nav from "@/components/ui/navbar.jsx";
import Homepage, { About } from "@/components/homepage/home.jsx";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Homepage />
      <About />
    </div>
  );
}
