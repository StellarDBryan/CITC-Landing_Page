import HeroSection, { CI2, TechPlug, C3, CibersecuritySummit, InternationalAllies } from "@/components/business_template";

export default function Home(){

    return (
        <>
            <div>
                <HeroSection />
                <CI2 />
                <TechPlug />
                <C3 /> 
                <CibersecuritySummit /> 
                <InternationalAllies />
            </div>
        </>
    );
}