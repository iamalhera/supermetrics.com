import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, isYearly, isPopular, onHover }) => {
  const basePrice = {
    Free: 0,
    Starter: 19,
    Professional: 39,
    Team: 99
  };

  const price = isYearly ? (basePrice[plan.title] * 0.8).toFixed(2) : basePrice[plan.title];

  // console.log(plan);
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl p-6 border ${
        onHover ? `border-gray-200 shadow-lg  bg-gradient-to-b from-[#e8f5ff] to-white` : 'border-gray-200'
      } transition-all duration-300`}
    >
      {isPopular && (
        <div className="absolute top-5 left-1/2  bg-gradient-to-b from-[#1B91F0] to-[#0f72c3] text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <div className="space-y-2">
        <img loading='lazy' src={plan.image} alt={plan.title} />
        <h3 className="text-xl font-bold">{plan.title}</h3>
        <p className="text-gray-600 text-sm">{plan.description}</p>
        
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${price==0 ? 0 : price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
        
        <button
          className={`w-full py-2 px-4 rounded-md transition-all duration-300 ${
            onHover
              ? 'bg-[#1B91F0] text-white'
              : 'bg-white text-[#1B91F0] border border-[#1B91F0]'
          }`}
        >
          {plan.buttonText}
        </button>
        
        <div className="mt-6">
          <p className="text-sm font-medium mb-4">Features</p>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg
                  className={`w-4 h-4 mr-2 text-${plan.color}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard ; 