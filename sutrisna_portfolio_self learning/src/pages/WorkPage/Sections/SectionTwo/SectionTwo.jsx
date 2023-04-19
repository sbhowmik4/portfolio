import React from 'react'
import Thumbail from "../../../../assets/images/iphone-multiple-screens-mockup copy.png";
import { Link } from 'react-router-dom';
export default function SectionTwo() {
    return (
        <React.StrictMode>
            <div className="container mx-auto pl-10 pr-10">
                <div className="md:flex block flex-row justify-between items-center mb-32 border-b-4 pb-28 border-solid border-gray-800">
                    <div className="flex flex-col">
                        <h6>
                            01 / PROJECT NAME
                        </h6>
                        <h5 className='mt-10 mb-8'>
                            Sleepwise mobile App prototyping <br /> with the help of Figma. Learned a lot during this project <br /> and wireframe development.
                        </h5>
                        <p className='text-sm font-normal text-[#606060]'>
                        Designed and wireframed in Figma App <br />with the versatile interactibe design.
                        </p>
                        <div className='pt-32'>
                            <Link to={``} className='text-sm underline text-[#606060]'>More shots from this project ↗</Link>
                        </div>
                    </div>
                    <div>
                        <img src={Thumbail} className='md:w-[640px] w-full md:mt-0 mt-10' alt="" />
                    </div>
                </div>
                <div className="md:flex block flex-row justify-between items-center mb-32 border-b-4 pb-28 border-solid border-gray-800">
                    <div className="flex flex-col">
                        <h6>
                            01 / PROJECT NAME
                        </h6>
                        <h5 className='mt-10 mb-8'>
                        Sleepwise mobile App prototyping <br /> with the help of Figma. Learned a lot during this project <br /> and wireframe development.
                        </h5>
                        <p className='text-sm font-normal text-[#606060]'>
                        Designed and wireframed in Figma App <br /> with the versatile interactibe design.
                        </p>
                        <div className='pt-32'>
                            <Link to={``} className='text-sm underline text-[#606060]'>See case study →</Link>
                        </div>
                    </div>
                    <div>
                        <img src={Thumbail} className='md:w-[640px] w-full md:mt-0 mt-10' alt="" />
                    </div>
                </div>
                <div className="md:flex block flex-row justify-between items-center mb-32 border-b-4 pb-28 border-solid border-gray-800">
                    <div className="flex flex-col">
                        <h6>
                            01 / PROJECT NAME
                        </h6>
                        <h5 className='mt-10 mb-8'>
                            Ux design has several steps <br /> offered me to learn about design thinking <br /> and mobile app development.
                        </h5>
                        <p className='text-sm font-normal text-[#606060]'>
                        I learned a lot about user experience design  <br /> and front end development
                        </p>
                        <div className='pt-32'>
                            <Link to={``} className='text-sm underline text-[#606060]'>Project WIP</Link>
                        </div>
                    </div>
                    <div>
                        <img src={Thumbail} className='md:w-[640px] w-full md:mt-0 mt-10' alt="" />
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}
