import Image from 'next/image'
import React from 'react'
import Profile from '../assets/pro.jpg'
import { Code, Layers, Layout, PlugZap, LineChart } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-6 text-slate-500" />,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites tailored to your business needs.",
  },
  {
    icon: <Layers className="w-8 h-6 text-slate-500" />,
    title: "Full-Stack Solutions",
    description:
      "Complete applications with React/Next.js, Node.js/Express, and MongoDB.",
  },
  {
    icon: <Layout className="w-8 h-6 text-slate-500" />,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect, interactive interfaces with accessibility and speed in mind.",
  },
  {
    icon: <PlugZap className="w-8 h-6 text-slate-500" />,
    title: "API Integration",
    description:
      "Connecting apps with payments, authentication, and cloud services.",
  },
  {
    icon: <LineChart className="w-8 h-6 text-slate-500" />,
    title: "Website Reviews & Optimization",
    description:
      "Boosting performance, usability, and conversions for your business site.",
  },
];

const page = () => {
  return (
    <main className='xl:px-30'>
        {/* Bio */}
        <section className='flex flex-col-reverse sm:flex-row px-10 py-14 md:justify-between md:gap-5 md:flex-row-reverse md:px-27'>
            
            {/* About content */}
            <div className='py-10'>
                

                <div className='flex gap-3 justify-between space-x-4'>
                  <div className='w-[65%]'>
                    <h1 className='text-[18px] font-bold font-sarina text-left md:text-[40px] lg:text-[60px] xl:text-[90px]'>Who I Am</h1>
                    
                  </div>
                  
                  <div className="flex-shrink-0 md:px-10 -mt-12 w-[45%] xl:w-[35%] xl:mt-2">
                      <Image 
                      src={Profile} 
                      alt="Denzel - Software Developer" 
                      width={200} 
                      className=" w-[90%] lg:w-[70%] xl:w-[70%] shadow-xl shadow-slate-600"
                      />
                  </div>
                </div>

                <h1 className="text-[29px] md:text-4xl font-semibold text-slate-100 md:relative lg:text-[55px] xl:text-[65px]">
                    I Craft Code that Powers <br className='hidden xl:flex'/> Businesses
                </h1>

                <p className="text-gray-200 leading-8 text-[15px] 2xl:mt-5  lg:text-lg xl:text-[20px] 2xl:text-[25px] py-2">
                I’m <span className="font-semibold text-[13px] 2xl:mt-5  lg:text-lg 2xl:text-[25px] xl:text-[20px]">Kasimu Kluivert (Denzel)</span> — a software developer passionate about 
                building digital products that are practical, reliable, and scalable. 
                I love transforming ideas into working solutions that help businesses 
                and people achieve more with less friction. <br/>For me, code isn’t just 
                about syntax, it’s about creating experiences that solve real problems.
                </p>

                {/* Experience */}
                <div>
                  <h1 className="text-[29px] py-10 md:text-4xl font-bold text-slate-100 font-sarina lg:text-[40px]">
                    Experience
                  </h1>
                  <p className="text-gray-200 leading-8 text-[15px] 2xl:mt-5  lg:text-lg 2xl:text-[25px] py-2 xl:text-[20px]">From freelance projects to agency work, I’ve built and optimized solutions across industries. My journey includes creating responsive landing pages, full-stack applications with React/Next.js, Node.js/Express, and MongoDB. Beyond writing code, I’ve learned how to communicate with clients, manage shifting requirements, and deliver under real-world constraints.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm md:text-base lg:text-lg leading-8 xl:text-[20px]">
                    <li>
                      <span className="font-semibold text-white">Web Design:</span> 4 years creating modern, user-friendly designs that balance aesthetics with usability.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Front-end Web Development:</span> 4 years building responsive, interactive, and accessible web interfaces.
                    </li>
                    <li>
                      <span className="font-semibold text-white">WordPress Development:</span> 3 years developing and customizing websites using WordPress.
                    </li>
                  </ul>

                </div>

                {/* Skills */}
                <div>
                  <h1 className="text-[29px] py-10 md:text-4xl font-bold text-slate-100 font-sarina lg:text-[40px]">
                    Skills
                  </h1>
                  <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm md:text-base lg:text-lg leading-8 xl:text-[20px]">
                    <li>
                      <span className="font-semibold text-white">Frontend:</span> React, Next.js, Tailwind CSS, Responsive Design, Wordpress
                    </li>
                    <li>
                      <span className="font-semibold text-white">Backend:</span> Node.js, Express, MongoDB, PostgreSQL, Prisma
                    </li>
                    <li>
                      <span className="font-semibold text-white">Dev Tools:</span> Git, GitHub, Vercel, Netlify, Postman
                    </li>
                    <li>
                      <span className="font-semibold text-white">Other:</span> API Integration, Payment Systems, Debugging & Optimization
                    </li>
                  </ul>
                </div>

                <a 
                href="https://drive.google.com/file/d/1qKWCq92tNt-qEMEAaA9nVB2S6WFKq8tX/view?usp=sharing" 
                className="inline-block px-5 py-2 mt-4 text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[25px] text-black font-semibold bg-slate-200 rounded-sm shadow hover:bg-slate-300 transition"
                >
                View CV
                </a>
            </div>
        </section>

        {/* Service */}
        <section className="py-16 bg-black-900 px-10 md:px-27">
            <div className="mx-auto ">
            {/* Title */}
                <h2 className="text-[18px] md:text-[22px] font-bold font-sarina text-left lg:text-[40px]">
                    What I Offer.
                </h2>
                <h1 className='text-gray-300 text-[14px] py-5 lg:text-lg 2xl:text-[25px] md:px-10 md:-ml-10 xl:text-[20px]'>Every business has unique challenges, and I focus on creating digital solutions that are both functional and impactful.</h1>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-black rounded-sm shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl text-slate-100 font-semibold mb-2 xl:text-[23px]">{service.title}</h3>
                        <p className="text-gray-300 text-sm text-[14px] 2xl:mt-5 md:text-[13px] lg:text-[15px] 2xl:text-[25px] xl:text-[20px]">{service.description}</p>
                    </div>
                    ))}
                </div>
                <a 
                href="#" 
                className="inline-block px-5 py-2 mt-4 text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[25px] text-black font-semibold bg-slate-200 mx-auto rounded-sm shadow hover:bg-slate-300 transition"
                >
                Contact Me
            </a>
            </div>
            
        </section>
        
    </main>
  )
}

export default page