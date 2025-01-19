import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Mark Manson",
            role: "Project Manager",
            company: "Google",
            companyUrl: "https://google.com",
            review: "SuperMetrics social analytics tool has provided great insights into social channels for our clients and has become an integral part of our content marketing strategies.",
            image: "src/assets/images/person_1.jpeg" // Replace with actual image URL
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Marketing Director",
            company: "Microsoft",
            companyUrl: "https://microsoft.com",
            review: "The comprehensive analytics provided by SuperMetrics has transformed how we approach our social media strategy. It's been invaluable for our team.",
            image: "src/assets/images/person_2.png" // Replace with actual image URL
        },
        {
            id: 3,
            name: "David Chen",
            role: "Social Media Manager",
            company: "Adobe",
            companyUrl: "https://adobe.com",
            review: "We've seen remarkable improvements in our social media performance since implementing SuperMetrics. The insights are clear and actionable.",
            image: "src/assets/images/person_3.png" // Replace with actual image URL
        }
    ];

    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);


    return (
        <section className="bg-gradient-to-b from-[#edeff1] to-white border-t-2 border-b-2 border-gray-300 w-full">
            <div className="w-[80%] mx-auto border-l-2 border-r-2 border-gray-300 relative">
                {/* content div */}
                <div className="flex flex-col items-center justify-center relative">
                    <div>
                        <img loading="lazy" src="src/assets/images/doublequotes_faded.png" alt="DoubleQuotes Faded" />
                        <div className="absolute top-[60px] left-[335px] flex items-center flex-col">
                            <div className="inline-block px-2 py-2 rounded-full  text-gray-800 text-sm mb-4 font-['Geist_Mono'] bg-gradient-to-b from-[#d7d9db] to-white">
                                <div className="inline-block px-2 py-1 rounded-full border text-gray-800 bg-white">
                                    Testimonials
                                </div>
                            </div>
                            <h3 className="text-[#212F40] text-[40px] font-semibold">Don’t just take our word for it</h3>
                        </div>
                        {/* top section */}
                    </div>
                    {/* bottom functional section starts */}
                    <div className='p-3 rounded-2xl border-gray-300 border-t-[1px] border-l-[1px] border-r-[1px]'>
                        <div className="bg-gradient-to-b from-[#edeff1] to-white max-w-3xl mx-auto rounded-2xl  py-12 px-28">
                            <AnimatePresence>
                                <motion.div
                                    key={activeTestimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center mb-8"
                                >
                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                        {activeTestimonial.review}
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <motion.img
                                        loading='lazy'
                                            src={activeTestimonial.image}
                                            alt={activeTestimonial.name}
                                            className="w-16 h-16 rounded-full mb-4 object-cover"
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <h3 className="text-xl font-semibold text-[#212F40] mb-1">
                                            {activeTestimonial.name}
                                        </h3>
                                        <p className="text-[#838E9E]">
                                            {activeTestimonial.role} at{" "}
                                            <a
                                                href={activeTestimonial.companyUrl}
                                                className="text-[#212F40] underline hover:text-[#1B91F0]"
                                                target="_blank"
                                            >
                                                {activeTestimonial.company}
                                            </a>
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-center items-center gap-4 mt-8">
                                {testimonials.map((testimonial) => (
                                    <div  key={testimonial.id} className={`${activeTestimonial.id === testimonial.id ? 'w-[60px] flex items-center justify-center h-[60px] border rounded-full bg-gradient-to-b from-[#4c97e2] to-white' : ''}`}>
                                        <button          
                                            onClick={() => setActiveTestimonial(testimonial)}
                                            className={`relative rounded-full overflow-hidden w-12 h-12  transition-transform hover:scale-110`}
                                        >
                                            <img
                                            loading='lazy'
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className={`w-full h-full object-cover transition-all duration-300 ${activeTestimonial.id === testimonial.id
                                                    ? 'grayscale-0'
                                                    : 'grayscale'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* bottom functional section ends */}
                </div>


                {/* top left L-shape*/}
                <div className="absolute top-0 -left-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -top-[2px] -left-0.5 h-[3px] w-3 bg-black"></div>

                {/* bottom right L-Shape */}
                <div className="absolute bottom-0 -right-0.5 w-[2px] h-3 bg-black"></div>
                <div className="absolute -bottom-[2px] -right-0.5 h-[2.5px] w-3 bg-black"></div>

                {/* circle top right */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
                {/* circle bottom left */}
                <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
            </div>
        </section>
    )
}

export default Testimonials;
