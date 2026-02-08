import Link from 'next/link'
import { Phone, Mail, Instagram } from "lucide-react";
const Contact = () => {
    return (
        <div className="flex gap-x-8 justify-center max-w-3xl mx-auto px-4 py-8">
            <div className='border p-4 rounded-md hover:scale-110 duration-300 cursor-pointer'>
                <p> <Mail className="inline-block mr-2" /> patriccsio@gmail.com </p>
            </div>
            <div className='border p-4 rounded-md hover:scale-110 duration-300 cursor-pointer'>
                <p><Phone className="inline-block mr-2" /> 09912704175</p>
            </div>

            <div className='border p-4 rounded-md hover:scale-110 duration-300 cursor-pointer'>
                <p> <Instagram className="inline-block mr-2" /><Link href="https://www.instagram.com/triksyuy/" target="_blank" rel="noopener noreferrer" className="">Patrick Allen</Link></p>
            </div>
        </div>
    )
}

export default Contact
