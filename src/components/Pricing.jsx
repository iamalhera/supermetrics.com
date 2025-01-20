import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
// import { images } from '../constants';

const Pricing = () => {
    const plans = [
        {
            title: 'Free',
            color: 'red-400',
            image: "/assets/icon_heart.png",
            description: 'To grow referrals and leads of business looking',
            buttonText: 'Get Started for Free',
            features: [
                'Data Sources: Up to 3 Accounts',
                '1 Workspace',
                '1 User',
                'Analytics Dashboard',
                'Google Add-on',
                'Reporting'
            ]
        },
        {
            title: 'Starter',
            image: "/assets/icon_rocket.png",
            color: 'blue-400',
            description: 'To grow referrals and leads of business looking',
            buttonText: 'Get Starter',
            features: [
                'Data Sources: Up to 10 Accounts',
                '1 Workspace',
                '1 User',
                'Analytics Dashboard',
                'Google Add-on',
                'Reporting'
            ]
        },
        {
            title: 'Professional',
            image: "/assets/icon_handbag.png",
            color: 'yellow-400',
            description: 'To grow referrals and leads of business looking',
            buttonText: 'Get Professional',
            features: [
                'Data Sources: Up to 3 Accounts',
                '1 Workspace',
                '1 User',
                'Analytics Dashboard',
                'Google Add-on',
                'Reporting'
            ]
        },
        {
            title: 'Team',
            image: "/asssets/icon_team.png",
            color: 'purple-400',
            description: 'To grow referrals and leads of business looking',
            buttonText: 'Get Team',
            features: [
                'Data Sources: Up to 3 Accounts',
                '1 Workspace',
                '1 User',
                'Analytics Dashboard',
                'Google Add-on',
                'Reporting'
            ]
        }
    ];
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    return (
        <section className="border-t-2 border-b-2 border-gray-300">
            <div className=" w-[80%] m-auto border-l-2 border-r-2 border-gray-300 py-7 relative">
                <div className="flex items-center flex-col">
                    <div className="inline-block px-2 py-2 rounded-full  text-gray-800 text-sm mb-4 font-['Geist_Mono'] bg-gradient-to-b from-[#d7d9db] to-white">
                        <div className="inline-block px-2 py-1 rounded-full border text-gray-800 bg-white">
                            Pricing
                        </div>
                    </div>
                    <h3 className="text-[#212F40] text-[40px] font-semibold">Flexible Pricing, built for growth</h3>
                </div>

                {/* Card section completely here starts */}

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center p-1 bg-gray-100 rounded-3xl">
                            <button
                                className={`px-4 py-2 rounded-3xl font-semibold ${!isYearly
                                        ? 'bg-white text-[#1B91F0] shadow-sm'
                                        : 'text-gray-600'
                                    }`}
                                onClick={() => setIsYearly(false)}
                            >
                                Monthly
                            </button>
                            <button
                                className={`px-4 py-2 rounded-3xl font-semibold ${isYearly
                                        ? 'bg-white text-[#1B91F0] shadow-sm'
                                        : 'text-gray-600'
                                    }`}
                                onClick={() => setIsYearly(true)}
                            >
                                Yearly
                                <span className="ml-2 text-xs text-red-500 bg-red-100 px-2 py-1 rounded-xl">Save 20%</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredCard(plan.title)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <PricingCard
                                    plan={plan}
                                    isYearly={isYearly}
                                    isPopular={plan.title === 'Starter'}
                                    onHover={hoveredCard === plan.title}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Card section completely here ends*/}
                {/* top left L-shape*/}
                <div className="absolute top-0 -left-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -top-[1px] -left-0.5 h-[2.5px] w-3 bg-black"></div>

                {/* bottom right L-Shape */}
                <div className="absolute bottom-0 -right-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -bottom-[2px] -right-0.5 h-[2.5px] w-3 bg-black"></div>

                {/* circle top right */}
                <div className="absolute -top-[7px] -right-[7px] w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
                {/* circle bottom left */}
                <div className="absolute -left-[6.5px] -bottom-[6px] w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
            </div>
        </section>
    );
};

export default Pricing;