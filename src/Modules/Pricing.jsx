import React from 'react'
import { services } from '../assets/icons/index';

function Pricing() {

    return (
        <div className="bg-off-white py-16 px-8">
            <h2 className="text-3xl font-bold text-center text-black mb-12">Áraink</h2>
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform min-w-[200px]"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                        <p className='mb-6'>{service.ideal}</p>
                        <p className="text-lg text-gray-600 mb-6">{service.price}</p>
                        <p className='text-lg text-gray-600 mb-6'>{service.duration}</p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-black hover:text-red-500 transition-all">
                            Időpont foglalás
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing