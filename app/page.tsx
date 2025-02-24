'use client';
import HeroSection from '@/components/Hero';
import Tabs from '@/components/Tabs';
import { HomeTabs } from '@/data/HomeTabs';
export default function Home() {
    return (
        <div>
            <HeroSection />
            <Tabs  tabs={HomeTabs}/>
        </div>
    );
}
