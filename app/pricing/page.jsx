'use client';

import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const plans = [
  {
    title: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      '5 Conversions / day',
      'Upto 4,000 characters in input code / conversion',
      'Email Support',
    ],
    buttonText: 'Current Plan',
  },
  {
    title: 'Pro',
    priceMonthly: 24,
    priceYearly: 10,
    features: [
      'Unlimited Conversions',
      'Upto 25,000 characters in input code / conversion',
      'Faster conversions with streamed responses',
      'Code generation tool',
      'Code explanation tool',
      'Priority Email Support',
      'Billed Yearly (save 50%)',
      'Cancel Anytime',
      '14-day Money Back Guarantee',
    ],
    buttonText: 'Get Started',
    tag: 'Most popular',
  },
  {
    title: 'Premium',
    priceMonthly: 48,
    priceYearly: 28,
    features: [
      'Unlimited Conversions',
      'Upto 100,000 characters in input code / conversion',
      'Faster conversions with streamed responses',
      'Code generation tool',
      'Code explanation tool',
      'Priority Email Support',
      'Billed Yearly (save 50%)',
      'Cancel Anytime',
      '14-day Money Back Guarantee',
    ],
    buttonText: 'Get Started',
  },
];

const reviews = [
  {
    name: 'Teffy Billion Dollars',
    handle: '@teffy_101',
    text: 'Just used CodeAYNA to flip my code from Python to JS and my Godddd! This is the best thing to happen to me this week. 🔥💻'
  },
  {
    name: 'Fã',
    handle: '@adorntresses',
    text: 'CodeAYNA is the best code converter I have ever used. Yes, quote me. Period. 🧠✨'
  },
  {
    name: '雨尘',
    handle: '@MrRainClouds',
    text: 'CodeAYNA converted my file in seconds. Output was so clean, I wanted to cry. 😭📂'
  },
  {
    name: 'Teresa',
    handle: '@theRealTessz',
    text: 'I tried CodeAYNA for fun but now I can’t stop. It converts before you even finish selecting the language. 🧙‍♂️🚀'
  },
  {
    name: 'Wine',
    handle: '@fineWine',
    text: 'I genuinely love @codeayna. A top-tier tool with flawless results. 👑🛠️'
  },
  {
    name: 'THEE AWAZI',
    handle: '@thee_awazi',
    text: 'CodeAYNA!!! 🥹 So happy I can now convert from ANY language to ANY. It’s giving magical. 🧚‍♀️'
  },
  {
    name: 'Muna Byte',
    handle: '@muna_dev',
    text: 'Switched from Java to Rust with CodeAYNA and didn’t break a sweat. Game changer fr. 🔄💥'
  },
  {
    name: 'Ike Codes',
    handle: '@ikethebuilder',
    text: 'Honestly? CodeAYNA is faster than my thought process. Like I blinked and my code was ready. 🤯⚡'
  },
  {
    name: 'Sara Script',
    handle: '@scriptingqueen',
    text: 'I stan @codeayna so hard. That UI? Those icons? That output? PERFECTION. 🖤💻'
  },
  {
    name: 'Jem O.',
    handle: '@jemwritescode',
    text: 'I converted an entire C++ project to Python in like 3 seconds. Who even needs StackOverflow now? 😂🙌'
  }

];

