'use client';
import { motion } from 'framer-motion';

const Steps = () => {
    const steps = [
        {
            title: 'Comprehensive Consulting',
            description:
                'We begin with a detailed consultation to understand your needs and identify the right resources for your project.'
        },
        {
            title: 'Comprehensive Report',
            description: 'We provide a detailed report that includes:',
            points: [
                'A project plan with clear timelines and milestones.',
                'A thorough cost Analysis.',
                'A well structured schedule'
            ]
        },
        {
            title: 'Implementation & Execution',
            description:
                'Once the plan is finalized, we assist in executing the strategy, ensuring smooth progress and successful project completion.'
        }
    ];

    return (
        <div className="flex flex-col items-center gap-6 justify-center p-8">
            <div className="max-w-4xl w-full space-y-12 relative">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.3,
                            ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-6 relative group"
                    >
                        {/* Step Number */}
                        <div className="relative top-4 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0D465A] to-[#063344] shadow-xl flex items-center justify-center text-white text-2xl font-bold transform transition-all group-hover:scale-110">
                                {index + 1}
                            </div>
                            {index !== steps.length - 1 && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 60 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.3
                                    }}
                                    className="w-1 bg-[#303d6c] h-16 mt-2"
                                ></motion.div>
                            )}
                        </div>

                        {/* Step Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.3,
                                ease: 'easeOut'
                            }}
                            className="flex-1 bg-white p-6 rounded-lg shadow-xl border-l-4 border-[#0D465A] group-hover:shadow-2xl transform transition-all group-hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold text-[#0D465A] mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 font-medium">
                                {step.description}
                            </p>

                            {/* Render points if they exist */}
                            {step.points && (
                                <ul className="mt-4 list-disc pl-6 text-gray-700">
                                    {step.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
