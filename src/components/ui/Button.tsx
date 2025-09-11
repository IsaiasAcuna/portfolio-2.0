
import { ReactNode } from 'react'

interface ButtonProps {
    title: string;
    icon: ReactNode
    link: string;
}

const Button: React.FC<ButtonProps> = ({ title, icon, link }) => {
  return (
    <button className="w-50 md:w-auto text-[20px] border border-gray-400 rounded-xl px-5 py-2 bg-transparent transition duration-200 hover:bg-">
            <a
              href={link}
              className="flex items-center transition duration-200 hover:text-white"
            >
              <i className="text-black pr-3 transition duration-200 hover:text-white">{icon}</i>
              {title}
            </a>
          </button>
  )
}

export default Button
