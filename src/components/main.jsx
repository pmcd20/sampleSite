

const Main = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center bg-architect bg-center bg-cover"
        >
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <h2 className="relative z-10 text-5xl font-bold text-orange-500">Main</h2>
        </section>

    );
};

export default Main;