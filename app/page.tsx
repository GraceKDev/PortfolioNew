import Banner from "./components/globals/banner/Banner";
import GridContainer from "./components/globals/gridcontainer/GridContainer";
import Navbar from "./components/globals/navbar/Navbar";
import AboutMe from "./components/home/AboutMe";
import HomeSectionContainer from "./components/home/HomeSectionContainer";
import PicnicHero from "./components/home/PicnicHero";
import ProfesionalExperience from "./components/home/ProfessionalExperience";
import RecentCommits from "./components/home/RecentCommits";
import Tools from "./components/home/Tools";
import strings from "./res/strings"
export default function Home() {
  return (
    <main className="min-h-screen bg-beige-200">

      <section className="mx-auto w-full max-w-6xl min-h-[98vh] border-dashed border-x-beige-400 border-x-2 bg-beige-50">
        <Navbar />
        <Banner />
        <PicnicHero />
        <HomeSectionContainer>
          <GridContainer >
            <AboutMe />
            <RecentCommits />
          </GridContainer>
        </HomeSectionContainer>
         <HomeSectionContainer>
          <GridContainer gridCol="one" >
            <ProfesionalExperience/>
            
          </GridContainer>
        </HomeSectionContainer>
          <HomeSectionContainer>
          <GridContainer gridCol="one" >
            <Tools/>
            
          </GridContainer>
        </HomeSectionContainer>
        
      </section>
    </main>
  );
}
