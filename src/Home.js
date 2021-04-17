import React from 'react'
import AboutSection from './AboutSection'
import BlogHome from './BlogHome';
import Footer from './Footer';

import "./Home.css"
import Random from './images/Random';
import NewIntro from './NewIntro';
import Project from './Project';
import ShortIntro from './ShortIntro';
import Shortportfolio from './Shortportfolio';




function Home() {
    return (
      <>
      <div className="home">
        <section>
          <NewIntro/>
        </section>
        {/*<section>
          <ShortIntro/>
        </section>*/}

        <section className="projectsection">
          <Project/>
      </section>
        <section>
          <Shortportfolio/>
        </section>
        <section>
          <BlogHome/>
        </section>
        <section className="footerclass">
          <Footer/>
        </section>
        
                {/*
        <section className="aboutabout">
          <AboutSection/>
        </section>*/}
      </div>
      </>
    );
}

export default Home
