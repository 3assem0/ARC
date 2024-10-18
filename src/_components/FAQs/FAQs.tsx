"use client"; 
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from "lucide-react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why are there so many lakes in Switzerland?",
    answer:
      "The lakes in Switzerland are mainly due to glacial activity, which shaped the landscape and created numerous lakes.",
  },
  {
    question: "How does the Swiss economy work?",
    answer:
      "The Swiss economy is highly developed, with a focus on finance, pharmaceuticals, and manufacturing.",
  },
  {
    question: "What is Swiss cheese known for?",
    answer:
      "Swiss cheese is known for its holes and creamy texture, made using traditional methods.",
  },
  {
    question: "What are Swiss watches famous for?",
    answer:
      "Swiss watches are renowned for their precision and craftsmanship, making them some of the most sought-after timepieces in the world.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQs() {
  return (
    <div className="text-black dark:text-white min-h-80 pt-20 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold  sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start ">
                        <span className="font-medium ">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition-transform duration-300'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
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
