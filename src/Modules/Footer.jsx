import React from 'react'
import payments1 from '../assets/payment/bank.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

                {/* Contact Information */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-3">Kapcsolat</h3>
                    <p className="text-gray-400">4026 Debrecen, Vár utca 6 2. emelet</p>
                    <p className="text-gray-400">+36 1 234 5678</p>
                    <p className="text-gray-400">info@masszazsstudio.hu</p>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Gyorslinkek</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-red-500 transition">Kezdőlap</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Szolgáltatások</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Árak</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Kapcsolat</a></li>
                    </ul>
                </div>

                {/* PAYMENT SECTION */}
                <div className='text-center'>
                    <h3 className='text-xl font-bold text-white mb-3'>Fizetési lehetőségek</h3>
                    <img src={payments1} className='w-[200px]' />
                </div>

                {/* Social Media Links */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Kövess minket</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-gray-400 hover:text-red-500 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition">
                            <FaTiktok />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
                <p>© {new Date().getFullYear()} BástyaMasszázs Stúdió. Minden jog fenntartva.</p>
            </div>
        </footer>
    )
}

export default Footer