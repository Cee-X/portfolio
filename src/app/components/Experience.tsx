
const experiences = [
    {
        title: 'Peer Mentor',
        company: 'Rangsit University',
        date: 'Jan 2023 - Apr 2023',
        description: 'Mentored a group of Thai students in english.',
    },
    {
        title: 'Tech Seminar Host',
        company: 'Rangsit University',
        date: 'May 2023 - Jul 2023',
        description: 'Hosted a seminar with my team on surviving in the tech industry.',
    },
    {
        title: 'Volunteer Frontend Developer',
        company: 'Rangsit University',
        date: 'Jan 2024 - Mar 2024',
        description: 'Developed a website for university language center.',
    },
    {
        title: 'Hackathon Participant',
        company: 'Rangsit University',
        date: 'Apr 2024 - May 2024',
        description: 'Participated in a hackathon and developed a web app.',
    }
    ];

export default function Experience() {
    return (
        <section id="experience" className="md:py-20 py-10 max-w-4xl mx-auto text-left flex flex-col md:flex-row md:gap-16 px-10 ">
            <h2 className="md:text-xl lg:text-2xl text-lg w-32  font-semibold mb-8 ">Experience</h2>
            <div className="flex flex-col gap-6 w-full md:pl-0 pl-10">
                {experiences.map((experience, index) => (
                    <div key={index} className="flex justify-between w-full">
                        <div className="space-y-1">
                            <h3 className="md:text-base lg:text-lg text-sm font-semibold">{experience.title}</h3>
                            <p className=" text-xs md:text-sm lg:text-base">{experience.company}</p>
                            <p className=" text-xs md:text-sm lg:text-base">{experience.description}</p>
                        </div>
                       <p className=" font-light text-xs md:text-sm lg:text-base">{experience.date}</p>
                    </div>
                ))}
                    <a 
                    href="https://drive.google.com/file/d/1g8KHbnIYSJRjgJvsl70dKsBklFLKXj_S/view?usp=sharing" 
                    target="_blank"
                    className="md:text-base lg:text-lg text-sm font-semibold  group mt-20 ">
                        View Resume 
                        <span className=" ml-2 text-blue-400 hover:text-blue-600 text-2xl inline-block align-middle transition ease-in-out delay-150 group-hover:translate-x-3 duration-300" >
                            →
                        </span>
                    </a>
                
            </div>
        </section>
    )
}