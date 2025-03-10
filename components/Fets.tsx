import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Fetss() {
    const features = [
        {
            title: 'IT Staffing Services',
            description:
                'Our IT staffing services are available for every type of Tool or software. No matter how niche or common: We provide the right resources that can',
            icon: '/fet/one.png',
            points: [
                'Open-Source Technologies',
                'ETL Tools',
                'Analytics',
                'Process Automation Tools ',
                'Enterprise Application'
            ]
        },
        {
            title: 'IT Consulting',
            description:
                'Accelerate process discovery and client value with One Global technology consulting services. our consultants provide a tailored approach and deep expertise in ',
            icon: '/fet/two.png',
            points: [
                'Advanced Analytics',
                'Mobile BI',
                'Convergent Analytics  ',
                'Statistical Modeling ',
                'Predictive Analytics  ',
                'Machine Learnings'
            ]
        },
        {
            title: 'Digital Process Automation',
            description:
                'Deliver efficiency, consistency, and transparency to manual and time-consuming processes. With Digital Process Automation, you can boost efficiency, streamline experiences, and automate tasks rapidly. Our consultants are experienced in a variety of Process automation tools',
            icon: '/fet/three.png',
            points: ['Automation Anywhere', 'UI Path', 'Blue Prism', 'Prism']
        }
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
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
    </div>
    );
};
