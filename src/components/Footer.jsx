
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full border-t border-[#45C7F8]/20 bg-gradient-to-r from-[#00236D] to-[#00040D] px-4 py-6 font-roboto mob:px-6 tab:px-8 lap:px-12 desk2:px-20">
        
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 tab:grid-cols-[1fr_auto_1fr] tab:items-center">
            <div className="hidden tab:block" aria-hidden="true"></div>

            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-sm text-[#efefef]/40">
                &copy; {currentYear} José Jiménez. All rights reserved.
                </p>
                <p className="text-sm text-[#efefef]/40">
                Designed & Built with <span className="text-[#45C7F8]/80">Passion</span>.
                </p>
            </div>

            <div className="flex justify-center tab:justify-end">
                <button 
                    onClick={scrollToTop}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#45C7F8]/30 bg-[#00133B] transition-all duration-300 hover:bg-[#45C7F8]/60 hover:shadow-[0_0_15px_rgba(69,199,248,0.5)] tab:h-14 tab:w-14"
                    aria-label="Scroll to top"
                >
                    <svg 
                        className="h-5 w-5 text-[#45C7F8] transition-colors duration-300 group-hover:text-[#00040D] tab:h-6 tab:w-6" 
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
        
        </footer>
    );
};

export default Footer;
