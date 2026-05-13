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
        description: "Página web para la exploración y reproducción de películas, integrada con TMDB API y desarrollada con React, Tailwind CSS y Vite.",
        imageInitial: "/images/CineB.png",
        imageHover: "/images/CineD.png",
        url: "https://cineverse-mocha.vercel.app/"
    },
    {
        id: 2,
        title: "Urban Threads",
        description: "Ecommerce de moda urbana con React, Tailwind CSS y Vite.",
        imageInitial: "/images/UrbanB.png",
        imageHover: "/images/UrbanD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 3,
        title: "Banco Universitario",
        description: "Sistema web para transacciones estudiantiles y gestión de becas desarrollado en React y Redux.",
        imageInitial: "/images/BancoB.png",
        imageHover: "/images/BancoD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 4,
        title: "SoundVibe",
        description: "Red social móvil para compartir gustos musicales, utilizando React Native y PostgreSQL.",
        imageInitial: "/images/SoundvibeB.png",
        imageHover: "/images/SoundvibeD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 5,
        title: "Pokedex",
        description: "Aplicación interactiva para la exploración de la primera generación de Pokémons, construida con Vite y JavaScript.",
        imageInitial: "/images/PokeB.png",
        imageHover: "/images/PokeD.png",
        url: "https://pokedex-sable-iota.vercel.app/"
    },
    {
        id: 6,
        title: "Chat App",
        description: "Plataforma de mensajería instantánea construida con React y Socket.io, con perfiles y búsqueda dinámica.",
        imageInitial: "/images/ChatB.png",
        imageHover: "/images/ChatD.png",
        url: "https://chat-app-rust-two-14.vercel.app/"
    },
    {
        id: 7,
        title: "Cypress Core",
        description: "Arquitectura base de automatización E2E para la validación de transacciones en plataformas complejas.",
        imageInitial: "/images/CoreB.png",
        imageHover: "/images/CoreD.png",
        url: "https://github.com/JEJS-IA97/Cypress-Core"
    },
    {
        id: 8,
        title: "E2E-Collective",
        description: "Framework avanzado de pruebas funcionales y de regresión integral.",
        imageInitial: "/images/e2eB.png",
        imageHover: "/images/e2eD.png",
        url: "https://github.com/JEJS-IA97/e2e-collective"
    },
    {
        id: 9,
        title: "Inflatio (Financial Tracker)",
        description: "Aplicación para el seguimiento de inflación y saldos multi-moneda desarrollada con React y Node.js.",
        imageInitial: "/images/InflatioB.png",
        imageHover: "/images/InflatioD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 10,
        title: "Prototypes & Designs",
        description: "Colección de prototipos interactivos y diseños UI/UX creados con Figma y Adobe Illustrator.",
        imageInitial: "/images/ProtoB.png",
        imageHover: "/images/ProtoD.png",
        url: "https://github.com/JEJS-IA97"
    },
    {
        id: 11,
        title: "In progress...",
        description: "¡Más proyectos emocionantes en camino! Mantente atento para ver las últimas adiciones a mi portafolio.",
        imageInitial: "/images/404D.png",
        imageHover: "/images/404D.png",
        url: "https://github.com/JEJS-IA97"
    }
];

const Portfolio = () => {
    return (
        <div className="relative w-full py-[80px] px-[20px] md:px-[60px] flex flex-col items-center bg-gradient-to-r from-[#00133B] to-[#00040D] overflow-hidden font-sans">

            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="w-full h-full z-0 absolute inset-0 object-cover opacity-30 pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
                
                <h1 className="text-[#efefef] text-[72px] text-opacity-80 leading-none font-bold text-center mb-16">
                    Projects<span className="text-[#45C7F8] text-opacity-50">.</span>
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full pb-16 custom-swiper"
                >
                    {projects.map((proj) => (
                        <SwiperSlide key={proj.id}>
                            <a 
                                href={proj.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="group block bg-[#142e48]/30 p-4 pb-12 rounded-sm shadow-2xl transform transition-transform duration-300 hover:rotate-2  h-[540px]"
                            >
                                <div className="relative aspect-square overflow-hidden bg-[#142e48] group-hover:bg-[#efefef] flex items-center justify-center rounded-sm border border-gray-300 group-hover:border-[#45C7F8] transition-colors duration-500 mb-6" >
                                    <img 
                                        src={proj.imageInitial} 
                                        alt={proj.title} 
                                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />
                                    <img 
                                        src={proj.imageHover} 
                                        alt={`${proj.title} Hover`} 
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                    />
                                </div>

                                <div className="px-2">
                                    <h3 className="text-[#efefef] text-xl font-bold mb-3">
                                        {proj.title}
                                    </h3>
                                    <p className="text-[#efefef]/80 text-sm leading-relaxed font-medium italic">
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