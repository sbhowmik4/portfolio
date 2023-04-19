import React from 'react'
import Header from '../../components/Header/Header'
import ProfileImage from "../../assets/images/sutrisna.png";
import SectionTwo from './Sections/SectionTwo/SectionTwo';
export default function AboutPage() {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <Header />

            <div className='container mx-auto pl-10 pr-10 pt-20'>
                <div className='md:flex inline-block flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className='md:text-[60px] text-2xl leading-[58.32px]'>
                            Hi I’m Sutrisna Bhowmik <br /> Seneca Student, INM <br /> UX designer & story teller.
                        </h2>
                        <h5 className='text-[23px] text-[#606060] leading-[37.44px] mt-10 font-normal'>
                            My work is mainly focused on <br /> Mobile App designing, 3D modelling and <br /> web designing. I like exploring the area of interactive deisgning <br /> with extensive secondary research, <br /> usability testing and interactive design.
                        </h5>
                        <h5 className='text-[23px] text-[#606060] leading-[37.44px] mt-10 font-normal'>
                        Now I’m an interactive media design <br /> student in Toronto, Ontario, Canada. <br /> prsently working part-time and seeking internship <br /> opportunities.
                        </h5>
                        <h5>
                            
                        </h5>
                    </div>
                    <div>
                        <img src={ProfileImage} alt="" />
                    </div>
                </div>

                <SectionTwo />
            </div>
        </div>
    )
}
