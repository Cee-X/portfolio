export default function ContactSection() {
    return (
      <section id="contact" className="md:p-20 p-10 flex flex-col justify-center sm:flex-row sm:justify-between items-center">
        <h1 className="text-wrap sm:w-48 text-sm md:text-base lg:text-lg font-semibold">
          Design and Developed by 
          Kyaw Thet Htwe 
        </h1>
        <div className="flex gap-8 mt-4">
          <a 
          href="mailto:kyawthethtwe595@gmail.com" 
          target="_blank"
          className="group w-fit md:text-base sm:text-sm  text-xs">
            Email
          </a>
          <a 
          href="https://github.com/Cee-X"
          target="_blank"
          className="group w-fit md:text-base sm:text-sm text-xs">
            Github
          </a>
          <a 
          href="https://www.facebook.com/kyawthethtwe22"
          target="_blank"
          className=" group w-fit md:text-base sm:text-sm text-xs"
           >
            Facebook
          </a>
          <a 
          href="https://www.instagram.com/kyaw.thet.htwe/"
          target="_blank"
          className="group w-fit md:text-base sm:text-sm text-xs"
            >
              Instagram
          </a>
          <a 
          href="https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/"
          target="_blank"
          className="group w-fit md:text-base sm:text-sm text-xs">
            LinkedIn
          </a>
        </div>
      </section>
    );
  }
