
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-r from-[#00236D] to-[#00040D] h-[90px] px-6 border-t border-[#45C7F8]/20 relative font-roboto relative flex items-center">
        
        <div className="max-w-[1200px] mx-auto flex justify-end items-center absolute right-0 pr-[80px]">

            <div className="flex flex-col items-center items-end">
            <button 
                onClick={scrollToTop}
                className="group flex items-center justify-center w-14 h-14 bg-[#00133B] border border-[#45C7F8]/30 rounded-full hover:bg-[#45C7F8]/60 hover:shadow-[0_0_15px_rgba(69,199,248,0.5)] transition-all duration-300 mb-3"
                aria-label="Scroll to top"
            >
                <svg 
                    className="w-6 h-6 text-[#45C7F8] group-hover:text-[#00040D] transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path>
                </svg>
            </button>
            </div>

        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-2">
            <p className="text-[#efefef]/40 text-sm">
            &copy; {currentYear} José Jiménez. All rights reserved.
            </p>
            <p className="text-[#efefef]/40 text-sm">
            Designed & Built with <span className="text-[#45C7F8]/80">Passion</span>.
            </p>
        </div>
        
        </footer>
    );
};

export default Footer;