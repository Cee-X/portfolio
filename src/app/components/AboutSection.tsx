export default function AboutSection() {
    return (
      <section id="about" className="md:py-20 py-10 max-w-4xl mx-auto text-left flex flex-col md:flex-row md:gap-16 px-10">
        <h2 className="md:text-xl lg:text-2xl text-lg w-32 font-semibold mb-8">Background</h2>
        <div className="md:pl-0 pl-10 ">
          <p className="md:text-base lg:text-lg text-sm leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-wide">I am from <span>Myanmar</span>. I am fourth year student and currently studying my last semester in Information and communication technology at <span>Rangsit University</span>.
          I want to pursue a career in <span >Software Development</span>.I love the feeling of solving a problem and seeing the result of my work.
          I am a fullstack developer and I have experience in building web applications using <span>React.js, Next.js, Tailwind CSS, Node.js</span> and <span> Express.js</span>. I am also familiar with <span>MongoDB</span> and <span>PostgreSQL</span>. 
          </p>
        </div>
      </section>
    );
}
