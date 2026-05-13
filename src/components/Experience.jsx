import Background from "../assets/images/Background-01.jpg"

const experiences = [
    {
        id: 1,
        role: "QA Automation Engineer",
        company: "Chicks Gold Inc.",
        date: "Feb 2025 — Abr 2026",
        description: "Engineered and maintained critical cross-project E2E architectures spanning AdminPanel and Frontend platforms. Validated transaction integrity for digital items and ensured 100% data consistency, while developing comprehensive Cypress component tests and monitoring CI/CD pipelines.",
        tech: ["Cypress", "JavaScript", "TypeScript", "Playwright", "Automation"]
    },
    {
        id: 2,
        role: "QA Tester",
        company: "Chicks Gold Inc.",
        date: "Jul 2024 — Mar 2025",
        description: "Established the foundational test cases and defect documentation that enabled the transition to E2E automation. Executed functional, regression, and smoke testing across 5 distinct production platforms while managing the defect lifecycle via Azure DevOps.",
        tech: ["Manual Testing", "Bug Tracking", "API Testing", "Azure"]
    },
    {
        id: 3,
        role: "Marketing & Ops Coordinator",
        company: "Mayor JV CA",
        date: "Feb 2025 — Ago 2025",
        description: "Coordinated internal operations and developed marketing strategies to optimize business processes. Managed team workflows and aligned promotional campaigns with operational goals.",
        tech: ["Management", "Strategy"]
    },
    {
        id: 4,
        role: "Graphic Designer",
        company: "MM Publicidad C.A.",
        date: "Ene 2021 — Abr 2024",
        description: "Designed responsive user interfaces and visual branding materials, bridging the gap between technical requirements and user-centric design principles. Maintained UI/UX consistency across multiple digital assets.",
        tech: ["CorelDRAW", "Adobe Illustrator", "Adobe Photoshop", "Figma", "UI/UX"]
    },
    {
        id: 5,
        role: "Community Manager",
        company: "The Costa Rica News",
        date: "Abr 2019 — Jul 2019",
        description: "Managed digital presence, curated content, and actively engaged with online communities to foster brand loyalty and improve user communication.",
        tech: ["Social Media", "Communication"]
    }
];

const Experience = () => {
    return (
        <div className="relative w-full py-[60px] px-[120px] flex flex-col items-center bg-gradient-to-r from-[#00133B] to-[#00040D] overflow-hidden">

            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="w-full h-full z-0 absolute inset-0 object-cover opacity-30 pointer-events-none"
            />

            <div className="mx-auto flex flex-col max-w-[1200px]">

                <h1 className="relative z-10 text-[#efefef] text-[72px] text-opacity-80 leading-none font-bold text-center mb-16">
                    Experience<span className="text-[#45C7F8] text-opacity-50">.</span>
                </h1>

                {experiences.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-23 mb-10 z-10 relative">

                        <div className="flex flex-col">
                            <h3 className="text-3xl font-bold tracking-tight text-[#45C7F8]/80 mb-2">
                                {exp.role}
                                <span className="text-[#efefef]/80">.</span>
                            </h3>

                            <p className="text-gray-400 text-lg font-medium tracking-wide">
                                {exp.company} <span className="opacity-40 px-2">|</span> {exp.date}
                            </p>
                        </div>

                        <p className="text-gray-300 text-lg font-normal leading-relaxed mt-3 mb-4">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            {exp.tech.map((techItem) => (
                                <span 
                                    key={techItem}
                                    className="bg-[#45C7F8]/50 text-[#efefef] px-4 py-2 rounded-lg text-sm font-bold font-mono transition-colors duration-300 cursor-default hover:bg-[#45C7F8]/70"
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