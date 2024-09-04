
export default function HeroSection() {
    return (
      <section className="h-[60vh] sm:h-screen  flex flex-col justify-center sm:gap-16 gap-10 md:gap-20 md:px-20 px-10 ">
        <p className="md:text-3xl lg:text-4xl sm:text-3xl text-2xl ">Hello,👋 </p>
        <p className=" antialiased font-light md:text-3xl lg:text-4xl  sm:text-2xl text-xl tracking-tight leading-normal md:leading-relaxed lg:leading-relaxed max-w-2xl  mb-10">
        I&apos;m <span>Kyaw Thet Htwe</span>.As a full-stack developer, I bring ideas to life by mastering both the front and back ends, creating seamless and efficient digital experiences from concept to completion. 
        </p>
        <a href="mailto:kyawthethtwe595@gmail.com" className="md:text-xl text-md font-semibold">Get in touch - <span className="underline font-normal decoration-blue-400 underline-offset-8 hover:no-underline hover:py-1 hover:rounded-sm  hover:bg-blue-500 hover:text-white ">kyawthethtwe595@gmail.com</span></a>
      </section>
    );
  }
