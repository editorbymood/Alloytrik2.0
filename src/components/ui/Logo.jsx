import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* 
        The primary 'A' Shape 
        A thick white chevron completely closed at the top with an open bottom inner cutout.
      */}
            <path
                d="M 15 85 L 40 10 L 60 10 L 85 85 L 68 85 L 50 32 L 32 85 Z"
                fill="currentColor"
            />

            {/* 
        The 'T' Cutout 
        Nestled at the very top flat surface of the 'A'. 
        Uses the background color to perfectly simulate being negative space/cutout in light & dark modes.
      */}
            <path
                d="M 42 14 L 58 14 L 58 17 L 55 17 L 55 15.5 L 51.5 15.5 L 51.5 28 L 53.5 28 L 53.5 30 L 46.5 30 L 46.5 28 L 48.5 28 L 48.5 15.5 L 45 15.5 L 45 17 L 42 17 Z"
                fill="var(--background)"
            />

            {/* 
        The Interlaced Triskelion Rings
        Positioned to deliberately punch through the inner cutouts of the 'A', breaking its walls visually.
      */}
            <circle cx="50" cy="48" r="11" stroke="var(--background)" strokeWidth="3.5" fill="none" />
            <circle cx="58" cy="62" r="11" stroke="var(--background)" strokeWidth="3.5" fill="none" />

            {/* The iconic RED Ring of the Alloytrik branding */}
            <circle cx="42" cy="62" r="11" stroke="var(--primary, #cc292b)" strokeWidth="3.5" fill="none" />
        </svg>
    );
};

export default Logo;
