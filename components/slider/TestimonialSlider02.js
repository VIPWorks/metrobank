'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                            <h4>Sarah Johnson</h4>
                            <span className="designation">Canada</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“ I've been trading with CW BANK for over two years now, and I couldn't be happier with the service. The platform is intuitive, the customer support team is responsive, and the educational resources have helped me improve my trading skills. Highly recommended! ”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                            <h4>Juan Martinez</h4>
                            <span className="designation">Spain</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“As a professional trader, I demand reliability and performance from my trading platform, and CW BANK delivers on both fronts. The execution speed is impressive, the spreads are competitive, and the range of financial products is extensive. CW BANK is my go-to choice for online trading.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                            <h4>Emily Wong</h4>
                            <span className="designation">Singapore</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“I started trading with CW BANK as a beginner, and I've been impressed with the level of support and guidance they provide. The educational materials are clear and informative, and the demo account allowed me to practice trading without risking real money. Thanks to CW BANK, I feel confident in my trading decisions.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                            <h4>Alexandre Dubois</h4>
                            <span className="designation">France</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“I've been a client of CW BANK for several years now, and I continue to be impressed by their professionalism and commitment to customer satisfaction. Whether I have a question about my account or need assistance with a trade, the support team is always there to help. CW BANK truly puts their clients first.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                            <h4>Maria Garcia</h4>
                            <span className="designation">Brazil</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“CW BANK has exceeded my expectations in every way. The platform is user-friendly, the trading tools are powerful, and the execution is lightning-fast. Plus, the range of financial products allows me to diversify my portfolio and explore new trading opportunities. I'm grateful to have found CW BANK.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                            <h4>David Smith</h4>
                            <span className="designation">The United States</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>“I've tried several online brokers in the past, but none have impressed me as much as CW BANK. The platform is robust, the fees are competitive, and the customer service is top-notch. Whether you're a beginner or an experienced trader, I highly recommend giving CW BANK a try.”</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
