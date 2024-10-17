

const Main = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center bg-architect bg-center bg-cover"
        >
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>


            <section className="relative flex flex-row gap-4 bg-white bg-opacity-70 m-10 max-w-[1200px] border-4 border-gray-500 rounded-lg shadow-lg outline outline-2 outline-gray-300">
                <div className="flex-grow w-full max-w-[550px] my-3 ml-3 ">
                    <img src="https://st2.depositphotos.com/3695509/5259/i/950/depositphotos_52596411-stock-photo-architect-in-office.jpg" alt="Architect in office" className="w-full h-auto object-cover border-4  border-gray-200 outline outline-1 " />
                </div>
                <div className="flex-grow max-w-[650px]">
                    <h1>Architectural and Planning Services</h1>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis sit commodo ex; mi ac ex varius. Iaculis class vehicula nisi himenaeos vulputate leo. Pharetra erat dignissim vehicula sed adipiscing fames. Quis venenatis praesent</p>
                    <p>Sodales porta integer efficitur et ultricies. Proin ultricies id mi mattis mattis porta suscipit fames? Vehicula viverra facilisi felis condimentum montes at. At penatibus senectus elementum porta lacinia mus vehicula quis senectus. Aptent sollicitudin urna aenean risus sodales praesent</p>
                </div>
            </section>

        </section>

    );
};

export default Main;