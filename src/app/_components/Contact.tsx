import Link from 'next/link'
import { Phone, Mail, Instagram } from "lucide-react";
const Contact = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center max-w-4xl mx-auto px-4 py-4 md:py-8">
            <div className='border border-gray-300 dark:border-gray-700 p-3 md:p-4 rounded-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer flex items-center justify-center'>
                <p className="text-xs sm:text-sm md:text-base flex items-center"> <Mail className="inline-block mr-2 w-4 h-4 sm:w-5 sm:h-5" /> patriccsio@gmail.com </p>
            </div>
            <div className='border border-gray-300 dark:border-gray-700 p-3 md:p-4 rounded-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer flex items-center justify-center'>
                <p className="text-xs sm:text-sm md:text-base flex items-center"><Phone className="inline-block mr-2 w-4 h-4 sm:w-5 sm:h-5" /> 09912704175</p>
            </div>

            <div className='border border-gray-300 dark:border-gray-700 p-3 md:p-4 rounded-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer flex items-center justify-center'>
                <p className="text-xs sm:text-sm md:text-base flex items-center"> <Instagram className="inline-block mr-2 w-4 h-4 sm:w-5 sm:h-5" /><Link href="https://www.instagram.com/triksyuy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Patrick Allen</Link></p>
            </div>
        </div>
    )
}

export default Contact
