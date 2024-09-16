import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

const Faq = () => {
  return (
    <div
      id="faqs"
      className="px-10 py-12 md:py-24 max-w-[800px] mx-auto space-y-12"
    >
      <p className="text-center cursive text-[40px]">
        Frequently Asked Questions
      </p>
      <Accordion
        type="single"
        collapsible
      >
        {faqs.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value="item-1"
            >
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Faq;
