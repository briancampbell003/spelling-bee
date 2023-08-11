import React from 'react';
import './Sidebar.css';

export default function About() {
  return (
    <div className='sidebar-contain'>
      <p className='brian-name'>
        Brian Campbell
      </p>
      <div className='brian-pic'></div>
      <p className='about-me'>
        web developer, social worker, DJ and writer working out of Chicago.
      </p>
    </div>
  );
}
