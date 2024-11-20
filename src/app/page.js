
import Homepage, { Solutions, Services } from "@/components/homepage/home.jsx";
import About, { Associates } from '@/components/about.jsx';

export default function Home() {
  return (
    <div className="h-full w-full space-y-28">
      <Homepage />
      <About />
      <Solutions />
      <Services />
      <Associates />
    </div>
  );
}
