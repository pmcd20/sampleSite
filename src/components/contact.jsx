const Contact = () => {
    return (
        <section id="contact" className="h-screen bg-[#bb9457] flex flew-col justify-center">


            <div className="min-w-[500px] bg-wood-rings">
                put something here
            </div>
            <div id="formSection" className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="fname" className="text-sm font-semibold text-gray-700 mb-2">Name</label>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="First Name"
                                className="w-1/2 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                placeholder="Last Name"
                                className="w-1/2 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phNumber" className="text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phNumber"
                            name="phNumber"
                            placeholder="123-456-7890"
                            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">How can we assist you?</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message..."
                            rows="5"
                            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>


        </section >
    );
};

export default Contact;