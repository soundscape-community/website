import React, { useState } from 'react';

import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
//import { SoundscapeLogoImg } from '../../../utils/media.ts';
import SoundscapeLogoImg from "@/static/images/Soundscape_Logo.svg";

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import NavigationMenuSheet from './NavigationMenuSheet';

function Header(){

    const [headerItems, setHeaderItems] = useState([
        { name: 'Home', link: '/', target: '_self', JSX: (<></>) },
        { name: 'Features', link: '/features', target: '_self', JSX: (<></>) },
        { name: 'About', link: '/about', target: '_self', JSX: (<></>) },
        { name: 'Support', link: '/support', target: '_self', JSX: (<></>) },
        { name: 'News & Updates', link: '/news-updates', target: '_self', JSX: (<></>) },
        { name: 'Privacy Policy', link: 'https://ialabs.ie/privacy-policy/', target: '_blank', JSX: ( <span className="screen-reader-only">(opens in a new tab)</span> ) },
        { name: 'Safe Sport Policy', link: 'https://thisabledsports.org/wp-content/uploads/2025/07/2025-mu-safe-sport-statement.pdf', target: '_blank', JSX: ( <span className="screen-reader-only">(opens document in a new tab)</span> )  }
    ]);

    const [showNavDropdown, setShowNavDropdown] = useState(false);
 


    return (
        <>
            <header className="flex h-header w-full fixed top-0 left-0 z-50 py-2 items-center justify-between bg-soundscape-blue-bg 
                                2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8"  style={{ boxShadow: '0 0px 15px #000' }}> 
                {/* Start of Header Identity Section */}
                <a href="/" className="flex items-center h-full font-poppins">
                    <Image className="h-16 w-16 max-h-full max-w-full mt-1" src={SoundscapeLogoImg}  alt="Soundscape Community Logo (Go to Home Page)" height={0} width={0}/>
                    <div className="flex-col w-auto px-4 items-center justify-center
                                    2xl:flex xl:flex lg:flex md:flex sm:flex hidden">
                        <h1 className="w-full text-center text-soundscape-white text-xl !leading-none">
                            Soundscape<br/>
                            <span className="text-soundscape-white text-sm">Community</span>
                        </h1>
                    </div>
                </a>
                {/* End of Header Identity Section */}

                {/* Start of Header Link Section */}
                <div className="2xl:flex hidden gap-3"> 
                    {headerItems.map((element, index) => {
                    return (
                        <a target={element.target} className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-white hover:text-soundscape-dark-blue font-poppins" href={element.link as string} key={index} >
                            {element.name}
                            {element.JSX}
                        </a>
                    )
                    })}
                </div>
                {/* End of Header Link Section */} 
                <div className='2xl:hidden flex'>
                    <NavigationMenuSheet>
                        <FiMenu aria-label="Image of a Hamburger Menu" aria-describedby="hamburger-menu" title="Navigation Menu Icon" className=" text-white" style={{ 'cursor': 'pointer'}} color="#fff" fill="#fff" size={"2.5rem"} onClick={() => { setShowNavDropdown(false)}} />
                    </NavigationMenuSheet>  

                </div>
            </header>
        </>
    );
};

export default Header;
