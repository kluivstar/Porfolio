import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col sm:flex-row">

        {/* Bio Intro */}
        <div>
          <h1 className="font-orbitron">KASIMU KLUIVERT</h1>
          <h2>Software Developer / AI Enthusiat / Wordpress Developer</h2>
          <h2></h2>
          <link rel="stylesheet" href="#" /> Currently working as a software developer at Techcify
        </div>

        {/* Links */}
        <div>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
        </div>
      </section>
    </main>
  );
}
