import Image from 'next/image';
import React from 'react';

function HeroSection() {
    return (
        <div className="hero bg-base-200 py-12 sm:15 lg:py-17">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <Image src='/banner.png' alt='Image of Banner'
    className="max-w-sm rounded-lg shadow-2xl"
    width={334} height={334}
    />
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight">TRAIN WITH INTENT. LOG<br />
       EVERY SET.</h1>
      <p className="py-6 text-xs sm:text-sm lg:text-base">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
into today's plan, and watch the week's work add up.
      </p>
      <button className="btn bg-[#C2F800] text-black">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
    );
}

export default HeroSection;