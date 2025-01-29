import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-base-100 bg-amber-50 shadow-md p-4 rounded-b-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold text-primary">Mgridge-Labs</h1>
                <ul className="flex gap-4">
                    <li><a href="#about" className="btn btn-ghost">About</a></li>
                    <li><a href="#projects" className="btn btn-ghost">Projects</a></li>
                    <li><a href="#contact" className="btn btn-ghost">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
