import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="py-16 px-4 bg-base-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">My Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {/* Example Project */}
                    <div className="card bg-white shadow-lg p-4">
                        <h3 className="text-xl font-semibold">Project 1</h3>
                        <p className="text-sm mt-2">Description of the project goes here.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;