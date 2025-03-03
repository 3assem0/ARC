"use client"; 
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What types of engineering services does your company offer?",
    answer:
      "Structural engineering, mechanical, electrical, plumbing (MEP) design, civil engineering, or specialized consultancy.",
  },
  {
    id: 2,
    question: "What is your approach to sustainable and eco-friendly design?",
    answer:
      "Discuss LEED certification, energy-efficient materials, and renewable technologies.",
  },
  {
    id: 3,
    question: "Can you assist with obtaining building permits and meeting code compliance?",
    answer:
      "Mention experience with local regulations and permit processes.",
  },
  {
    id: 4,
    question: "How do you ensure the design aligns with our vision and budget?",
    answer:
      "Describe the client consultation, prototyping, or value-engineering process.",
  },
  {
    id: 5,
    question: "Are your engineers licensed and insured?",
    answer:
      "Reassure clients with details about certifications, professional licensing, and liability coverage.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQs() {
  return (
    <div className="text-gray-700 dark:text-white min-h-80 pt-20 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2">
          <h2 className="relative z-20 flex flex-col items-center text-4xl text-center sm:text-7xl font-bold py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Frequently asked Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y  divide-gray-600">
            {faqs.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }: { open: boolean }) => (
                  <>
                    <dt className="text-lg">
                      <DisclosureButton  className="text-left w-full flex justify-between items-start">
                        <span className=" items-center text-center font-bold  bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-300 from-neutral-800 to-neutral-500">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition-transform duration-300'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-baseitems-center text-center font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
