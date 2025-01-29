// import React from "react";

// const Footer = () => {
//     return (
//         <footer className="bg-base-200 p-4 text-center">
//             <p>&copy; 2025 My Portfolio. All rights reserved.</p>
//         </footer>
//     );
// };

// export default Footer;
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-8 rounded-t-lg shadow-lg">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    {/* Social Media Icons or Links */}
                    <a href="#" className="mx-2 text-xl hover:text-blue-500">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="mx-2 text-xl hover:text-blue-500">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="mx-2 text-xl hover:text-blue-500">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-sm">
                    &copy; 2025 My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

