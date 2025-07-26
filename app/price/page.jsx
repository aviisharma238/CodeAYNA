"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const plans = [
  {
    title: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "5 Conversions / day",
      "Upto 4,000 characters in input code / conversion",
      "Email Support",
    ],
    buttonText: "current plan",
    highlighted: false,
  },
  {
    title: "Pro",
    priceMonthly: 24,
    priceYearly: 10,
    features: [
      "Unlimited Conversions",
      "Upto 25,000 characters in input code / conversion",
      "Faster conversions with streamed responses",
      "Code generation tool",
      "Code explanation tool",
      "Priority Email Support",
      "Billed Yearly (save 50%)",
      "Cancel Anytime",
      "14-day Money Back Guarantee",
    ],
    buttonText: "Get started",
    highlighted: true,
    tag: "Most popular",
  },
  {
    title: "Premium",
    priceMonthly: 48,
    priceYearly: 28,
    features: [
      "Unlimited Conversions",
      "Upto 100,000 characters in input code / conversion",
      "Faster conversions with streamed responses",
      "Code generation tool",
      "Code explanation tool",
      "Priority Email Support",
      "Billed Yearly (save 50%)",
      "Cancel Anytime",
      "14-day Money Back Guarantee",
    ],
    buttonText: "Get started",
    highlighted: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="bg-black text-white py-16 text-center">
      <h2 className="text-4xl font-bold text-pink-500 mb-4">Pricing</h2>
      <p className="text-gray-300 mb-2">
        Use the full power of our tools after signing in.{" "}
        <span className="underline">Login</span> to start using the advanced
        features.
      </p>
      <div className="bg-yellow-400 text-black inline-block px-3 py-1 rounded-md font-medium mb-6">
        4-day money back guarantee, cancel anytime
      </div>

      <div className="flex justify-center items-center gap-3 mb-6">
        <span
          className={isYearly ? "text-gray-400" : "text-white font-semibold"}
        >
          Billed Monthly
        </span>
        <button
          onClick={handleToggle}
          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
            isYearly ? "bg-green-400" : "bg-gray-400"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <span
          className={isYearly ? "text-white font-semibold" : "text-gray-400"}
        >
          Billed Yearly
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full transition-all duration-300
                                ${
                                  isYearly
                                    ? "bg-yellow-300 text-black shadow-lg ring-2 ring-yellow-400 font-semibold"
                                    : "bg-gray-500 text-gray-300 opacity-50"
                                }`}
        >
          7 Month Off 🎁
        </span>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gray-100 text-black w-80 rounded-xl p-6 shadow-lg relative flex flex-col justify-between`}
            style={{ minHeight: "540px" }}
          >
            {plan.tag && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {plan.tag}
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <div className="text-3xl font-bold">
                ${isYearly ? plan.priceYearly : plan.priceMonthly}
                <span className="text-base font-normal">/month</span>
              </div>
              <ul className="text-left mt-4 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-auto bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
