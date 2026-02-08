import Image from 'next/image'
import Link from 'next/link'
const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                    src="/images/Multilab.png"
                    width={1000}
                    height={1000}
                    alt="Multilab Project"
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
            <div className="flex flex-col justify-center space-y-3 md:space-y-4">
                <p className="text-sm sm:text-base">
                    A Web application for appointment and patient records management system with SMS reminders
                </p>
                <Link
                    href="https://multilab-app.vercel.app"
                    target="_blank"
                    className="hover:underline font-semibold text-sm sm:text-base"
                >
                    Visit The Website 
                </Link>
            </div>
        </div>
    )
}

export default Projects
