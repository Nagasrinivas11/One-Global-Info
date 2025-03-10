import React from 'react';
import Header from './Header';
import Hero from './Hero';
const Top = () => {
    return (
        <div
            style={{ backgroundImage: "url('/bgg.jpeg')" }}
            className="bg-cover bg-center bg-no-repeat"
        >
            <Header />
            <Hero />
        </div>
    );
};

export default Top;
