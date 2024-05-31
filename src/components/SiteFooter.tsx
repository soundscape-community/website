import { useState } from "react";

function SiteFooter() {

    const [footerItems, setFooterItems] = useState([
        { name: 'Privacy Policy', link: 'https://ialabs.ie/privacy-policy/', target: '_blank', JSX: ( <span className="screen-reader-only">(opens in a new tab)</span> ) },
      ]);
  return (
    <footer className="flex w-full justify-between py-8 bg-soundscape-dark-grey text-soundscape-white
        2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8">
        <div className="flex flex-row">©{new Date().getFullYear()} Soundscape Community</div>
        <div className="2xl:flex xl:flex hidden"> 
            {footerItems.map((element, i) => {
                return (
                    <a tabIndex={1} target={element.target} className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href={element.link} key={`footer-${i}`}>
                        {element.name}
                        {element.JSX}
                    </a>
                )
            })}
        </div>
    </footer>
  );
}

export default SiteFooter;