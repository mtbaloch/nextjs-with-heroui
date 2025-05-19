"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { FaClock } from "react-icons/fa";




const faqs = [
    {
        title: "What is your return policy?",
        content: "We offer a 30-day return policy for all unused and unopened items."
    },
    {
        title: "How can I contact customer support?",
        content: "You can reach our support team via email at support@example.com or by calling 123-456-7890."
    },
    {
        title: "Do you offer international shipping?",
        content: "Yes, we ship to most countries. Shipping rates and times vary by destination."
    },
    {
        title: "How do I reset my password?",
        content: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
    },
    {
        title: "Can I track my order?",
        content: "Yes, once your order is shipped, you will receive an email with the tracking number."
    }
];

const AccordionTutorial = () => {
    return (
        <Accordion itemClasses={{
            base:"bg-green-500",
            title:"text-white",
            content:"text-white"
        }} variant="splitted" className="space-y-3" selectionMode="single" selectionBehavior="toggle">
            {
                faqs.map((faq, index) => {
                    return (
                        <AccordionItem  startContent={<FaClock />} key={index} aria-label={faq.title} title={faq.title}>
                            {faq.content}
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}

export default AccordionTutorial