import React from 'react'
import Header from '../../components/Header/Header'
import SectionTwo from './Sections/SectionTwo/SectionTwo'
import Footer from '../../components/Footer/Footer'

export default function WorkPage() {
    return (
        <React.StrictMode>
            <main className='bg-[#F3F3F3] min-h-screen'>
                <Header />
                <div className="container mx-auto py-32 pl-10 pr-10">
                    <div className="md:flex block items-center gap-24">
                        <h1 className='text-[60px] leading-[58.32px]'>
                            Hello, I’m <br /> Sutrisna Bhowmik.
                        </h1>
                        <p className='text-[#606060] text-[32px]'>
                            A senior-year design student who is trying <br /> to specialize in User Experience and Web Designing.
                        </p>
                    </div>
                    <div className='pt-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path></svg>
                    </div>

                </div>

                <SectionTwo />


                <Footer />
            </main>
        </React.StrictMode>
    )
}
