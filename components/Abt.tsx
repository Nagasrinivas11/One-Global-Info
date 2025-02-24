import React from 'react';

const AboutUs = () => {
    return (
        <div
            id="abtt"
            className="bg-white h-[88vh]  flex justify-center py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-4xl text-center font-bold text-gray-900 sm:text-5xl">
                    About Us
                </h2>
                <div className="mt-8 space-y-6 text-gray-600">
                    <p className="text-lg leading-relaxed">
                        One Global is a customer-centric transformational IT
                        solutions and staffing partner. When it comes to
                        leveraging staffing and technology solutions in
                        today&apos;s market challenges, call on One Global. Our
                        experienced consultants understand the unique
                        requirements of your industry.
                    </p>
                    <p className="text-lg leading-relaxed">
                        If you are seeking to hire highly talented information
                        technology professionals, we work across all industries
                        ensuring you find the right candidates to meet your
                        needs. Our staffing services include contract staffing,
                        direct hire, temp-to-perm, and project services focused
                        on Information Technology.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At One Global, we understand that every company has
                        unique challenges and goals. We emphasize client
                        relationships to understand and deliver customized
                        solutions that exceed expectations.
                    </p>
                    <p className="font-bold leading-relaxed text-lg text-black">
                        No matter the size of the business, we accommodate your
                        needs, schedule, and budget.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
