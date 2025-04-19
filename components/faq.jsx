import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Nebulix, exactly?",
    answer:
      "Nebulix is a fictional cloud infrastructure platform built to help developers deploy and scale apps with ease. While it doesn't actually power your favorite apps (yet), it makes for a solid React portfolio project.",
  },
  {
    question: "Is Nebulix free to use?",
    answer:
      "Yes — and always will be. Especially since it's not real. But in this demo, you can explore pricing tiers, simulate deployments, and pretend you’re managing your next billion-dollar startup.",
  },
  {
    question: "Can I deploy my apps using Nebulix CLI?",
    answer:
      "Of course — hypothetically speaking. We designed a fake CLI tool called nebulix deploy that doesn’t really do anything, but it feels powerful.",
  },
  {
    question: "Where are your data centers located?",
    answer:
      "Our imaginary data centers span 20+ global regions, from San Franciscocloud to Serverbourg, Europe. Rest assured, your bits and bytes are safe... in your mind",
  },
  {
    question: "How does Nebulix handle security?",
    answer:
      "We take security extremely seriously — especially since there's no real data to protect. But if there were, you bet we’d have top-tier encryption and zero-trust architecture.",
  },
  {
    question: " Do you offer customer support?",
    answer:
      "24/7... fictionally. Our invisible support team is always standing by — in spirit.",
  },
  {
    question: " Can I integrate Nebulix with GitHub or GitLab?",
    answer:
      "Totally. Click the “Integrate” button on our dashboard to watch a cool animation. That’s as far as the integration goes — but hey, it looks slick.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
