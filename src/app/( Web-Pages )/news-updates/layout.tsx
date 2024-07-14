"use client"

export default function Layout({
    children,
}: {
    children: React.ReactNode
 }) {

    return ( 
        <div className="flex flex-col h-auto min-h-screen w-full max-w-[86rem] py-36  
            tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-4"
        >
            { children }
        </div>
    );
 }