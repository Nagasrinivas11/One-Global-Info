import React from 'react';
import { Globe } from './Globe';

const ForFounders: React.FC = () => {
    return (
        <section
            id="careers"
            className="py-6 md:mt-4  sm:px-6 lg:px-8 bg-white"
        >
            <div className="md:max-w-9xl mx-auto ">
                <div className="flex flex-col-reverse justify-end  items-center md:flex-row md:items-center md:justify-center py-4 px-2 sm:px-6 lg:px-4">
                    <div className="w-full rounded-xl  md:w-1/2 flex justify-center  md:mb-0">
                        <Globe className="" />
                    </div>
                    <div className="w-full px-6 md:px-0 md:w-1/2 py-2 md:py-0 md:pl-8">
                        <h1 className="text-3xl sm:text-5xl leading-tight font-bold text-gray-900 mb-6">
                            Careers
                        </h1>
                        <p className="text-base  leading-8">
                            We strongly believe our employees come first.
                            They’re key to building the organization with their
                            expertise and passion to excel. Working with One
                            Global is a continuously fun-filled learning
                            adventure where your skills are challenged and
                            recognition is given for a job well done. We have
                            various openings in the US. We appreciate your
                            interest in exploring career opportunities with us.
                        </p>
                        <p className="text-lg leading-relaxed">
                            You may send your resume to{' '}
                            <a
                                href="https://your-link.com"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                careers@oneglobalsys.com.
                            </a>
                            Please note your skill set in the subject field.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForFounders;
