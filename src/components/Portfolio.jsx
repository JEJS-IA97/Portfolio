import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Background from "../assets/images/Background-01.jpg";

const projects = [
    {
        id: 1,
        title: "Cineverse",
        description: "A website for browsing and streaming movies, integrated with the IMDB API and built using React, Tailwind CSS, and Vite.",
        imageInitial: "/images/CineB.png",
        imageHover: "/images/CineD.png",
        url: "https://cineverse-mocha.vercel.app/"
    },
    {
        id: 2,
        title: "Urban Threads",
        description: "A urban fashion e-commerce built with React, Tailwind CSS, and Vite.",
        imageInitial: "/images/UrbanB.png",
        imageHover: "/images/UrbanD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 3,
        title: "Banco Universitario",
        description: "A web-based system for student transactions and scholarship management built using React and Redux.",
        imageInitial: "/images/BancoB.png",
        imageHover: "/images/BancoD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 4,
        title: "SoundVibe",
        description: "A mobile social network for sharing musical preferences, utilizing React Native and PostgreSQL.",
        imageInitial: "/images/SoundvibeB.png",
        imageHover: "/images/SoundvibeD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 5,
        title: "Pokedex",
        description: "An interactive application for exploring the first generation of Pokémon, built with Vite and JavaScript.",
        imageInitial: "/images/PokeB.png",
        imageHover: "/images/PokeD.png",
        url: "https://pokedex-sable-iota.vercel.app/"
    },
    {
        id: 6,
        title: "Chat App",
        description: "Instant messaging platform built with React and Socket.io, featuring profiles and dynamic search.",
        imageInitial: "/images/ChatB.png",
        imageHover: "/images/ChatD.png",
        url: "https://chat-app-rust-two-14.vercel.app/"
    },
    {
        id: 7,
        title: "Cypress Core",
        description: "End-to-end automation framework for transaction validation on complex platforms.",
        imageInitial: "/images/CoreB.png",
        imageHover: "/images/CoreD.png",
        url: "https://github.com/JEJS-IA97/Cypress-Core"
    },
    {
        id: 8,
        title: "E2E-Collective",
        description: "Advanced framework for comprehensive functional and regression testing.",
        imageInitial: "/images/e2eB.png",
        imageHover: "/images/e2eD.png",
        url: "https://github.com/JEJS-IA97/e2e-collective"
    },
    {
        id: 9,
        title: "Inflatio (Financial Tracker)",
        description: "A financial tracking application for monitoring inflation and multi-currency balances built with React and Node.js.",
        imageInitial: "/images/InflatioB.png",
        imageHover: "/images/InflatioD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 10,
        title: "Prototypes & Designs",
        description: "Collection of interactive prototypes and UI/UX designs created with Figma and Adobe Illustrator.",
        imageInitial: "/images/ProtoB.png",
        imageHover: "/images/ProtoD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 11,
        title: "In progress...",
        description: "More exciting projects are on the way! Stay tuned for the latest additions to my portfolio.",
        imageInitial: "/images/404B.png",
        imageHover: "/images/404D.png",
        url: "https://github.com/JEJS-IA97"
    }
];

const Portfolio = () => {
    return (
        <div className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-r from-[#00133B] to-[#00040D] px-4 py-16 font-sans mob:px-6 tab:px-8 lap:px-12 desk2:px-20 desk3:px-24">

            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 pointer-events-none"
            />

            <div className="relative z-10 flex w-full max-w-[1600px] flex-col items-center">
                
                <h1 className="mb-12 text-center text-[44px] font-bold leading-none text-[#efefef] text-opacity-80 mob:text-[52px] tab:mb-14 tab:text-[60px] lap:mb-16 lap:text-[72px] desk3:text-[84px]">
                    Projects<span className="text-[#45C7F8] text-opacity-50">.</span>
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1200: { slidesPerView: 3, spaceBetween: 28 },
                        1800: { slidesPerView: 4, spaceBetween: 32 },
                    }}
                    className="custom-swiper w-full pb-16"
                >
                    {projects.map((proj) => (
                        <SwiperSlide key={proj.id} className="h-auto">
                            <a 
                                href={proj.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="group flex h-full min-h-[470px] flex-col rounded-sm bg-[#142e48]/30 p-4 pb-10 shadow-2xl transform transition-transform duration-300 hover:rotate-2 mob:min-h-[500px] lap:min-h-[540px]"
                            >
                                <div className="relative mb-6 aspect-square overflow-hidden rounded-sm border border-gray-300 bg-[#142e48] transition-colors duration-500 group-hover:border-[#45C7F8] group-hover:bg-[#efefef] flex items-center justify-center">
                                    <img 
                                        src={proj.imageInitial} 
                                        alt={proj.title} 
                                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img 
                                        src={proj.imageHover} 
                                        alt={`${proj.title} Hover`} 
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                                    />
                                </div>

                                <div className="px-2">
                                    <h3 className="mb-3 text-lg font-bold text-[#efefef] tab:text-xl">
                                        {proj.title}
                                    </h3>
                                    <p className="text-sm font-medium italic leading-relaxed text-[#efefef]/80 tab:text-[15px]">
                                        {proj.description}
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .custom-swiper .swiper-pagination-bullet {
                    background: #efefef !important;
                    opacity: 0.3;
                    width: 10px;
                    height: 10px;
                }

                .custom-swiper .swiper-pagination-bullet-active {
                    background: #45C7F8 !important;
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
