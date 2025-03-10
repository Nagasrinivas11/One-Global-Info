'use client';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
export function InfiniteMovingCardsDemo() {
    return (
        <div className="w-[98vw] rounded-md flex flex-col items-center justify-center overflow-hidden relative">
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="normal"
            />
        </div>
    );
}


const testimonials = [
    {
        name: 'Indoneassiaa',
        url: '/s/mic.png'
    },
    {
        name: 'Sris Lanka',
        url: '/s/orc.png'
    },
    {
        name: 'India',
        url: '/s/akk.png'
    },
    {
        name: 'Mexico',
        url: '/s/capgem.png'
    },
    {
        name: 'Columbia',
        url: '/s/ciber.png'
    },
    {
        name: 'Brazil',
        url: '/s/exp.png'
    },

    {
        name: 'Philippines',
        url: '/s/hex.jpeg'
    },
    {
        name: 'Vietnam',
        url: '/s/lt.png'
    },

    {
        name: 'Indonesia',
        url: '/s/rand.jpeg'
    },
    {
        name: 'Sriss Lanka',
        url: '/s/sogeti.png'
    },
    {
        name: 'Indonesiaa',
        url: '/s/tek.png'
    },
    {
        name: 'Sri Lanka',
        url: '/s/sur.png'
    }
];
