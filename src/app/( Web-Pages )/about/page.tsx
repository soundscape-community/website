import Herofeatures from '@/static/images/Herofeatures.jpg';
import SoundscapeStreetPreview from '@/static/images/SoundscapeStreetPreview.png';
import SoundscapeStreetPreviewSmall from '@/static/images/SoundscapeStreetPreviewSmall.png';

import ftPagefeatures1 from '@/static/images/ftPagefeat1.png';
import ftPagefeatures2 from '@/static/images/ftPagefeat2.png';
import ftPagefeatures3 from '@/static/images/ftPagefeat3.png';

import spatialAudio from '@/static/images/spatialAudio.png';
import wayFinding from '@/static/images/wayFinding.png';
import beaconFeature from '@/static/images/beaconFeature.png';
import bgApp from '@/static/images/bgApp.png';
import buildings from '@/static/images/buildings.png';
import OpenStreetmap from '@/static/images/OpenStreetmap.png';

import Image from 'next/image';

import AboutUsHero from '@/static/images/about-us-hero.jpg';
import AboutUsOne from '@/static/images/about-us-one.png';
import AboutUsTwo from '@/static/images/about-us-two.png';


function AboutPage() {

    return (
        <>
            <div className='h-[450px] w-full'>
                <Image
                    className="h-full object-cover tv:w-full desktop:w-auto laptop:w-auto
                            tv:object-hero-big-screen desktop:object-hero-big-screen
                            laptop:object-hero-big-screen s-laptop:object-left-top
                            tablet:object-left-top mobile:object-left-top"
                    src={AboutUsHero}
                    alt="picture of hand holiding up a phone with the Soundscape app open with panels illustrating what is being said by the application. In the background is a city street with people walking and buildings."
                />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="flex w-full h-auto bg-white py-28
                            tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                <div className="flex flex-row flex-wrap w-full h-auto">
                    <div className="flex flex-col desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full pt-10   py-4 gap-6">
                        <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold leading-normal text-orange lg:text-3xl text-2xl">About</h2>
                        <p className="font-work-sans text-dark-grey font-medium text-medium pr-2">
                            Microsoft&apos;s Soundscape closure has led to a collaborative effort between various organizations and co-founders to not only maintain accessibility for existing users but eventually expand its availability to all.
                            <br/><br/>
                            The different partners who are involved, have been involved in working with and supporting Soundscape for a number of years and each one has a strong interest and motivation in not only maintaining Soundscape, but to invest in it’s growth and development. 
                            
                        </p>
                    </div>
                    <div className="flex justify-center items-center my-8 max-h-[475px] desktop:basis-7/12 laptop:basis-full laptop:w-full s-laptop:basis-full s-laptop:w-full tablet:basis-full tablet:w-full desktop:pl-10 mobile:basis-full">
                        <Image className="w-[90%] max-h-[400px] max-w-[712px] rounded-section-image !aspect-video" src={AboutUsOne} alt="Image of a woman wearing shades and headphones walking down a busy street using Soundscape Community. With supplemental white speakers surrounding her head to show the spatial audio from the application"/> 
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="flex flex-col w-full h-auto bg-light-grey-bg py-28 
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                <div className="flex flex-row flex-wrap w-full h-auto items-center justify-center ">
                    <div className="flex justify-center desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full laptop:pb-6 s-laptop:pb-6 tablet:pb-6 mobile:pb-6  pt-4">
                        <Image className="w-[90%] max-h-[400px] max-w-[400px] rounded-section-image !aspect-square" src={AboutUsTwo} alt="Image looking at the back of a man in a gray wool jacket with headphones on his head. As he is walking down a busy street using the Soundscape Community App."/> 
                    </div>
                    <div className="flex flex-col desktop:basis-7/12 laptop:basis-full s-laptop:basis-full tablet-basis:full desktop:pl-4 py-6 gap-6 pt-8">
                        <h2 className="section-title-blue w-fit bg-transparent py-2 font-bold text-navy-blue lg:text-3xl text-2xl">Our goal: Provide continuity of service</h2>
                        <p className="font-work-sans text-navy-blue font-medium text-medium   mr-4">
                            The goal of the consortium is to provide continuity of service for existing users and allow them to use Soundscape as they currently do. After this, we will be releasing in additional countries in Europe and South America in our mission to make it available to more people.
                            <br/><br/>
                            Everyone in the consortium is giving their time and expertise free of charge; however, in order to support Soundscape, we need funds to pay the costs to keep it running. We would be very grateful if you are willing and able to donate towards this. Please use the donate button below to express your support for Soundscape.
                        </p>
                        <a className="h-auto w-52 bg-orange rounded-primary-btn flex justify-center items-center py-4 text-white text-lg font-semibold" href="https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1" target="_blank">Donate</a>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default AboutPage;