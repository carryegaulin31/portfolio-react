import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello and welcome! I'm Carrye.
                <br className="hidden lg:inline-block" /> I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
               Let me start off by introducing myself. My name is Carrye Gaulin and I am originally from Bangor, Maine. Don't let that fool you! I have ventured to farther off places. I have spent time living in various locations which include The U.S. Virgin Islands, the Florida Keys and the beaches of North Carolina. I absolutely love traveling to new places on exciting adventures. I love the sun, sand and absolutly any kind of fishing. Sounds nothing like sitting in front of a computer and creating does it? I have been interested in computers and what they can do since the first time I used one. Out of highschool I worked very hard to get into a computer science program at the University of Maine in Orono. Circumstances beyond my control abruptly removed me from that path. Full circle 20+ years later I have returned, this time however, with an extremely successful knack for sales coupled with the same passion for the pursuit of knowledge in the computer science field. The road is challenging but what fun is life without a good challenge right?
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./meReal.png"
              />
            </div>
          </div>
        </section>
      );
}