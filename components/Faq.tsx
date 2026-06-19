"use client";

import { useState, useEffect, useRef } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does turf booking work on Touchgress?",
    answer:
      "Simply search for available turfs in your area, pick your preferred time slot, and book instantly. We handle the scheduling, payment, and confirmation so you can focus on playing.",
  },
  {
    question: "What sports can I book turfs for?",
    answer:
      "At launch, Touchgress supports football and cricket turf bookings. We're actively working on adding more sports including badminton, tennis, and basketball in future updates.",
  },
  {
    question: "Is the platform free to use?",
    answer:
      "Signing up for Touchgress is completely free. You only pay for the turf bookings you make. We offer transparent pricing with no hidden fees or subscription costs.",
  },
  {
    question: "When is Touchgress launching?",
    answer:
      "We're currently building the final version and onboarding turf partners across major cities. Join the waitlist to be notified as soon as we go live in your area — early members get exclusive perks.",
  },
  {
    question: "Can I book for a group or team?",
    answer:
      "Absolutely! You can book for yourself or your entire team. Touchgress lets you split payments, send invites to teammates, and manage your squad's regular booking schedule.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll reveal for the section */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      ref={sectionRef}
      className="reveal px-5 md:px-10 pb-20 max-w-[800px] mx-auto z-[1] relative"
    >
      <h2 className="font-display font-medium tracking-[-0.02em] text-ink mb-2 text-[clamp(28px,4vw,38px)]">
        Frequently asked questions
      </h2>
      <p className="font-serif text-[16px] leading-relaxed text-steel mb-10">
        Everything you need to know about Touchgress and turf booking.
      </p>

      <div>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item border-b border-silver ${
              openIndex === i ? "open" : ""
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center justify-between py-5 bg-transparent border-none cursor-pointer font-display text-[15px] font-medium text-ink gap-4"
              id={`faq-q${i + 1}`}
              aria-expanded={openIndex === i}
            >
              {faq.question}
              <svg
                className="faq-chevron w-5 h-5 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 8l5 5 5-5"
                  stroke="#9CA3AF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p className="pb-5 font-serif text-[15px] leading-[1.7] text-steel">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
