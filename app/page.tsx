'use client';

import Tabs from '@/components/Tabs';
import Top from '@/components/Top';
import { HomeTabs } from '@/data/HomeTabs';
export default function Home() {
    return (
        <div>
            <Top />
            <Tabs tabs={HomeTabs} />
        </div>
    );
}
