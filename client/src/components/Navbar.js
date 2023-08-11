import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='nav'>
            <ul>
                <li className='nav-item'>
                    <a
                        href="#wordadder"
                        onClick={() => handlePageChange('WordAdder')}
                        className={currentPage === 'WordAdder' ? 'nav-link active' : 'nav-link'}
                    >
                        AddWord
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href="#dummy"
                        onClick={() => handlePageChange('Dummy')}
                        className={currentPage === 'Dummy' ? 'nav-link active' : 'nav-link'}
                    >
                        Dummy
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href="#dummy2"
                        onClick={() => handlePageChange('Dummy2')}
                        className={currentPage === 'Dummy2' ? 'nav-link active' : 'nav-link'}
                    >
                        Dummy2
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;