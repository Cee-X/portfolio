
const project = [
  {
    id: 1,
    title: "Room Rental Website",
    github: "https://github.com/Cee-X/Room-Rental-Frontend",
    description: "FullStack project that I made for university students to rent rooms easily and quickly without any hassle.",
    techStack: ["Next.js", "TailwindCSS", "Node.js", "Express.js","Typescript","MongoDB", "GCP Storage", "Shadcn UI"],
  },
  {
    id: 2,
    title: "Application Submission Web App",
    github: "https://github.com/Cee-X/-application-management-system-backend",
    description: "Small project that I made for aplicants to submit their application easily and get the email notification when they submit.",
    techStack: ["Next.js", "TailwindCSS", "Node.js", "Express.js","Typescript","MongoDB", "GCP Storage"],
  },
  { 
    id: 3,
    title: "Note App",
    github: "https://github.com/Cee-X/Note",
    description : "Note app that I made through my learning process to understand the basic concept of React.js and Firebase.",
    techStack: ["React.js", "Firebase", "Material UI", "CSS"],
  },
  {
    id: 4,
    title: "Tenzies",
    github: "https://github.com/Cee-X/Tenzies",
    description: "A simple game that I made for fun and to learn the basic concept of React.js.",
    techStack: ["React.js","Javascript", "CSS"],
  }

];

export default function Project() {
  return (
    <section id="project" className="md:py-20 py-10 max-w-4xl mx-auto text-left flex flex-col md:flex-row md:gap-16 px-10">
      <h2 className="md:text-xl lg:text-2xl text-lg w-32  font-semibold mb-8">Projects</h2>
      <div className="space-y-10 md:pl-0 pl-10">
        {project.map((project, index) => (
          <div key={index} className="flex flex-col gap-3">
             <a 
                    href={project.github} 
                    target="_blank"
                    className="md:text-base lg:text-lg text-sm font-semibold group w-fit">
                        {project.title}
                        <span className=" ml-2 text-blue-400 hover:text-blue-600 text-2xl inline-block align-middle transition ease-in-out delay-150 group-hover:translate-x-3 duration-300" >
                            →
                        </span>
                    </a>
            <p className="md:text-sm lg:text-base text-xs font-normal">{project.description}</p>
            <div className="flex gap-3 flex-wrap">
              {project.techStack.map((tech, index) => (
                <p key={index} className=" border rounded-md border-blue-800 p-1 font-light md:text-sm text-xs">{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}