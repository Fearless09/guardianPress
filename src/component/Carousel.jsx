import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
// Impoert Swiper Style
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import required module
import { Autoplay, Pagination, Navigation } from 'swiper'

function Carousel({ news }) {

    const showCase = []
    const slide = 3
    
    for (let i = 0; i < slide; i++) {
        showCase.push(news[i])
    }
    // console.log(showCase)

    return (
        <div className='text-center fs-1'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
                {showCase.map((show, index) => (
                    <React.Fragment key={index}>
                        {show && show.fields ? (
                            <SwiperSlide style={{height: '50vh', background: `url(${show.fields.thumbnail})`, backgroundSize: '100% 100%'}}>
                                <div className='text-start h-100 w-75 d-flex align-items-center'>
                                    <a href={show.webUrl} target='_blank' className='text-decoration-none ps-5 ms-5'>
                                        <h2 style={{color: 'lightcoral'}}>{show.webTitle}</h2>
                                        <div className='d-flex flex-wrap fs-5 mt-3'>
                                            <div className="bg-info text-white rounded px-2 py-1 text-uppercase" >{show.sectionName}</div>
                                            <div className="bg-info text-white rounded px-2 py-1 text-uppercase ms-2" >{show.pillarName}</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ): ''}
                    </React.Fragment>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
