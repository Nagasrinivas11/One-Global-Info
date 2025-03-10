import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Read() {
    const features = [
        {
            title: 'Our Experience',
            description:
                'After 30 years in the IT industry, we decided to alter our direction. Now, we share and use our experiences to help others. Our ramp-up process is designed to empower your technical team and outfit them with the tools they need to succeed.',
            icon: '/read/one.png',
            points: [
                'Open-Source Technologies',
                'ETL Tools',
                'Data Analytics',
                'Cloud-based development',
                'End-to-end integration',
                'RPA/ML/AI'
            ]
        },
        {
            title: 'Our Approach',
            description:
                'Our service includes a comprehensive consulting to help identify the right resources, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule.',
            icon: '/read/two.png',
            points: []
        },
        {
            title: 'Why Us',
            description:
                "Business mentors are key—that’s why when it comes to client selection, we’re choosy. We want to give each of you the time and guidance they deserve. We didn't get there alone. And neither will you. Call us today.",
            icon: '/read/three.png',
            points: []
        }
    ];
    
    return (
        <div
            id="read-more"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto"
        >
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    points,
    index
}: {
    title: string;
    description: string;
    icon: string;
    points: string[];
    index: number;
}) => {
    return (
        <div
            className={cn(
                'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 transition-all duration-200 hover:bg-[#0D465A] hover:rounded-3xl hover:text-white',
                (index === 0 || index === 3) && 'lg:border-l dark:border-neutral-800',
                index < 4 && 'lg:border-b dark:border-neutral-800'
            )}
        >
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                <Image src={icon} alt="icon" height={40} width={40} />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 group-hover/feature:text-white">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 leading-5 dark:text-neutral-300 max-w-xs relative z-10 px-10 group-hover/feature:text-white">
                {description}
            </p>
            <ul className="list-disc mt-2 pl-12 text-sm text-neutral-600 dark:text-neutral-300 group-hover/feature:text-white">
                {points.map((point, i) => (
                    <li className="py-1" key={i}>
                        {point}
                    </li>
                ))}
            </ul>
            <div className="w-full flex justify-center">
                <button className="flex items-center w-3/4 mt-8 justify-center bg-gray-100 hover:bg-white hover:text-[#6674a7] border-2  text-gray-600   border-[#303d6c] focus:ring-4 focus:outline-none  font-semibold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-400 ease-in-out">
                    Learn More
                </button>
            </div>
        </div>
    );
};
