import React from 'react'
import partner1 from '../../assets/google-2022.svg';
import partner2 from '../../assets/Microsoft-White.svg';
import partner3 from '../../assets/marketing-partner.svg';
import partner4 from '../../assets/banner-hubspot.svg';
import partner5 from '../../assets/banner-nj-biz.svg';
import partner6 from '../../assets/inc-5000-2021-white.svg';
import partner7 from '../../assets/banner-accredited-business.svg';
import partner8 from '../../assets/gsa-professional-services.svg';

const Hero = () => {
    return (
        <div>
            <div style={{
                background: `url(https://i.ibb.co/ZdGJSXj/web.webp)`
            }} className="bg-no-repeat !bg-cover">
                <div className='bg-black bg-opacity-25 pt-32 px-32'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <p className='text-[#fcb900]'>Custom Website Design Agency Services</p>
                        <h1 className='text-white text-5xl'>Our experts will create your perfect website</h1>
                        <p className='text-white text-lg mt-3 mb-8'>See why we are consistently rated as the best website design agency for businesses like yours.</p>
                        <div className=''>
                            <div className='flex space-x-5 '>
                                <img className='h-16' src={partner1} alt="" />
                                <img className='h-16' src={partner2} alt="" />
                                <img className='' src={partner3} alt="" />
                                <img className='' src={partner4} alt="" />
                                </div>
                                <div className='flex space-x-5 '>
                                <img className='' src={partner5} alt="" />
                                <img className='h-20' src={partner6} alt="" />
                                <img className='' src={partner7} alt="" />
                                <img className='' src={partner8} alt="" />
                            </div>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/M2dd27r/bucketgirl.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero