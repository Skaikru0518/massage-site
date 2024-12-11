import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='bg-gradient-to-b from-cool-gray to-gray-300/20 w-full shadow-lg' ref={menuRef}>
            <div className='lg:flex lg:flex-row items-center justify-center mx-10 px-0 py-2 phones:flex phones:flex-col phones:items-center phones:px-4 phones:py-4'>
                {/* Logo Section */}
                <div className='flex items-center justify-between w-full lg:w-1/3 phones:mb-4'>
                    <Link to="/">                    <img
                        src={Logo}
                        className='w-[150px] lg:w-[200px] cursor-pointer phones:w-[200px] phones:-my-16 phones:-mb-24'
                        alt="Logo"
                    /></Link>

                    {/* Hamburger Icon */}
                    <button
                        className='lg:hidden phones:block text-black hover:text-red-500 focus:outline-none phones:mt-4'
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            // "X" Icon
                            <svg
                                className="w-8 h-8 transform rotate-180 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg
                                className="w-8 h-8 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Section */}
                <div
                    className={`w-full lg:w-1/3 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-14 font-roboto lg:text-2xl phones:text-lg phones:flex phones:flex-col phones:items-center phones:gap-3 phones:mb-4 phones:mt-4 ${menuOpen ? 'phones:flex' : 'phones:hidden'
                        }`}
                >
                    <Link to="/"><a className='text-black hover:text-red-500 hover:scale-110 transition-all'>Kezdőlap</a></Link>
                    <Link to="/Services"><a className='text-black hover:text-red-500 hover:scale-110 transition-all'>Szolgáltatások</a></Link>
                    <Link to="/Pricing"><a className='text-black hover:text-red-500 hover:scale-110 transition-all'>Árak</a></Link>
                    <Link to="/Contacts"><a className='text-black hover:text-red-500 hover:scale-110 transition-all'>Kapcsolat</a></Link>
                    {/* Időpont Foglalás Button in Dropdown */}
                    <button className="group flex lg:hidden phones:h-12 items-center gap-2 rounded-full bg-red-500 text-white px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:pl-3 hover:text-red-500 active:bg-neutral-700">
                        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                        <span>
                            Időpont foglalás
                        </span>
                    </button>
                </div>

                {/* Button Section for Desktop */}
                <div className='hidden lg:flex w-full lg:w-1/3 items-center justify-end'>
                    <button className="group flex lg:h-10 items-center gap-2 rounded-full bg-red-500 text-white px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:pl-3 hover:text-red-500 active:bg-neutral-700">
                        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                        <span>
                            Időpont foglalás
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
