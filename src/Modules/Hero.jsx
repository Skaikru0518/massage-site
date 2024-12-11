import React from 'react'
import Studio from '../assets/studio.png'

function Hero() {
    return (
        <section
            className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-center"
            style={{
                backgroundImage: `url(${Studio})`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white px-6 md:px-12 lg:px-24">
                <h1 className="lg:text-6xl phones:text-2xl font-bold lg:leading-relaxed phones:leading-relaxed tracking-wide mb-4 font-roboto">
                    Egészséges Test és Nyugodt Lélek
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto font-roboto">
                    Professzionális masszázs, amely új energiával tölt fel.
                </p>
                <button className="px-8 py-3 rounded-full text-lg font-roboto font-medium bg-red-500 hover:bg-black transition-all duration-300 text-white hover:text-red-500 shadow-lg">
                    Foglaljon időpontot most
                </button>
            </div>
        </section>
    )
}

export default Hero