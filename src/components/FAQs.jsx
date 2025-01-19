import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
    // FAQ data array
    const faqs = [
        {
            id: 1,
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            id: 2,
            question: "Can I change my plan later?",
            answer: "Yes, you can change your plan at any time through your account settings."
        },
        {
            id: 3,
            question: "What is your cancellation policy?",
            answer: "You can cancel your subscription at any time. Once cancelled, you'll have access until the end of your billing period."
        },
        {
            id: 4,
            question: "Can other info be added to an invoice?",
            answer: "Yes, you can add additional information to your invoices through the billing settings."
        },
        {
            id: 5,
            question: "How does billing work?",
            answer: "Billing is processed monthly on the date you signed up. You can view all billing details in your account."
        },
        {
            id: 6,
            question: "How do I change my account email?",
            answer: "You can change your account email through your profile settings page."
        }
    ];

    const [openId, setOpenId] = useState(1);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="border-t-2 border-b-2 border-gray-300">
            <div className=" w-[80%] m-auto border-l-2 border-r-2 border-gray-300 py-7 relative">

                {/* top left L-shape*/}
                <div className="absolute top-0 -left-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -top-[1.5px] -left-0.5 h-[2.5px] w-3 bg-black"></div>

                {/* bottom right L-Shape */}
                <div className="absolute bottom-0 -right-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -bottom-[1px] -right-0.5 h-[2.5px] w-3 bg-black"></div>

                {/* circle top right */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
                {/* circle bottom left */}
                <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>

                <div className="max-w-2xl mx-auto p-6 ">
                    <div className="mb-8 text-center">
                        <div className="inline-block px-4 py-2 rounded-full  text-gray-800 text-sm mb-4 font-['Geist_Mono'] bg-gradient-to-b from-[#edeff1] to-white">
                            <div className="inline-block px-3 py-1 rounded-full border text-gray-800 bg-white">
                                FAQ's
                            </div>
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="border-b border-gray-200 pb-4"
                            >
                                <button
                                    className="flex justify-between items-center w-full text-left"
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <span className="text-lg text-gray-700 font-semibold">{faq.question}</span>
                                    <motion.span
                                        className="ml-6 flex-shrink-0"
                                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {openId === faq.id ? (
                                            <div className="text-gray-400">−</div>
                                        ) : (
                                            <div className="text-gray-400">+</div>
                                        )}
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-2 text-gray-600">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>


            </div>

        </section>
    );
};

export default FAQs;