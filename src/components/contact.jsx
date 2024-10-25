import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMailForward } from '@fortawesome/free-solid-svg-icons/faMailForward';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen m-3 md:pt-24">

            <div className="flex flex-col md:flex-row max-w-[1200px] justify-center mx-auto pb-10">
                <div className="md:min-w-[350px] lg:min-w-[500px] bg-contact  text-white font-semibold rounded-t-lg md:rounded-none md:rounded-l-lg "
                    style={{ backgroundImage: `url('/content/background3.svg')` }}
                >

                    <div className="flex flex-col justify-center items-center gap-4 pb-4">
                        <div className="text-center p-4">
                            <h2 className='text-2xl underline p-4'> <FontAwesomeIcon icon={faHome} className='mr-2' />Office Address:</h2>
                            <span className="block">Demo Company Ltd.</span>
                            <span className="block">6 Aston Quay</span>
                            <span className="block">Ballinasloe</span>
                            <span className="block">Co-Galway</span>
                        </div>

                        <div className="text-center p-4">
                            <h2 className='text-2xl underline p-4'> <FontAwesomeIcon icon={faPhone} className='mr-2' />Call us at:</h2>
                            <span className="block">083 123456789</span>
                        </div>

                        <div className="text-center p-4">
                            <h2 className='text-2xl underline p-4'> <FontAwesomeIcon icon={faEnvelope} className='mr-2' />Email:</h2>
                            <span className="block">demo@yourcompanyName.com</span>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <ul className="flex items-center space-x-4">
                                <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white">
                                    <a href="javascript:void()" title='X / Twitter'>
                                        <svg class="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                            <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white">
                                    <a href="javascript:void()" title="FaceBook">
                                        <svg class="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                            <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                        </svg>
                                    </a>
                                </li>


                                <li className="w-10 h-10  rounded-full  flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                                    <a href="javascript:void(0)" title="Instagram">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="svg-icon w-6 h-6 text-black"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 2.2c3.3 0 3.7.01 5.01.07 1.26.06 2.14.26 2.64.43.66.24 1.14.52 1.64 1.02.5.5.78.98 1.02 1.64.17.5.37 1.38.43 2.64.06 1.31.07 1.71.07 5.01s-.01 3.7-.07 5.01c-.06 1.26-.26 2.14-.43 2.64-.24.66-.52 1.14-1.02 1.64-.5.5-.98.78-1.64 1.02-.5.17-1.38.37-2.64.43-1.31.06-1.71.07-5.01.07s-3.7-.01-5.01-.07c-1.26-.06-2.14-.26-2.64-.43-.66-.24-1.14-.52-1.64-1.02-.5-.5-.78-.98-1.02-1.64-.17-.5-.37-1.38-.43-2.64C2.2 15.7 2.2 15.3 2.2 12s.01-3.7.07-5.01c.06-1.26.26-2.14.43-2.64.24-.66.52-1.14 1.02-1.64.5-.5.98-.78 1.64-1.02.5-.17 1.38-.37 2.64-.43C8.3 2.2 8.7 2.2 12 2.2M12 0C8.67 0 8.25.01 6.95.07 5.65.13 4.66.33 3.94.6 3.19.87 2.55 1.23 1.91 1.87c-.64.64-1 1.28-1.27 2.03-.27.72-.47 1.71-.53 3.01C.01 8.25 0 8.67 0 12s.01 3.75.07 5.05c.06 1.3.26 2.29.53 3.01.27.75.63 1.39 1.27 2.03.64.64 1.28 1 2.03 1.27.72.27 1.71.47 3.01.53 1.3.06 1.72.07 5.05.07s3.75-.01 5.05-.07c1.3-.06 2.29-.26 3.01-.53.75-.27 1.39-.63 2.03-1.27.64-.64 1-1.28 1.27-2.03.27-.72.47-1.71.53-3.01.06-1.3.07-1.72.07-5.05s-.01-3.75-.07-5.05c-.06-1.3-.26-2.29-.53-3.01-.27-.75-.63-1.39-1.27-2.03-.64-.64-1.28-1-2.03-1.27-.72-.27-1.71-.47-3.01-.53C15.75.01 15.33 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.88a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white">
                                    <a href="javascript:void(0)" title="TikTok">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-black">
                                            <path d="M12.004 2c1.145 0 2.246.228 3.242.646a4.615 4.615 0 002.724 2.91A7.128 7.128 0 0020 6.266v2.255a9.416 9.416 0 01-2.957-.631 7.278 7.278 0 01-1.937-1.022v6.05a5.567 5.567 0 01-8.224 4.933 5.492 5.492 0 01-1.762-1.603 5.39 5.39 0 01-.986-3.086 5.549 5.549 0 011.511-3.785 5.634 5.634 0 013.815-1.593c.19-.004.381.009.572.04v2.678a2.865 2.865 0 00-2.79 2.86c0 1.583 1.246 2.84 2.788 2.86a2.865 2.865 0 002.79-2.86V2h1.848z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>



                    </div>


                </div>


                <div id="formSection " className="bg-[#bb9457] p-6  rounded-b-lg md:rounded-none md:rounded-r-lg shadow-lg">
                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="fname" className="text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder="First Name"
                                    className="w-1/2 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-contact"
                                />
                                <input
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    placeholder="Last Name"
                                    className="w-1/2 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-contact"
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
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-contact"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phNumber" className="text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phNumber"
                                name="phNumber"
                                inputMode='numeric'
                                placeholder="123-456-7890"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-contact"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">How can we assist you?</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-contact"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-contact  text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </section >
    );
};

export default Contact;