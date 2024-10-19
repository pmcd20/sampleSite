const Services = () => {
    return (
        <section id="services" className="min-h-screen  flex items-center justify-center">

            <div class="container mx-auto p-6 max-w-[1200px]">
                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h2 class="text-2xl font-bold mb-4">Consult & Evaluate</h2>
                            <p class="text-gray-700 mb-6">
                                Understand your project vision and assess the site for feasibility, considering local planning regulations and site conditions.
                            </p>
                        </div>
                        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold mt-auto">Learn more</a>
                    </div>


                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h2 class="text-2xl font-bold mb-4">Design & Plan</h2>
                            <p class="text-gray-700 mb-6">
                                Develop design concepts and handle planning permission applications, ensuring your project complies with local zoning laws.
                            </p>
                        </div>
                        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold mt-auto">Learn more</a>
                    </div>


                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h2 class="text-2xl font-bold mb-4">Detailed Design</h2>
                            <p class="text-gray-700 mb-6">
                                Create technical drawings, specifications, and coordinate contractor selection to prepare for construction.
                            </p>
                        </div>
                        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold mt-auto">Learn more</a>
                    </div>


                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h2 class="text-2xl font-bold mb-4">Build & Finalize</h2>
                            <p class="text-gray-700 mb-6">
                                Oversee construction, manage progress, and provide certifications and post-construction support.
                            </p>
                        </div>
                        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold mt-auto">Learn more</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;