import HeroSection, { Programs, GirlsInTech, Community, Allies, Form } from "@/components/talent_template";

export default function Home(){

    return (
        <>
            <div>
                <HeroSection />
                <Programs />
                <GirlsInTech />
                <Community />
                <Allies />
                <Form />
            </div> 
        </>
    );
}