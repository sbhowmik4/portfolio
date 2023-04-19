import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'

export default function SectionTwo() {
    return (
        <>
            <section className='pt-20 border-b-2 border-solid border-gray-800 pb-20 mb-10'>
                <div className="flex flex-row gap-20">
                    <Link to={``} className='underline'>Main Software </Link>
                    <div className="flex flex-col gap-4">
                        <p className='text-[#181717]'>
                            Autodesk Maya, Figma, <br />
                            Adobe XD, Sketch, Illustrator
                        </p>
                        <p>
                            Adobe CC, Figma, Sketch
                        </p>
                    </div>

                </div>
                <div className="flex flex-row gap-20 pt-10">
                    <Link to={``} className='underline'>Main Skills</Link>
                    <div className="flex flex-col gap-4">
                        <p className='text-[#181717]'>
                            UX research and design,prototyping, <br /> Front end development, Wireframing, Ilustration, web Design
                        </p>
                    </div>

                </div>
            </section>
            <div className='pt-10 pb-20'>
                <div className='md:flex block justify-between'>
                    <h5 className='text-[32px] leading-[37.44px]'>
                        I am thrilled to answer to <br /> your next project
                    </h5>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[32px]'>
                            sutrisna.bhowmik@gmail.com
                        </h5>
                        <p>
                        View Resume
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
