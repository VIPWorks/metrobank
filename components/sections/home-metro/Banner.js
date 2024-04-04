
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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



}

export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Discover <span>Seamless Trading</span> with CW BANK</h2>
                                <p>Experience the ultimate trading experience with CW BANK. Our user-friendly platforms, advanced tools, and comprehensive resources empower you to trade with confidence and precision.</p>
                                <div className="btn-box">
                                    <Link href="/contact-us" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-2.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Explore <span>Our Unmatched </span>Liquidity Solutions</h2>
                                <p>Gain access to unparalleled liquidity with CW BANK's robust network of liquidity providers. Enjoy fast and reliable order execution, tight spreads, and deep liquidity pools to optimize your trading strategy.</p>
                                <div className="btn-box">
                                    <Link href="/contact-us" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-3.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2> Unlock <span>Global Investment </span>Opportunities with us </h2>
                                <p>Explore a world of investment opportunities with CW BANK. From forex and stocks to commodities and cryptocurrencies, our diverse range of products allows you to diversify your portfolio and capitalize on market trends from around the globe.</p>
                                <div className="btn-box">
                                    <Link href="/contact-us" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-3.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2> Your Partner in <span>Financial</span> Success</h2>
                                <p>At CW BANK, we're more than just a broker – we're your partner in financial success. Our dedicated team is committed to helping you achieve your trading goals and maximize your potential in the markets.</p>
                                <div className="btn-box">
                                    <Link href="/contact-us" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-3"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-4"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
