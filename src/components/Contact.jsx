import Background from "../assets/images/Background-01.jpg";

const Contact = () => {
    return (
        <div className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-r from-[#00040D] to-[#00133B] px-4 py-16 mob:px-6 tab:px-8 lap:px-12 desk2:px-20 desk3:px-24">

            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="w-full h-full z-0 absolute inset-0 object-cover opacity-30 pointer-events-none"
            />

            <div className="relative z-10 flex w-full max-w-[1500px] flex-col items-center">

                <h1 className="mb-4 text-center text-[44px] font-bold leading-none tracking-wide text-[#efefef]/80 mob:text-[52px] tab:text-[60px] lap:text-[64px] desk3:text-[76px]">
                    Contact<span className="text-[#45C7F8]/70">.</span>
                </h1>
                
                <p className="mb-12 text-center text-[16px] font-medium text-[#efefef]/80 tab:text-[18px]">
                    Contact me or follow my social media
                </p>

                <div className="grid w-full grid-cols-1 gap-4 tab:grid-cols-2 lap:gap-6">

                    <a 
                        href="https://linkedin.com/in/jejs97" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-gray-700/60 bg-transparent p-4 transition-all duration-300 hover:border-gray-500 hover:bg-white/5 mob:p-5 lap:p-6"
                    >
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-[#efefef]/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <span className="text-base font-medium text-[#efefef]/80 transition-colors group-hover:text-white lap:text-lg">Linkedin</span>
                        </div>
                        <svg className="w-6 h-6 text-[#45C7F8]/70 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>

                    <a 
                        href="https://github.com/JEJS-IA97" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-gray-700/60 bg-transparent p-4 transition-all duration-300 hover:border-gray-500 hover:bg-white/5 mob:p-5 lap:p-6"
                    >
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-[#efefef]/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="text-base font-medium text-[#efefef]/80 transition-colors group-hover:text-white lap:text-lg">GitHub</span>
                        </div>
                        <svg className="w-6 h-6 text-[#45C7F8]/70 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>

                    <a 
                        href="https://wa.me/584145017060" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-gray-700/60 bg-transparent p-4 transition-all duration-300 hover:border-gray-500 hover:bg-white/5 mob:p-5 lap:p-6"
                    >
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-[#efefef]/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                            <span className="text-base font-medium text-[#efefef]/80 transition-colors group-hover:text-white lap:text-lg">WhatsApp</span>
                        </div>
                        <svg className="w-6 h-6 text-[#45C7F8]/70 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>

                    <a 
                        href="mailto:jose.e.jimenez.1411@gmail.com" 
                        className="group flex items-center justify-between rounded-xl border border-gray-700/60 bg-transparent p-4 transition-all duration-300 hover:border-gray-500 hover:bg-white/5 mob:p-5 lap:p-6"
                    >
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-[#efefef]/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-base font-medium text-[#efefef]/80 transition-colors group-hover:text-white lap:text-lg">E-mail</span>
                        </div>
                        <svg className="w-6 h-6 text-[#45C7F8]/70 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Contact;
