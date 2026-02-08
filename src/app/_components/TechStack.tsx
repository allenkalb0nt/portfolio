'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

const techs = [
    { name: "HTML", src: "/techstacks/HTML5.png" },
    { name: "Nextjs", src: "/techstacks/nextjs-light.png", light: "/techstacks/nextjs.png", dark: "/techstacks/nextjs-light.png" },
    { name: "React", src: "/techstacks/React.png" },
    { name: "Tailwind CSS", src: "/techstacks/Tailwind.png" },
    { name: "Supabase", src: "/techstacks/supabase.png" },
    { name: "PostgreSQL", src: "/techstacks/postgreSQL.png" },
    { name: "TypeScript", src: "/techstacks/TypeScript.png" },
    { name: "JavaScript", src: "/techstacks/JavaScript.png" },
    { name: "GitHub Desktop", src: "/techstacks/GD.png" },
    { name: "Figma", src: "/techstacks/Figma.png" },
    { name: "Vercel", src: "/techstacks/vercel-light.png", light: "/techstacks/vercel.png", dark: "/techstacks/vercel-light.png" },
]

const TechStack = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 lg:grid-cols-4">
            {techs.map((tech) => (
                <div
                    key={tech.name}
                    className="cursor-pointer flex items-center border p-2 m-2 rounded-lg duration-300 hover:scale-102"
                >
                    <Image
                        src={mounted && theme === "light" && tech.light ? tech.light : tech.src}
                        alt={`${tech.name} logo`}
                        width={40}
                        height={25}
                        className="rounded-xs"
                    />
                    <p className="ml-auto">{tech.name}</p>
                </div>
            ))}
        </div>
    )
}

export default TechStack
