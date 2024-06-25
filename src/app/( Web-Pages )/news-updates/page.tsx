"use client"

function FeaturesPage() {

    return (
        <>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="flex flex-col w-full flex-1 bg-white py-28
                            tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                <div className="flex flex-1 flex-col  w-full">
                    <div className="flex flex-col py-10  gap-6">
                        <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold leading-normal text-orange lg:text-3xl text-2xl">News & Updates</h2>
                    </div>
                    <div className="hidden flex-row gap-16 flex-wrap text-lg font-poppins text-soundscape-dark-grey" >
                        <button className="cursor-not-allowed" disabled>All (0)</button>
                        <button className="cursor-not-allowed" disabled>Articles (0)</button>
                        <button className="cursor-not-allowed" disabled>News (0)</button>
                        <button className="cursor-not-allowed" disabled>Other Tag (0)</button>
                    </div>
                    <div className="flex flex-1 justify-center items-center text-5xl font-poppins text-soundscape-dark-grey/50">
                        Coming Soon
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}

        </>
    );
}

export default FeaturesPage;