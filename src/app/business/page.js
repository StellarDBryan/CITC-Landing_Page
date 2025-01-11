import HeroSection, { CI2, TechPlug, C3, CibersecuritySummit } from "@/components/business_template";

export default function Home(){

    return (
        <>
            <div>
                <HeroSection />
                <CI2 />
                <TechPlug />
                <C3 /> 
                <CibersecuritySummit /> 
            </div>
        </>
    );
}