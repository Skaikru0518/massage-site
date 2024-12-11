import React from 'react'
import avatar1 from '../assets/avatars/avatar1.jpg'
import avatar2 from '../assets/avatars/avatar2.jpg'
import avatar3 from '../assets/avatars/avatar3.jpg'

function Testimonials() {
    const testimonials = [
        {
            name: "Kovács Anna",
            feedback: "Csodálatos élményben volt részem ezen a masszázs szalonban! A légkör annyira pihentető, és a masszázs pontosan olyan volt, amire szükségem volt egy hosszú hét után.",
            location: "Budapest, Magyarország",
            avatar: avatar3,
        },
        {
            name: " Szabó József",
            feedback: "A személyzet nagyon profi, és a környezet igazán nyugodt. Mindenkinek ajánlom, aki egy prémium masszázsra vágyik!",
            location: "Debrecen, Magyarország",
            avatar: avatar1,
        },
        {
            name: "Kovács Péter",
            feedback: "Igazán frissítő élmény! A masszázs terapeuták hozzáértők és figyelmesek. Teljesen megújultam és ellazultam.",
            location: "Pécs, Magyarország",
            avatar: avatar2,
        },
    ];
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-roboto font-bold text-gray-800 mb-8">Rólunk mondtátok</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col">
                            <div className='flex items-center justify-center mb-5 min-h-[150px]'>
                                <img src={testimonial.avatar} alt="" className='rounded w-[100px] h-auto' />
                            </div>
                            <p className="text-lg text-gray-600 mb-4 min-h-32">{testimonial.feedback}</p>
                            <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials