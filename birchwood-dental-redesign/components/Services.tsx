"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons (using the single extracted asset for now)
const iconSingleTooth = "/assets/icon_single_tooth.png";

const servicesData = [
    {
        id: 1,
        title: "Single tooth implant",
        description: "A single-tooth implant replaces a missing root without affecting the adjacent teeth. It is the most natural-looking and feeling replacement.",
        icon: iconSingleTooth,
    },
    {
        id: 2,
        title: "Multiple teeth implants",
        description: "Implants can support a bridge to replace multiple missing teeth, providing a secure and stable restoration that looks and feels natural.",
        icon: iconSingleTooth,
    },
    {
        id: 3,
        title: "Full arch implants",
        description: "Restore your entire upper or lower jaw with a full arch of fixed teeth. This life-changing treatment provides immediate function and aesthetics.",
        icon: iconSingleTooth,
    },
    {
        id: 4,
        title: "Zygomatic implants",
        description: "Specialized implants for patients with significant bone loss in the upper jaw, avoiding the need for complex bone grafting procedures.",
        icon: iconSingleTooth,
    },
    {
        id: 5,
        title: "Bone grafting",
        description: "Procedures to rebuild bone structure in preparation for dental implants, ensuring a solid foundation for your new teeth.",
        icon: iconSingleTooth,
    },
    {
        id: 6,
        title: "Sedation dentistry",
        description: "Relaxing sedation options to ensure your comfort and peace of mind during any dental implant procedure.",
        icon: iconSingleTooth,
    },
];

export default function Services() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // We need to handle responsive styles. 
    // For simplicity and to avoid hydration issues, we'll rely on CSS/Tailwind for mobile reset
    // and Framer Motion for desktop interactions.

    return (
        <section className="w-full bg-white py-20 px-4 md:px-0" id="services">
            <div className="max-w-[1512px] mx-auto flex flex-col items-center">
                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-[40px] md:text-[56px] leading-tight text-[#c59a51] font-sans" style={{ fontFamily: "Lato, sans-serif" }}>
                        Dental Implants
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-[30px] md:gap-x-[50px] md:gap-y-[50px] w-full px-6 md:px-16">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isHovered={hoveredId === service.id}
                            onHover={() => setHoveredId(service.id)}
                            onLeave={() => setHoveredId(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
    isHovered,
    onHover,
    onLeave,
}: {
    service: typeof servicesData[0];
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            layout
            onMouseEnter={!isMobile ? onHover : undefined}
            onMouseLeave={!isMobile ? onLeave : undefined}
            className={`bg-[#eeeae3] overflow-hidden cursor-pointer relative rounded-none flex-shrink-0 flex items-center
        ${!isMobile ? "flex-row" : "flex-col w-full p-[25px] gap-[17px]"}
      `}
            // Desktop Animation
            animate={!isMobile ? {
                width: isHovered ? 600 : 348, // Increase max width to accommodate side-by-side
                height: 198, // Fixed height avoids vertical jumps
                padding: isHovered ? "25px 40px" : "25px 87px",
                gap: isHovered ? 40 : 17,
                alignItems: "center",
            } : {
                // Mobile State (Static override)
                width: "100%",
                height: "auto",
                padding: "25px",
                gap: 17,
                alignItems: "center"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Icon + Title Container */}
            <motion.div
                layout="position"
                className={`flex flex-col items-center gap-[17px] shrink-0 ${!isMobile ? "w-[175px]" : "w-full"
                    }`}
            >
                {/* Icon */}
                <div className="relative w-[88px] h-[88px] rounded-[15px] overflow-hidden flex-shrink-0">
                    <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title */}
                <div className="w-full flex justify-center text-center">
                    <h3
                        className="font-normal text-[20px] leading-[25px] text-[#080808]"
                        style={{ fontFamily: "Lato, sans-serif" }}
                    >
                        {service.title}
                    </h3>
                </div>
            </motion.div>

            {/* Description Content */}
            <div className={`text-[14px] leading-[25px] text-black font-sans ${isMobile ? 'w-full block' : 'flex-1'}`}>
                <AnimatePresence mode="wait">
                    {(isMobile || isHovered) && (
                        <motion.div
                            initial={!isMobile ? { opacity: 0, width: 0 } : { opacity: 1, height: "auto" }}
                            animate={!isMobile ? { opacity: 1, width: "auto" } : { opacity: 1, height: "auto" }}
                            exit={!isMobile ? { opacity: 0, width: 0 } : undefined}
                            className={!isMobile ? "h-full flex items-center overflow-hidden" : "w-full"}
                        >
                            <div className={`text-base ${!isMobile ? "text-left min-w-[200px]" : "pt-2 text-center"}`}>
                                {service.description}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
