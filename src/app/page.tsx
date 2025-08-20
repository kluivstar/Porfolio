import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col sm:flex-row">

        {/* Bio Intro */}
        <div className="px-3 py-30">
          <h1 className="">KASIMU KLUIVERT</h1>
          <h2 className="">Software Developer / AI Enthusiat / Wordpress Developer</h2>
          <h2 className="">Currently working as a software developer at Techcify</h2>
          
        </div>

        {/* Links */}
        <div className="text-left">
            <ul className="p-3 font-bold font-orbitron">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
        </div>
      </section>
    </main>
  );
}
