'use client'
import About from "./_components/About"
import TechStack from "./_components/TechStack"
import Projects from "./_components/Projects"
import Contact from "./_components/Contact"
const page = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <main id="home" className="py-12 md:py-20 px-4">
        <header>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Patrick Allen Casili</h1>
            <p className="text-lg sm:text-xl md:text-2xl mt-2"> Aspiring Web Developer </p>
            <div className="flex justify-center items-center flex-col mt-4 max-w-2xl">
              <p className="text-base sm:text-lg"> I'm an Aspiring Web developer from Cavite </p>
              <p className="text-sm sm:text-base"> passionate about building web applications and creating solutions.</p>
            </div>
          </div>
        </header>
      </main>

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-12 border-t border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 px-4">Project/s</h2>
        <Projects />
      </section>

      {/*Tech Stack Section */}
      <section className="py-8 md:py-12">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 px-4"> Technologies </h2>
        <TechStack />
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-12">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 px-4"> About Me </h2>
        <About />
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 px-4"> Contact </h2>
        <Contact />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 md:py-8 mt-8 md:mt-12 px-4">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Patrick Allen Casili. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default page
