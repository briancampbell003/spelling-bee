import React, { useState } from 'react';
import NavBar from './Navbar';
import WordAdder from './pages/WordAdder/WordAdder';
import './BodyContainer.css';

export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('WordAdder');

    // Determine page to render passed on the value of currentPage
    const renderPage = () => {
        if (currentPage === 'WordAdder') {
            return <WordAdder />;
        }
        // if (currentPage === 'Contact') {
        //     return <Contact />;
        // }
        // if (currentPage === 'Resume') {
        //     return <Resume />;
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className="body-container">
            < NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
