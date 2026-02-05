import React from 'react';


export default function Hero() {
    return (
        <div className="bg-white relative w-full h-screen min-h-[700px] overflow-hidden font-sans flex flex-col justify-between">
            {/* Hero Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    alt="Dental Implants Background"
                    className="absolute h-full w-full object-cover object-center"
                    src="/assets/image_background.png"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[50.29%] to-[rgba(0,0,0,0.9)]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 w-full h-[93px] bg-transparent flex justify-center z-50 shrink-0 transition-colors duration-200">
                <div className="w-full max-w-[1512px] h-full px-6 md:px-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-[180px] h-[72px]">
                        <img
                            src="/assets/logo_birchwood.png"
                            alt="Birchwood Dental"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button className="bg-[#c59a51] w-[249.34px] h-[56.59px] relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                            <div className="text-white text-[22.4px] font-normal leading-none capitalize" style={{ fontFamily: "Roboto, sans-serif" }}>
                                Book an Appointment
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Content Overlay - Centered Content */}
            <div className="relative z-40 flex-1 flex flex-col items-center justify-end pb-12 px-4 w-full">
                <div className="bg-[rgba(255,255,255,0.9)] max-w-[1167px] w-full flex flex-col gap-[10px] items-start justify-center px-6 md:px-10 py-[33px] text-[#515151] font-sans mx-auto rounded-sm backdrop-blur-sm">
                    <div className="w-full text-left">
                        <h1 className="text-[28px] md:text-[48px] leading-tight md:leading-[56px]" style={{ fontFamily: "Lato, sans-serif" }}>
                            Restore your full smile with fixed teeth in 24 hours.
                        </h1>
                    </div>
                    <div className="w-full text-left">
                        <p className="text-[16px] md:text-[20px] leading-normal md:leading-[32px] whitespace-normal md:whitespace-nowrap" style={{ fontFamily: "Lato, sans-serif" }}>
                            Forget about removable dentures. Enjoy your favourite food from day one.
                        </p>
                    </div>
                    <div className="w-full text-left pt-4">
                        <button className="bg-[#c59a51] w-[249.34px] h-[56.59px] relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                            <div className="text-white text-[22.4px] font-normal leading-none capitalize" style={{ fontFamily: "Roboto, sans-serif" }}>
                                Book an Appointment
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer / Brands Section */}
            <div className="relative z-40 w-full flex justify-center pb-8 md:pb-[90px] px-6 md:px-16">
                <div className="w-full max-w-[1512px] flex flex-col items-center space-y-8">
                    <h3 className="text-white text-[25.7px] leading-[32.59px] text-center font-normal w-full" style={{ fontFamily: "Lato, sans-serif" }}>
                        Brands We Use At The Surgery
                    </h3>

                    <div className="w-full flex flex-wrap items-center justify-between gap-8 md:gap-0">
                        <div className="w-[150px] md:w-[200px] h-auto flex items-center justify-center overflow-hidden">
                            <img src="/assets/logo_strauman.png" alt="Straumann" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[100px] md:w-[150px] h-auto flex items-center justify-center overflow-hidden">
                            <img src="/assets/logo_osstem.png" alt="Osstem" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[150px] md:w-[200px] h-auto flex items-center justify-center overflow-hidden">
                            <img src="/assets/logo_invisalign.png" alt="Invisalign" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[150px] md:w-[200px] h-auto flex items-center justify-center overflow-hidden">
                            <img src="/assets/logo_denplan.png" alt="Denplan" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
