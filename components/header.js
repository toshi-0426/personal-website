import Link from "next/link"
import Navigation from "./navigation"
import ThemeSwitch from "./ThemeSwitch"
import Icon from "../public/icons/icon.svg"
import Image from "next/image"


export default function Header() {
  return (
    <header className="flex justify-between md:items-center mt-8">
      <div className="flex items-center  md:space-x-8">
        <div className="hidden md:block">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-mono font-semibold">
              <Image 
                className="mr-2 filter dark:invert"
                src={Icon}
                width={35}
                height={35}
                alt="My Icon"
                priority={true}
              />
              Toshiyasu Takahashi
            </Link>
          </div>
        </div>
        <Navigation />
        
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  )
}
