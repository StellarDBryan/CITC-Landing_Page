import About, { Allies, MisionVision, Team } from "@/components/about";

export default function AboutUs(){

    return(
        <>
            <div className="h-full w-full py-14 space-y-16">
                <About />
                <MisionVision />
                <Team />
                <Allies />
            </div>
        </>
    );
}