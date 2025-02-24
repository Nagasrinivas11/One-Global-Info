'use client';
import React from 'react';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 0.8, // Slightly lighten the dark areas for better contrast
            diffuse: 1.1, // Reduce diffuse slightly to avoid too much brightness
            mapSamples: 16000,
            mapBrightness: 4, // Reduce brightness to make map more grayish
            baseColor: [0.188, 0.239, 0.424], // #303d6c
            markerColor: [1, 1, 1], // White markers
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.04 },
                { location: [23.6345, 102.5528], size: 0.05 },
                { location: [12.8797, 121.774], size: 0.06 },
                { location: [4.5709, 74.2973], size: 0.04 },
                { location: [0.7893, 113.9213], size: 0.07 },
                { location: [23.6345, 102.5528], size: 0.08 },
                { location: [-15.7975, -47.8919], size: 0.09 },
                { location: [14.0583, 108.2772], size: 0.03 },
                { location: [17.366, 78.476], size: 0.1 }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: 600,
                height: 600,
                maxWidth: '100%',
                aspectRatio: 1
            }}
            className={className}
        />
    );
};
