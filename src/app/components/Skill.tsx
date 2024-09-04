
const languages = [
    {
        name: 'HTML',
        level: '100%'
    },
    {
        name: 'CSS',
        level: '100%'
    },
    {
        name: 'JavaScript',
        level: '100%'
    },
    {
        name: 'TypeScript',
        level: '80%'
    }
];

const frameworks = [
    {
        name: 'React.js',
        level: '90%'
    },
    {
        name: 'Next.js',
        level: '90%'
    },
    {
        name: 'Node.js',
        level: '80%'
    },
    {
        name: 'Express.js',
        level: '80%'
    }
];

const tools = [
    {
        name: 'Git',
        level: '90%'
    },
    {
        name: 'VS Code',
        level: '100%'
    },
    {
        name: 'Figma',
        level: '60%'
    },
    {
        name: 'Photoshop',
        level: '50%'
    }
];

const designs = [
    {
        name: 'Responsive Design',
        level: '100%'
    },
    {
        name: 'UI/UX',
        level: '70%'
    },
    {
        name: 'Wireframing',
        level: '70%'
    },
    {
        name: 'Prototyping',
        level: '60%'
    }
];


export default function Skill() {
    return (
        <section id="skills" className="md:py-20 py-10 max-w-4xl mx-auto text-left flex flex-col md:flex-row md:gap-16  px-10 ">
            <h2 className="text-lg md:text-xl lg:text-2xl  w-32  md:text-right text-left font-semibold mb-8">Skills</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-10 justify-between w-full md:pl-0 pl-10">
                <div className="flex flex-col gap-2">
                    <h3 className="md:text-base lg:text-lg text-sm font-semibold mb-2">Languages</h3>
                    {languages.map((language, index) => (
                        <div key={index} className="flex flex-row gap-3 md:text-base text-sm">
                            <p>{language.name}</p>
                            <p>{language.level}</p>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col gap-2">
                    <h3 className="md:text-base lg:text-lg text-sm font-semibold mb-2">Frameworks</h3>
                    {frameworks.map((framework, index) => (
                        <div key={index} className="flex flex-row gap-3 md:text-base text-sm">
                            <p >{framework.name}</p>
                            <p>{framework.level}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-2 md:text-md sm:text-sm">
                    <h3 className="md:text-base lg:text-lg text-sm font-semibold mb-2">Tools</h3>
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-row gap-3 md:text-base text-sm">
                            <p >{tool.name}</p>
                            <p>{tool.level}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-2 md:text-md sm:text-sm">
                    <h3 className="md:text-base lg:text-lg text-sm font-semibold mb-2">Designs</h3>
                    {designs.map((design, index) => (
                        <div key={index} className="flex flex-row gap-3 md:text-base  text-sm">
                            <p>{design.name}</p>
                            <p>{design.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

