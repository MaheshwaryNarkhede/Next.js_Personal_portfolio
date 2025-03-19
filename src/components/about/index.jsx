import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        
        {/* About Section */}
        <ItemLayout 
          className={"col-span-full lg:col-span-12 row-span-2 flex-col items-start bg-yellow-200 p-6 rounded-lg shadow-md"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-yellow-500">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base mt-4">
            Welcome to my world of web development! Much like a Pokémon Trainer on an adventure, 
            I’m constantly learning, evolving, and mastering new skills. My expertise spans across 
            modern front-end and back-end development technologies. With React.js and Next.js as my 
            starter Pokémon, I craft dynamic, fast, and powerful web portals. Every project is a new 
            adventure where I strive to "catch 'em all" — innovative solutions, new skills, and creative designs.
          </p>
        </ItemLayout>

       

        {/* Skills Section */}
        <ItemLayout 
          className={"col-span-full lg:col-span-12 row-span-2 flex-col items-start bg-blue-200 p-6 rounded-lg shadow-md"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-blue-600">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className=" flex-col items-start  p-6 rounded-lg shadow-md">
              <h3 className="font-semibold">Technical Skills</h3>
              <ul className="pl-4 list-disc mt-2">
                <li>Programming: C++, Python, SQL, JavaScript, Node.js</li>
                <li>Data Analysis: Pandas, Numpy, Scikit-Learn, Matplotlib, Power BI, Excel</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Web Development: HTML, CSS, JavaScript, Express.js</li>
                <li>Tools: Visual Studio Code, IntelliJ IDEA, Jupyter Notebook</li>
              </ul>
            </div>
            <div className=" p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Analytical & Business Skills</h3>
              <ul className="pl-4 list-disc mt-2">
                <li>Requirement Gathering & Documentation</li>
                <li>Data Visualization & Reporting</li>
                <li>Problem-Solving & Critical Thinking</li>
                <li>UI/UX Design Principles</li>
              </ul>
              <h3 className="font-semibold mt-4">Soft Skills</h3>
              <ul className="pl-4 list-disc mt-2">
                <li>Communication & Public Speaking</li>
                <li>Team Leadership & Management</li>
              </ul>
            </div>
          </div>
        </ItemLayout>


        {/* Experience Section */}
        <ItemLayout 
          className={"col-span-full lg:col-span-6 row-span-2 flex-col items-start bg-yellow-200 p-6 rounded-lg shadow-md"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-yellow-500">
            Experience
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="font-semibold text-sm md:text-base text-left text-red-600">Google Developer Student Club (GDSC) - Android Development Lead</h3>
              <p className="font-light text-xs sm:text-sm md:text-base mt-1">
                Spearheading Android development initiatives, collaborating with team members, and building impactful applications as the lead. 
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-sm md:text-base text-left text-red-600">Rotaract Club of RSCOE - Joint Secretary</h3>
              <p className="font-light text-xs sm:text-sm md:text-base mt-1">
                Coordinated events, managed operations, and led efforts to support social impact initiatives in the community. 
              </p>
            </li>
          
          </ul>
        </ItemLayout>

        {/* certificates */}
        <ItemLayout 
          className={"col-span-full lg:col-span-6 row-span-2 flex-col items-start bg-yellow-200 p-6 rounded-lg shadow-md"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-yellow-500">
            Certificates
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="font-semibold text-sm md:text-base text-left text-red-600">Google Developer Student Club (GDSC) - Android Development Lead</h3>
              <p className="font-light text-xs sm:text-sm md:text-base mt-1">
                Spearheading Android development initiatives, collaborating with team members, and building impactful applications as the lead. 
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-sm md:text-base text-left text-red-600">Rotaract Club of RSCOE - Joint Secretary</h3>
              <p className="font-light text-xs sm:text-sm md:text-base mt-1">
                Coordinated events, managed operations, and led efforts to support social impact initiatives in the community. 
              </p>
            </li>
          
          </ul>
        </ItemLayout>
        {/* Education section */}
        <ItemLayout 
          className={"col-span-full lg:col-span-4 row-span-2 flex-col items-start bg-green-200 p-6 rounded-lg shadow-md"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-green-600">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">JSPM’s Rajarshi Shahu College of Engineering, Tathawade</h3>
            <p>Bachelor of Technology (BTech) in Information Technology</p>
            <p>Expected Graduation: June 2026</p>
            <p>Cumulative GPA: 9.32</p>
          </div>
        </ItemLayout>
      </div> 
    </section>
  );
};

export default AboutDetails;
