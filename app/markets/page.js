'use client'
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   
    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Markets">
                <div>
                    {/* service-style-two */}
                    <section className="service-section pt_120 pb_90">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="sec-title centred mb_60">
                            <h6>Our Services</h6>
                            <h2>Online Banking at Your <br />Fingertips</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="shape"></div>
                                                <div className="icon-box"><i className="icon-12"></i></div>
                                                <h4><Link href="/forex-trading">Forex</Link></h4>
                                                <ul className="list-item clearfix">
                                                <li>Comprehensive Access</li>
                                                <li>Advanced Trading</li>
                                                <li>Personalized Support</li>
                                                </ul>
                                            </div>
                                            </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h4><Link href="/cfds">CFDs</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Comprehensive Market</li>
                                            <li>Educational Resources</li>
                                            <li>Advanced Trading Tools</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h4><Link href="/stock">Stock</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Educational Resources</li>
                                            <li>Comprehensive Stock</li>
                                            <li>Advanced Trading</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-15"></i></div>
                                        <h4><Link href="/etfs">ETFs</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Advanced Trading Tools</li>
                                            <li>Comprehensive Market</li>
                                            <li>Educational Resources</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-16"></i></div>
                                        <h4><Link href="/cryptocurrencies">Cryptocurrencies</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Personalized Guidance</li>
                                            <li>Educational Resources</li>
                                            <li>Advanced Trading Platforms</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link href="/bonds">Bonds</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Regular Income Streams</li>
                                            <li>Stability and Security</li>
                                            <li>Safe Haven for Investors</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-18"></i></div>
                                        <h4><Link href="/money-markets">Money Markets</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Attractive Interest Rates</li>
                                            <li>Reputable Counterparties</li>
                                            <li>Lombard Loan Opportunities</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-19"></i></div>
                                        <h4><Link href="/options-&-futures">Options & Futures</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Advanced Trading Platforms</li>
                                            <li>Comprehensive Market</li>
                                            <li>Educational Resources</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}
 
                    {/* testimonial-style-two */}
                    <section className="testimonial-style-two service-page-one pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title mr_70">
                                <h6>Testimonials</h6>
                                <h2>Love from Happy Clients</h2>
                                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    {/*Theme Carousel*/}
                                    <TestimonialSlider03 />                        
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-style-two end */}

                    {/* subscribe-section */}
                    <section className="subscribe-section">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                <h2>Subscribe us to Receive Latest Updates</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner ml_40">
                                <form method="post" action="/contact">
                                    <div className="form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                    <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* subscribe-section end */}
                </div>

            </Layout>
        </>
    )
}