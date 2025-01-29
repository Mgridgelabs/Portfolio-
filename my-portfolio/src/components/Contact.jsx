import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-base-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
                    <button className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;