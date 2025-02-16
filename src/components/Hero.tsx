import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 h-screen bg-accent">
            {/* Left Side Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl font-bold text-primary leading-tight mt-[-20px]">
                    Local Growth Experts
                </h1>
                <p className="mt-4 text-gray-700 text-2xl">
                    We collaborate with your business to develop a top-tier visibility strategy that maximizes your local search potential—turning prospects into clients and engaging visitors into loyal customers.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-lightblue transition">
                        Get a Free SEO Audit
                    </button>
                    <button className="bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-lightblue transition">
                        Book a Call
                    </button>
                </div>

                {/* Logos */}
                <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                    <Image src="/semrush-logo.png" width={80} height={40} alt="Semrush" />
                    <Image src="/google-logo.png" width={80} height={40} alt="Google" />
                    <Image src="/surfer-logo.png" width={80} height={40} alt="Surfer SEO" />
                </div>
            </div>

            {/* Right Side - GIF/Animation */}
            <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                <div className="w-[400px] h-[300px] flex items-center justify-center bg-gray-200 rounded-lg">
                    <span className="text-3xl font-bold text-gray-500">GIF</span>
                </div>
            </div>
        </section>
    );
}

export default Hero