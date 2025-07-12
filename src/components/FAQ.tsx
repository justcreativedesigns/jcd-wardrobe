import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What types of wardrobes do you design?",
      answer: "We design all types of wardrobes including sliding door wardrobes, hinged door wardrobes, walk-in wardrobes, built-in wardrobes, and open wardrobes. Each design is customized to your space with options for 2-door, 3-door, 4-door, or floor-to-ceiling configurations."
    },
    {
      question: "What is the cost of a modular wardrobe in Bangalore?",
      answer: "Wardrobe costs typically range from ₹40,000 to ₹2.5 lakhs depending on size, design, and internal accessories. A standard 3-door wardrobe starts at ₹60,000. We provide transparent pricing with detailed breakdowns for materials, hardware, and accessories."
    },
    {
      question: "How much time does wardrobe installation take?",
      answer: "Standard wardrobe installation takes 15-20 working days from design approval. This includes 3-5 days for design, 10 days for manufacturing, and 2-5 days for installation. Walk-in wardrobes may take 25-30 days. We guarantee 45-day delivery or compensation."
    },
    {
      question: "What internal storage options do you provide?",
      answer: "We offer comprehensive storage solutions including adjustable shelves, drawers with soft-close mechanisms, trouser pull-outs, tie/belt organizers, jewelry trays, shoe racks, mirror attachments, and sensor-based LED lighting. Everything is customized to your specific needs."
    },
    {
      question: "What materials do you use for wardrobes?",
      answer: "We use premium materials including BWR plywood, HDHMR, particle boards, and MDF with laminate or acrylic finishes. Hardware from Hettich and Ebco ensures smooth operation. All materials come with termite-proof and moisture-resistant treatment with 10-year warranty."
    },
    {
      question: "Can you design wardrobes for small bedrooms?",
      answer: "Yes! We specialize in space-saving wardrobe solutions for compact bedrooms. Our designs include ceiling-height wardrobes, corner wardrobes, wardrobes with lofts, and sliding doors that don't require swing space. We maximize every inch of available space efficiently."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;