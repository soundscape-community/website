"use client"
import CampAbilitiesCoverImage from "@/static/images/cover-image.jpg"
import Image from "next/image"
import Link from "next/link";

function FeaturesPage() {

    return (
        <>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="flex flex-col w-full flex-1 bg-white
                            tv:px-16 desktop:px-16 laptop:px-16 s-laptop:px-12 tablet:px-6 mobile:px-6 ">
                <div className="flex flex-1 flex-col  w-full">
                    <div className="flex flex-col pb-10  gap-6">
                        <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold leading-normal text-orange lg:text-3xl text-2xl">News & Updates</h2>
                    </div>
                    <div className="hidden flex-row gap-16 flex-wrap text-lg font-poppins text-soundscape-dark-grey" >
                        <button className="cursor-not-allowed" disabled>All (0)</button>
                        <button className="cursor-not-allowed" disabled>Articles (0)</button>
                        <button className="cursor-not-allowed" disabled>News (0)</button>
                        <button className="cursor-not-allowed" disabled>Other Tag (0)</button>
                    </div>
                    <div className="flex flex-wrap flex-row flex-1 justify-start  text-soundscape-dark-grey/50">
                        <div className="flex basis-full md:basis-1/2 xl:basis-1/3 h-auto">
                            <Link href={"/news-updates/camp-abilities-ireland-2024"} className="flex flex-col mx-4 bg-[#edeff3] overflow-hidden rounded-tr-[1.75rem] rounded-bl-[1.75rem]">
                                <Image src={CampAbilitiesCoverImage} alt="Three people walking across a field" className="w-full h-[14rem] object-cover " />
                                <div className="flex flex-col px-6 pb-10 pt-3">
                                    <h3 className="w-fit bg-transparent py-2 font-bold text-navy-blue text-lg">Camp Abilities Ireland 2024 - Orienteering</h3>
                                    <span className="font-work-sans font-semibold pb-4">July 14, 2024</span>
                                    <p className="font-work-sans text-navy-blue font-medium text-sm ">Set up in Ireland in 2010, adopted from the model established by Lauren Lieberman in New York, Camp Abilities is a Vision Sports Ireland annual residential sports and leisure activities camp for young people who are blind or vision impaired.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}

        </>
    );
}

export default FeaturesPage;