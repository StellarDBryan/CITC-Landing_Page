
import Homepage, { Solutions, Services } from "@/components/homepage/home.jsx";
import { AssociatesLanding } from '@/components/about.jsx';

export default function Home() {
  return (
    <div className="h-full w-full space-y-16">
      <Homepage />
      <Solutions />
      <Services />
      <AssociatesLanding />
    </div>
  );
}
