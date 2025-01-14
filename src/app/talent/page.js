import HeroSection, { Programs, GirlsInTech, Community, Allies } from "@/components/talent_template";

export default function Home(){

    return (
        <>
            <div>
                <HeroSection />
                <Programs />
                <GirlsInTech />
                <Community />
                <Allies />
            </div> 
        </>
    );
}