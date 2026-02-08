'use client'
import About from "./_components/About"
import TechStack from "./_components/TechStack"
import Projects from "./_components/Projects"
import Contact from "./_components/Contact"
const page = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <main className="py-20">
        <header>
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold">Patrick Allen Casili</h1>
            <p className="text-xl"> Aspiring Web Developer </p>
            <div className="flex justify-center items-center flex-col">
              <p className="mt-4 text-lg"> I'm an Aspiring Web developer from Cavite </p>
              <p> passionate about building web applications and creating solutions.</p>
            </div>
          </div>
        </header>
      </main>

      {/* Projects Section */}
      <section className="py-12 border-t border-b border-gray-300">
        <h2 className="text-center font-bold text-4xl mb-8">Project/s</h2>
        <Projects />
      </section>

      {/*Tech Stack Section */}
      <section className="py-12">
        <h2 className="text-center font-bold text-4xl mb-8"> Technologies </h2>
        <TechStack />
      </section>

      {/* About Section */}
      <section className="py-12">
        <h2 className="text-center font-bold text-4xl mb-8"> About Me </h2>
        <About />
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <h2 className="text-center font-bold text-4xl mb-8"> Contact </h2>
        <Contact />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 mt-12">
        <p>&copy; {new Date().getFullYear()} Patrick Allen Casili. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default page
