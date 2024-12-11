import React from 'react'
import { massageId } from '../assets/icons'

function Services() {
    return (
        <section className="text-gray-600 body-font bg-cool-gray py-16" id="services">
            <div className="container mx-auto">
                <h2 className="text-center phones:text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                    Masszázs Szolgáltatások
                </h2>
                <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto phones:text-sm lg:text-xl">
                    Válasszon különleges masszázsaink közül, és fedezze fel a testi-lelki harmóniát.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    {massageId.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform hover:scale-105 transition duration-300 flex flex-col"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-full p-5 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                                <p className="mt-2 text-gray-600 overflow-hidden h-20">
                                    {service.description}
                                </p>
                                {/* <div className="mt-auto pt-4">
                                    <button className="w-full inline-flex items-center justify-center px-4 py-2 text-white bg-red-500 rounded-full hover:bg-black hover:text-red-500 transition duration-300">
                                        További részletek
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services