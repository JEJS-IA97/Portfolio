import Background from "../assets/images/Background-01.jpg"

const experiences = [
    {
        id: 1,
        role: "QA Automation Engineer",
        company: "Chicks Gold Inc.",
        date: "Feb 2025 - Abr 2026",
        description: "Engineered and maintained critical cross-project E2E architectures spanning AdminPanel and Frontend platforms. Validated transaction integrity for digital items and ensured 100% data consistency, while developing comprehensive Cypress component tests and monitoring CI/CD pipelines.",
        tech: ["Cypress", "JavaScript", "TypeScript", "Playwright", "Automation"]
    },
    {
        id: 2,
        role: "QA Tester",
        company: "Chicks Gold Inc.",
        date: "Jul 2024 - Mar 2025",
        description: "Established the foundational test cases and defect documentation that enabled the transition to E2E automation. Executed functional, regression, and smoke testing across 5 distinct production platforms while managing the defect lifecycle via Azure DevOps.",
        tech: ["Manual Testing", "Bug Tracking", "API Testing", "Azure"]
    },
    {
        id: 3,
        role: "Marketing & Ops Coordinator",
        company: "Mayor JV CA",
        date: "Feb 2025 - Ago 2025",
        description: "Coordinated internal operations and developed marketing strategies to optimize business processes. Managed team workflows and aligned promotional campaigns with operational goals.",
        tech: ["Management", "Strategy"]
    },
    {
        id: 4,
        role: "Graphic Designer",
        company: "MM Publicidad C.A.",
        date: "Ene 2021 - Abr 2024",
        description: "Designed responsive user interfaces and visual branding materials, bridging the gap between technical requirements and user-centric design principles. Maintained UI/UX consistency across multiple digital assets.",
        tech: ["CorelDRAW", "Adobe Illustrator", "Adobe Photoshop", "Figma", "UI/UX"]
    },
    {
        id: 5,
        role: "Community Manager",
        company: "The Costa Rica News",
        date: "Abr 2019 - Jul 2019",
        description: "Managed digital presence, curated content, and actively engaged with online communities to foster brand loyalty and improve user communication.",
        tech: ["Social Media", "Communication"]
    }
];

const Experience = () => {
    return (
        <div className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-r from-[#00133B] to-[#00040D] px-4 py-16 mob:px-6 tab:px-8 lap:px-12 desk2:px-20 desk3:px-24">

            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 pointer-events-none"
            />

            <div className="mx-auto flex w-full max-w-[1500px] flex-col">

                <h1 className="relative z-10 mb-12 text-center text-[44px] font-bold leading-none text-[#efefef] text-opacity-80 mob:text-[52px] tab:mb-14 tab:text-[60px] lap:mb-16 lap:text-[72px] desk3:text-[84px]">
                    Experience<span className="text-[#45C7F8]/70">.</span>
                </h1>

                {experiences.map((exp) => (
                    <div key={exp.id} className="relative z-10 mb-10 flex flex-col">

                        <div className="flex flex-col">
                            <h3 className="mb-2 text-[28px] font-bold tracking-tight text-[#45C7F8]/70 mob:text-[30px] lap:text-3xl">
                                {exp.role}
                                <span className="text-[#efefef]/80">.</span>
                            </h3>

                            <p className="text-base font-medium tracking-wide text-gray-400 lap:text-lg">
                                {exp.company} <span className="px-2 opacity-40">|</span> {exp.date}
                            </p>
                        </div>

                        <p className="mb-4 mt-3 text-base font-normal leading-relaxed text-gray-300 tab:text-[17px] lap:text-lg text-justify">
                            {exp.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-3 lap:gap-4">
                            {exp.tech.map((techItem) => (
                                <span 
                                    key={techItem}
                                    className="cursor-default rounded-lg bg-[#45C7F8]/50 px-4 py-2 font-mono text-xs font-bold text-[#efefef] transition-colors duration-300 hover:bg-[#45C7F8]/70 mob:text-sm"
                                >
                                    {techItem}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
