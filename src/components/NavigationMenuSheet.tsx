"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import SoundscapeLogoImg from "@/static/images/Soundscape_Logo.svg";
import { useState } from "react";

export function NavigationMenuSheet({
    children,
}: Readonly<{ children?: React.ReactNode}>) {

    const [navItems, setNavItems] = useState([
        { name: 'Home', link: '/', target: '_self', JSX: (<></>) },
        { name: 'Features', link: '/features', target: '_self', JSX: (<></>) },
        { name: 'About', link: '/about', target: '_self', JSX: (<></>) },
        { name: 'Support', link: '/support', target: '_self', JSX: (<></>) },
        { name: 'News & Updates', link: '/news-updates', target: '_self', JSX: (<></>) },
        { name: 'Privacy Policy', link: 'https://ialabs.ie/privacy-policy/', target: '_blank', JSX: ( <span className="screen-reader-only">(opens in a new tab)</span> ) },
        { name: 'Safe Sport Policy', link: 'https://thisabledsports.org/wp-content/uploads/2025/06/2025-MU-Safe-sport-statement.docx', target: '_blank', JSX: ( <span className="screen-reader-only">(opens in a new tab)</span> )  }
    ]);

  return (
    <Sheet >
      <SheetTrigger>
        { children }
      </SheetTrigger>
      <SheetContent className="bg-soundscape-blue-bg overflow-y-auto" side={"left"}>
        <SheetHeader className="w-[90%]">
            <a href="/" className="flex items-center h-full font-poppins">
                <Image className="h-16 w-16 max-h-full max-w-full mt-1" src={SoundscapeLogoImg}  alt="Soundscape Community Logo (Go to Home Page)" height={0} width={0}/>
                <div className="flex-col w-auto px-4 items-center justify-center
                                2xl:flex xl:flex lg:flex md:flex sm:flex hidden">
                    <h1 className="w-full text-center text-soundscape-white text-xl leading-6">Soundscape<br/><span className="text-soundscape-white text-sm">Community</span></h1>
                </div>
            </a>
        </SheetHeader>
        <div className="flex flex-col gap-8 mt-12 font-poppins">
            { navItems.map((element, index) => {
                    return (
                        <a target={element.target} className="poppins flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-white hover:text-soundscape-dark-blue " href={element.link as string} key={index} >
                            {element.name}
                            {element.JSX}
                        </a>
                    )
            })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavigationMenuSheet
