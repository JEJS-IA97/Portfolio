import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="dropdown relative">
      <div className="flex items-center gap-2 cursor-pointer hover:text-GreenB" onClick={toggleDropdown}>
        <a className="menu-hover text-base pho:text-[14px] hover:text-GreenB">
          Curriculums
        </a>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" className="h-4 w-4 hover:text-GreenB">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>

      {isDropdownOpen && (
        <div className="absolute z-50 flex w-full flex-col bg-transparent py-1 mt-2 px-4 text-white shadow-xl desk1:text-[16px] font-roboto">
          <a 
            href="/documents/CV_Developer_José_Jiménez.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="border-b border-GreenB font-semibold"
          >Developer</a>

          <a 
          href="/documents/CV_QA_José_Jiménez.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="block border-b border-GreenB py-1 font-semibold">
          Quality Assurance</a>
          <a
          href="/documents/CV_Designer_José_Jiménez.pdf"
          target="_blank" 
          rel="noopener noreferrer"
           className="block py-1 font-semibold">Designer</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
