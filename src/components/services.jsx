import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faClipboardCheck, faDraftingCompass, faSearch } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <section id="services" className="min-h-screen  flex items-center justify-center text-white">

            <div className="  container mx-auto p-6 max-w-[1200px]">
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
                        <div className=" relative p-6 rounded-lg shadow-md flex flex-col justify-between bg-group-discussion  bg-no-repeat bg-cover bg-bottom lg:min-h-[500px] ">

                            <div className="absolute inset-0 bg-red-400  opacity-75 rounded-lg"></div>



                            <div className="relative z-10">
                                <div className="hidden lg:block text-4xl mb-4 text-center">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-center">Consult & Evaluate</h2>
                                <p className=" mb-6 text-wrap  font-semibold">
                                    Understand your project vision and assess the site for feasibility, considering local planning regulations and site conditions.
                                </p>
                            </div>
                            <p className="text-white opacity-85 font-semibold mt-auto hover:underline">Learn more</p>
                        </div>
                    </a>

                    <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
                        <div className=" relative p-6 rounded-lg shadow-md flex flex-col justify-between bg-table-plan  bg-no-repeat bg-cover bg-bottom lg:min-h-[500px] ">

                            <div className="absolute inset-0 bg-yellow-400  opacity-75 rounded-lg"></div>



                            <div className="relative z-10">
                                <div className="hidden lg:block text-4xl mb-4 text-center">
                                    <FontAwesomeIcon icon={faClipboardCheck} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-center">Design & Plan</h2>
                                <p className=" mb-6 text-wrap  font-semibold">
                                    Develop design concepts and handle planning permission applications, ensuring your project complies with local zoning laws.
                                </p>
                            </div>
                            <p className="text-white opacity-85 font-semibold mt-auto hover:underline">Learn more</p>
                        </div>
                    </a>


                    <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
                        <div className=" relative p-6 rounded-lg shadow-md flex flex-col justify-between bg-person-computer  bg-no-repeat bg-cover bg-bottom lg:min-h-[500px] ">

                            <div className="absolute inset-0 bg-blue-400  opacity-75 rounded-lg"></div>



                            <div className="relative z-10">
                                <div className="hidden lg:block text-4xl mb-4 text-center">
                                    <FontAwesomeIcon icon={faDraftingCompass} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-center">Detailed Design</h2>
                                <p className=" mb-6 text-wrap  font-semibold">
                                    Create technical drawings, specifications, and coordinate contractor selection to prepare for construction.
                                </p>
                            </div>
                            <p className="text-white opacity-85 font-semibold mt-auto hover:underline">Learn more</p>
                        </div>
                    </a>

                    <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
                        <div className=" relative p-6 rounded-lg shadow-md flex flex-col justify-between bg-saw-sparks  bg-no-repeat bg-cover bg-bottom lg:min-h-[500px] ">

                            <div className="absolute inset-0 bg-green-400  opacity-75 rounded-lg"></div>



                            <div className="relative z-10">
                                <div className="hidden lg:block text-4xl mb-4 text-center">
                                    <FontAwesomeIcon icon={faHammer} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-center">Build & Finalize</h2>
                                <p className=" mb-6 text-wrap  font-semibold">
                                    Oversee construction, manage progress, and provide certifications and post-construction support.
                                </p>
                            </div>
                            <p className="text-white opacity-85 font-semibold mt-auto hover:underline">Learn more</p>
                        </div>
                    </a>




                </div>
            </div>
        </section>
    );
};

export default Services;