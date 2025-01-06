import HeroSection, { Programs, GirlsInTech, Community } from "@/components/talent_template";

export default function Home(){

    return (
        <>
            <div>
                <HeroSection />
                <Programs />
                <GirlsInTech />
                <Community />
            </div>
        </>
    );
}