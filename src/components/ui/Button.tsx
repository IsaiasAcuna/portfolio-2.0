
import { ReactNode } from 'react'

interface ButtonProps {
    title: string;
    icon: ReactNode
    link: string;
}

const Button: React.FC<ButtonProps> = ({ title, icon, link }) => {
  return (
    <button className="text-[20px] border border-gray-400 rounded-[10px] px-2 py-1 bg-transparent transition duration-200 hover:bg-green-700">
            <a
              href={link}
              className="flex items-center font-semibold text-[var(--first-color-font)] transition duration-200 hover:text-white"
            >
              <i className="text-black pr-[5px] transition duration-200 hover:text-white">{icon}</i>
              {title}
            </a>
          </button>
  )
}

export default Button
