import React from 'react';

interface Fc {
    title: string;
    value: string;
}


const FeatureCard: React.FC<Fc> = ({ title, value }) => {
    return (
        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-[0_4px_6px_rgba(48,61,108,0.1)] hover:shadow-[0_8px_12px_rgba(48,61,108,0.2)] transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg flex justify-center items-center gap-x-2 font-semibold text-gray-800 mb-4">
                {title}
            </h3>
            <p className="text-gray-900 my-3 text-2xl md:text-6xl font-semibold">
                {value}
            </p>
        </div>
    );
};

export const FeaturesSection: React.FC<{ features: Fc[] }> = ({ features }) => {
    return (
        <section id="features-section" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                    Let&apos;s Understand the Workforce
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
