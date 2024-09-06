import React from "react";
import ItemLayout from "./ItemLayout";
//import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
      <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
  <h2 className="text-xl md:text-3xl text-left w-full capitalize">
    Craftsman of Digital Elegance and AI Innovation
  </h2>
  <p className="font-light text-xs sm:text-sm md:text-base text-justify">
    My journey in web development is fueled by a collection of powerful tools and languages, with JavaScript forming the foundation of my creations. I skillfully utilize frameworks like React.js and Next.js, crafting seamless portals (websites) that connect users across the digital realm. The principles of the Jamstack enable me to build fast, secure, and dynamic experiences, while my Design skills ensure that each creation is both functional and visually stunning. Additionally, my passion for Machine Learning and Data Science drives me to explore AI/ML technologies, enhancing my Web projects with intelligent features. Join me as I continue to discover new technologies and techniques to shape the future of the web.
  </p>
</ItemLayout>


        <ItemLayout
  className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
>
  <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
    <a
      href="https://leetcode.com/u/Oggieapm/"
      className="text-accent hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      1653+{" "}
      <sub className="font-semibold text-base">Leetcode Rating</sub>
    </a>
  </p>
</ItemLayout>


<ItemLayout
  className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
>
  <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
    <a
      href="https://codeforces.com/profile/apmoggie01"
      className="text-accent hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      918+{" "}
      <sub className="font-semibold text-base">CodeForces Rating</sub>
    </a>
  </p>
</ItemLayout>


        <ItemLayout className={"col-span-4 !p-0"}>
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=apm-oggie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
        alt="Aditya" loading="lazy" />
        
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=apm-oggie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
        alt="Aditya" loading="lazy" />
        
        </ItemLayout>  
        <ItemLayout className={"col-span-full "}>
        <img className="w-full h-auto" src="https://skillicons.dev/icons?i=ai,aws,bootstrap,codepen,css,django,docker,express,figma,flask,flutter,firebase,git,github,gcp,html,idea,javascript,jquery,linkedin,materialui,mongodb,mysql,nextjs,nodejs,npm,php,postman,pycharm,python,pytorch,redhat,react,redux,sass,scikitlearn,tensorflow,tailwindcss,vercel,wasm"
        alt="Aditya" loading="lazy" />
        
        </ItemLayout>


        <ItemLayout className={"col-span-6 !p-0"}>
        <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=apm-oggie&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" /></a>
        
        </ItemLayout> 

        <ItemLayout className="col-span-6 !p-0">
  <img
    className="w-full h-auto"
    src="https://github-readme-stats.vercel.app/api/pin/?username=apm-oggie&repo=Magma-Website-Using-Canvas-Features&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
    alt="Aditya"
    loading="lazy"
    style={{ display: 'block', margin: '0 auto' }} // Center the image
  />
</ItemLayout>

        
      </div>
    </section>
  );
};

export default AboutDetails;