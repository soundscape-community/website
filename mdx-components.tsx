
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="section-title-blue w-fit bg-transparent py-2 font-bold text-navy-blue mb:text-4xl text-3xl  mb-6">
        { children } 
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="w-fit bg-transparent py-2  text-navy-blue font-medium mb:text-2xl text-xl  my-4">
        { children } 
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className="w-fit bg-transparent py-2  text-navy-blue font-semibold mb:text-xl  text-lg my-3">
        { children } 
      </h2>
    ),
    p: ({ children }) => (
      <p className="font-work-sans text-navy-blue font-normal pb-4">
        { children }
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-8 font-work-sans text-navy-blue font-normal pb-4">
        { children }
      </ul>
    ),
    li: ({ children }) => (
      <li className="pb-1">
        { children }
      </li>
    ),
    ...components,
  };
}
