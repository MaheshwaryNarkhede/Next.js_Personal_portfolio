import React from 'react';
import Image from "next/image";
import bg from "../../../../public/background/back4.jpg";
import ProjectList from "../../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../../components/RenderModel";
import Pikachu from "../../../components/models/Pikachu";

// import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
// import dynamic from "next/dynamic";
// import dynamic from "next/dynamic";
// const Ashs = dynamic(() => import("../components/models/Ash"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
    <Image
      src={bg}
      alt="Next.js Portfolio website's about page background image"
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      priority
      sizes="100vw"
    />

    <ProjectList projects={projectsData} /> 

    <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
   
         <RenderModel>
          <Pikachu/>
         </RenderModel>
    </div>
  </>
  
  );
}