const faqList = [
 {
    question: "Can I try code convert for free?",
    answer: "Yes, you can try a limited version for free with demo credits.",
  },
  {
    question: "What is a credit?",
    answer: "A credit represents one unit of code conversion usage.",
  },
  {
    question: "What is the maximum number of characters I can use in the input code?",
    answer: "It varies by plan, but generally around 10,000 characters per request.",
  },
  {
    question: "Will my available credits get reduced if I don't get a response?",
    answer: "No, credits are only deducted for successful responses.",
  },
  {
    question: "When are the conversions streamed?",
    answer: "Conversions are processed in real-time during your request.",
  },
  {
    question: "Are the conversions always accurate?",
    answer: "We aim for high accuracy, but always review the output code.",
  },
  {
    question: "Do you save the input or output code in your database?",
    answer: "No, your code is not stored unless explicitly authorized.",
  },
  {
    question: "Can I change my plan after I purchase a subscription?",
    answer: "Yes, you can upgrade or downgrade your plan anytime.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel from your account settings at any time.",
  },
  {
    question: "What happens after I cancel my subscription?",
    answer: "You’ll retain access until the end of the billing cycle.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Refunds are available under specific conditions. Please review our policy page.",
  },
];

const generateRandomStyle = () => {
  const widths = ['w-60', 'w-64', 'w-72', 'w-80'];
  const paddings = ['p-4', 'p-5', 'p-6'];
  const radii = ['rounded-xl', 'rounded-2xl', 'rounded-lg'];
  const heights = ['h-48', 'h-56', 'h-64'];

  return `${widths[Math.random() * widths.length | 0]} ${paddings[Math.random() * paddings.length | 0]} ${radii[Math.random() * radii.length | 0]} ${heights[Math.random() * heights.length | 0]}`;
};

export default function PricingReviewFAQ() {
  const [isYearly, setIsYearly] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const repeated = [...reviews, ...reviews];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderRow = (direction = 'left') => (
    <MotionDiv
      className="flex gap-6 w-max"
      animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{ repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' }}
    >
      {repeated.map((review, idx) => {
        const style = generateRandomStyle();
        return (
          <div key={idx} className={`bg-white text-black shadow-lg flex-shrink-0 ${style}`}>
            <div className="font-bold">{review.name}</div>
            <div className="text-sm text-gray-500 mb-2">{review.handle}</div>
            <p className="text-sm">{review.text}</p>
          </div>
        );
      })}
    </MotionDiv>
  );

  return (
    <div className="bg-black text-white py-16 space-y-24">

      {/* Pricing Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4">Pricing</h2>
        <p className="text-gray-300 mb-2">Use the full power of our tools after signing in. <span className="underline">Login</span> to start using the advanced features.</p>
        <div className="bg-yellow-400 text-black inline-block px-3 py-1 rounded-md font-medium mb-6">4-day money back guarantee, cancel anytime</div>
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className={isYearly ? 'text-gray-400' : 'text-white font-semibold'}>Billed Monthly</span>
          <button onClick={() => setIsYearly(!isYearly)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${isYearly ? 'bg-green-400' : 'bg-gray-400'}`}>
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={isYearly ? 'text-white font-semibold' : 'text-gray-400'}>Billed Yearly</span>
          <span className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${isYearly ? 'bg-yellow-300 text-black shadow-lg ring-2 ring-yellow-400 font-semibold' : 'bg-gray-500 text-gray-300 opacity-50'}`}>7 Month Off 🎁</span>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {plans.map((plan, i) => (
            <div key={i} className="bg-gray-100 text-black w-80 rounded-xl p-6 shadow-lg relative flex flex-col justify-between" style={{ minHeight: '540px' }}>
              {plan.tag && <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{plan.tag}</span>}
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                <div className="text-3xl font-bold">${isYearly ? plan.priceYearly : plan.priceMonthly}<span className="text-base font-normal">/month</span></div>
                <ul className="text-left mt-4 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition">{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-center text-4xl font-bold text-[#ff0080] mb-10">Happy Users</h2>
        <div className="space-y-10 overflow-hidden">
          {isClient && (
            <>
              <div className="overflow-x-hidden">{renderRow('left')}</div>
              <div className="overflow-x-hidden">{renderRow('right')}</div>
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-center text-4xl font-bold text-[#ff0080] mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4">
              <button
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <BsChevronDown
                  className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  color="white"
                />
              </button>
              {openIndex === idx && (
                <p className="text-gray-200 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
