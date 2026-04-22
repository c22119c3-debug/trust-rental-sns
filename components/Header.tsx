import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between p-4 bg-white dark:bg-gray-800">
            <nav className="flex space-x-4">
                <a href="#" className="text-black dark:text-white">Home</a>
                <a href="#" className="text-black dark:text-white">About</a>
                <a href="#" className="text-black dark:text-white">Services</a>
                <a href="#" className="text-black dark:text-white">Contact</a>
            </nav>
            <button className="text-black dark:text-white">Toggle Theme</button>
        </header>
    );
};

export default Header;