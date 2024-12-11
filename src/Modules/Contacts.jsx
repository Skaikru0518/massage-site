import React from 'react';

function Contacts() {
    return (
        <section className="bg-gray-100 h-[100vh]">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Látogasson meg minket</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Vegyen részt egy felejthetetlen masszázsban.
                    </p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.4559513794856!2d21.62620996970901!3d47.532293198198964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e74d5275571%3A0x1a2622db598ab69a!2sDebrecen%2C%20V%C3%A1r%20u.%206%2C%204024!5e0!3m2!1shu!2shu!4v1731705994232!5m2!1shu!2shu"
                                width="100%"
                                height="480"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Stúdiónk címe</h3>
                                    <p className="mt-1 text-gray-600">4026 Debrecen Vár utca 6. 2.emelet</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Nyitvatartás</h3>
                                    <p className="mt-1 text-gray-600">Hétfő - Péntek: 9 - 16</p>
                                    <p className="mt-1 text-gray-600">Szombat: 10 - 16</p>
                                    <p className="mt-1 text-gray-600">Vasárnap: Zárva</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Kontakt</h3>
                                    <p className="mt-1 text-gray-600">Email: info@example.com</p>
                                    <p className="mt-1 text-gray-600">Telefon: +1 23494 34993</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
