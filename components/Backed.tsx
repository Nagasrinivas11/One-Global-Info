import Image from 'next/image';
import React from 'react';
const TeamsBackedByBest: React.FC = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'John Doe',
            role: 'CEO & Founder',
            image: '/com/cal.svg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'CTO',
            image: '/com/cre.svg'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            role: 'Lead Designer',
            image: '/com/elc.svg'
        },
        {
            id: 4,
            name: 'Bob Brown',
            role: 'Senior Developer',
            image: '/com/foun.svg'
        },
        {
            id: 5,
            name: 'Bob Brown',
            role: 'Senior Developer',
            image: '/com/glob.svg'
        },

        {
            id: 6,
            name: 'Bob Brown',
            role: 'Senior Developer',
            image: '/com/jus.svg'
        }
    ];

    return (
        <section className=" px-4 mt-16 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-500 mt-4 uppercase font-medium leading-snug text-center tracking-wide">
                    Trusted by companies like you{' '}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white md:p-6">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-20 mx-auto  md:mb-1 "
                                height={100}
                                width={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamsBackedByBest;
