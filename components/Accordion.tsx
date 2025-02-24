'use client';
import { useState } from 'react';
import { Panel } from './Panel';
const data = [
    {
        title: 'What services does Brynz offer?',
        description:
            'Brynz specializes in providing top 1% non-tech talent in Digital Marketing, Operations, Customer Support, Customer Success, Graphic Design, Supply Chain, and facilitates global remote hiring for U.S. startups and SMBs.',
        id: 0
    },
    {
        title: 'How does Brynz source its talent?',
        description:
            'We utilize a rigorous vetting process to identify and onboard professionals who are experts in their respective fields, ensuring they meet our high standards of excellence.',
        id: 1
    },
    {
        title: 'What is the process to hire talent through Brynz?',
        description:
            'Clients can reach out to us with their specific requirements. We then match them with suitable candidates from our talent pool, facilitating interviews and assisting throughout the onboarding process.',
        id: 2
    },
    {
        title: 'How does Brynz ensure the quality of its talent?',
        description:
            'Our comprehensive vetting process includes skill assessments, experience verification, and interviews to ensure that we provide only the best candidates to our clients.',
        id: 3
    },
    {
        title: 'What types of engagements does Brynz offer?',
        description:
            'We offer flexible engagement models, subscription of talent on a monthly basis, and one-time full-time hires tailored to meet the unique needs of each client.',
        id: 4
    },
    {
        title: "Where are Brynz's talents based?",
        description:
            'Our talent network is global, allowing us to provide remote professionals from various regions like Asia, LATAM, and South Africa, ensuring diversity and a wide range of expertise.',
        id: 5
    },
    {
        title: 'How does Brynz handle confidentiality and intellectual property?',
        description:
            "We prioritize our clients' confidentiality and have strict agreements in place to protect intellectual property rights throughout the engagement.",
        id: 6
    },
    {
        title: "What is Brynz's pricing model?",
        description:
            'Our pricing is based on a monthly subscription and a one-time flat rate for full-time hires. We work closely with clients to provide transparent and fair pricing structures.',
        id: 7
    },
    {
        title: 'How quickly can Brynz provide suitable candidates?',
        description:
            'Depending on the role and requirements, we can present qualified candidates within a short timeframe, often within a few days.',
        id: 8
    },
    {
        title: 'Can Brynz assist with building remote teams?',
        description:
            'Yes, we specialize in assembling remote teams, ensuring seamless integration and collaboration across different time zones and cultures.',
        id: 9
    },
    {
        title: 'What support does Brynz offer during the hiring process?',
        description:
            'We assist with candidate selection, scheduling interviews, and provide guidance throughout the hiring process to ensure a smooth experience for both clients and candidates.',
        id: 10
    },
    {
        title: 'Does Brynz offer post-hire support?',
        description:
            'Yes, we offer ongoing support to ensure successful integration and performance of the hired talent within your organization.',
        id: 11
    },
    {
        title: 'How does Brynz stay updated with industry trends?',
        description:
            'Our team continuously monitors industry developments to ensure we provide talent with the most current skills and knowledge.',
        id: 12
    },
    {
        title: 'Can Brynz provide talent for short-term projects?',
        description:
            'Absolutely, we offer flexible solutions for both short-term projects and long-term engagements based on client needs.',
        id: 13
    },
    {
        title: 'How does Brynz handle time zone differences with remote talent?',
        description:
            'We consider time zone preferences during the matching process to ensure optimal overlap and collaboration between clients and remote talent.',
        id: 14
    },
    {
        title: 'What tools does Brynz use to facilitate remote collaboration?',
        description:
            'We recommend and utilize a variety of collaboration tools to ensure effective communication and project management between clients and remote teams.',
        id: 15
    },
    {
        title: 'How does Brynz ensure cultural fit between clients and candidates?',
        description:
            'We assess both technical skills and cultural alignment to ensure a harmonious working relationship between clients and candidates.',
        id: 16
    },
    {
        title: "What is Brynz's approach to diversity and inclusion?",
        description:
            'We are committed to promoting diversity and inclusion by sourcing talent from various backgrounds and fostering an inclusive environment.',
        id: 17
    },
    {
        title: "How can startups benefit from Brynz's services?",
        description:
            'Startups can access top-tier talent without the overhead of traditional hiring processes, allowing them to scale efficiently and effectively.',
        id: 18
    },
    {
        title: 'What industries does Brynz serve?',
        description:
            'We cater to a wide range of industries, including technology, healthcare, finance, and more, providing specialized non-tech talent to meet diverse needs.',
        id: 19
    },
    {
        title: 'How does Brynz handle feedback and performance evaluations?',
        description:
            'We encourage regular feedback and conduct performance evaluations to ensure continuous improvement and satisfaction for both clients and talent.',
        id: 20
    },
    {
        title: 'Can Brynz assist with onboarding processes?',
        description:
            'Yes, we provide support during the onboarding phase to ensure a smooth transition and integration of the new talent into your team.',
        id: 21
    },
    {
        title: 'What measures does Brynz take to ensure data security?',
        description:
            'We implement robust data security protocols to protect client and candidate information, adhering to industry best practices and regulations.',
        id: 22
    },
    {
        title: 'How does Brynz handle disputes or issues during engagements?',
        description:
            'We have a structured process in place to address any disputes or issues promptly, ensuring fair resolutions for all parties involved.',
        id: 23
    },
    {
        title: 'How can I get started with Brynz?',
        description:
            "You can get started by contacting us through our website or reaching out to our support team. We'll guide you through the process to find the perfect non-tech talent for your needs.",
        id: 24
    }
];
const Accordion = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    const isExpandable = data.length > 8;
    const isFullyExpanded = visibleCount >= data.length;

    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="flex justify-center flex-col items-center gap-y-2">
                <h1 className="md:text-3xl mb-4 text-gray-900 font-bold">FAQs</h1>
                {data.slice(0, visibleCount).map((x) => (
                    <Panel
                        key={x.id}
                        title={x.title}
                        id={x.id}
                        description={x.description}
                    />
                ))}
                {isExpandable && !isFullyExpanded && (
                    <button
                        className=" hover:bg-gradient-to-r  hover:from-[#3b4780] hover:via-[#303d6c] hover:to-[#262f59] bg-gradient-to-t from-white to-transparent border-2 hover:border-transparent hover:bg-white hover:text-white text-[#303d6c] hover:border-2 border-gray-200 hover:border-[#303d6c] focus:ring-4 focus:outline-none focus:ring-[#4a568f] font-semibold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out"
                        onClick={() => setVisibleCount(data.length)}
                    >
                        View More
                    </button>
                )}
                {isFullyExpanded && (
                    <button
                        className=" hover:bg-gradient-to-r  hover:from-[#3b4780] hover:via-[#303d6c] hover:to-[#262f59] bg-gradient-to-t from-white to-transparent border-2 hover:border-transparent hover:bg-white hover:text-white text-[#303d6c] hover:border-2 border-gray-200 hover:border-[#303d6c] focus:ring-4 focus:outline-none focus:ring-[#4a568f] font-semibold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out"
                        onClick={() => setVisibleCount(8)}
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
};
export default Accordion;
