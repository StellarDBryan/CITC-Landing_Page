import Image from "next/image";
import Nav from "@/components/ui/navbar.jsx";
import Homepage, { About, Solutions, Services } from "@/components/homepage/home.jsx";

export default function Home() {
  return (
    <div className="h-full w-full mb-20 space-y-32">
      <Homepage />
      <About />
      <Solutions />
      <Services />
    </div>
  );
}
