import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025",
            title: "Web and mobile Developer Intern",
            company: "https://www.cyber-village.net/",
            type: "Internship",
            description: "Created a cross-platform interface that synchronises online and mobile UI/UX, assuring a consistent and seamless user experience across every platform.\nDeveloped a dynamic file-handling feature that allows users to upload and preview documents before submission, increasing form accuracy and user completion rates.\nCreated a task-scheduling engine that enables users to schedule, reschedule, and cancel tasks, increasing user liberty and task management efficiency.\nConducted complete SIT testing and debugging with SOAP UI and Android Emulators to identify problems while maintaining high system reliability and security standards.\nSuccessfully completed 80% of project requirements within the Agile timeline by streamlining front-end and back-end integration, resulting in faster delivery."
        },
        // {
        //     year: "2019",
        //     title: "Senior UX Designer",
        //     company: "www.googly.com",
        //     type: "Remote",
        //     description: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        // },
        // {
        //     year: "2020-2022",
        //     title: "Team Lead Designer",
        //     company: "www.company.com",
        //     type: "Fulltime",
        //     description: "Handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated"
        // },
        // {
        //     year: "2023+",
        //     title: "Team Lead Designer",
        //     company: "www.latest.com",
        //     type: "Fulltime",
        //     description: "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software"
        // }
    ];

    const renderDescription = (text: string) => {
        if (!text) return null;
        const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
        return (
            <ul className="list-disc pl-5 space-y-2 text-justify">
                {lines.map((line, index) => (
                    <li key={index} className="leading-relaxed text-base text-justify">
                        {line}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2> Working Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    {renderDescription(exp.description)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;