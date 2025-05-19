import AccordionTutorial from "@/components/ui/AccordionTutorial";
import { ButtonTutorial } from "@/components/ui/ButtonTutorial";
import Wrapper from "@/components/Wrapper";
import { Divider } from "@heroui/react";

export default function Home() {

  return (
    <>
   <Wrapper>
     <h1 className="text-3xl my-5">Learining NextJS + HeroUI</h1>
     <ButtonTutorial/>
    <Divider className="my-10"/>
    <h2 className="text-3xl font-bold mb-10">Accordion Tutorial</h2>
    <AccordionTutorial/>
   </Wrapper>
    </>
  );
}
