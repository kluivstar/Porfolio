import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col sm:flex-row">

        {/* Bio Intro */}
        <div className="px-10 py-30 leading-8">
          <h1 className="text-[14px]">KASIMU KLUIVERT</h1>
          <span className="text-[13px]">Software Developer / AI Enthusiat / Wordpress Developer</span>
          <h2 className="text-[13px]">Currently working as a software developer at{" "}
            <a
              href="https://techcify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 group font-bold"
            >
              Techcify
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a></h2>
          
        </div>

        {/* Links */}
        <div className="text-left">
            <ul className="px-10 text-[80px] font-bold font-sarina ">
              {["About", "Work", "Contact"].map((item) => (
                <li
                key={item}
                className="relative inline-block cursor-pointer 
                           transition-transform duration-300 ease-out 
                           hover:-translate-y-1 group"
              >
                {item}

                {/* underline effect */}
                <span
                  className="absolute left-0 -bottom-1 h-[3px] bg-white w-0 transition-all duration-300 ease-out group-hover:w-full"
                />
              </li>
              ))}
              
            </ul>
        </div>
      </section>
    </main>
  );
}
