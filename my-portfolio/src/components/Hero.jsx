import React from "react";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-base-200 text-center">
            <h1 className="text-5xl font-bold">Hi, I'm [Ian Maina ]</h1>
            <p className="mt-4 text-lg">A Web Developer specializing in React & Tailwind CSS.</p>
            <a href="#projects" className="btn btn-primary mt-6">View Projects</a>
        </section>
    );
};

export default Hero;