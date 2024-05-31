"use client"

import { useState } from "react";

const Accordion = ({
  title,
  content,
  link,
  linkText
} : {
    title: string,
    content: string,
    link?: string,
    linkText?: string
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col w-[90%] border-t-2 gray-border mt-8 gap-3">
      <div className="flex cursor-pointer text-navy-blue items-center justify-between" onClick={() => setIsActive(!isActive) }>
        <h3 className="first-letter:w-fit bg-transparent py-6 font-semibold text-navy-blue text-xl">{title}</h3>
        <span className="text-2xl">{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <p className="font-work-sans text-navy-blue mr-4 text-md">{content}</p>}
      {isActive && link && <a className="link" target="_blank" href={link}>{linkText}</a>}
    </div>
  );
};

export default Accordion;