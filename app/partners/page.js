'use client'
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Partners">
                <div>

                    <section className="about-section pt_120 pb_120">
                        <div className="pattern-layer rotate-me"></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_three">
                                <div className="image-box pr_110 mr_20">
                                    <div className="image-shape">
                                    <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                                    </div>
                                    <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                    <div className="rating-box">
                                    <ul className="rating mb_5 clearfix">
                                        <li><i className="icon-9"></i></li>
                                        <li><i className="icon-9"></i></li>
                                        <li><i className="icon-9"></i></li>
                                        <li><i className="icon-9"></i></li>
                                        <li><i className="icon-9"></i></li>
                                    </ul>
                                    <h6>5 Star Rating Bank</h6>
                                    <ul className="thumb-list">
                                        <li><img src="assets/images/resource/thumb-1.png" alt="" /></li>
                                        <li><img src="assets/images/resource/thumb-2.png" alt="" /></li>
                                        <li><img src="assets/images/resource/thumb-3.png" alt="" /></li>
                                        <li><img src="assets/images/resource/thumb-4.png" alt="" /></li>
                                    </ul>
                                    </div>
                                    <div className="experience-box">
                                    <div className="inner">
                                        <h2>25+<span>Years</span></h2>
                                        <h5> of Experience <br /> in the Finance <br /> Service</h5>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box ml_40">
                                        <div className="sec-title mb_20">
                                        <h6>Partner</h6>
                                        <h2>YOUR CLIENTS DESERVE THE BEST</h2>
                                        </div>
                                        <div className="text-box mb_40">
                                        <p>Grow your business with a solid partner. Offer your clients your expertise mixed with Swissquote’s financial strength, transparency and security.</p>
                                        </div>
                                        <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3><Link href="/broker-partnerships" className="link">Broker Partnerships</Link></h3>
                                            <p>Our Broker Partnerships program is meticulously designed to foster mutually beneficial relationships.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3><Link href="/institutional-solutions" className="link">Institutional Solutions</Link></h3>
                                            <p>Our Institutional Solutions encompass a range of services and offerings crafted to deliver performance.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3><Link href="/introducing-broker-program" className="link">Introducing Broker Program</Link></h3>
                                            <p>Our IB Program is meticulously crafted to empower individuals and businesses to earn competitive commissions by referring clients to CWBANK.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3><Link href="/affiliate-program" className="link">Affiliate Program</Link></h3>
                                            <p>Partner with CWBANK's Affiliate Program and start earning competitive commissions by promoting our industry-leading financial products.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3><Link href="/partners-white-label-solutions" className="link">White Label Solutions</Link></h3>
                                            <p>Our White Label Solutions empower businesses like yours – whether you're a broker, financial institution, or fintech company.</p>
                                        </div>
                                        <div className="btn-box">
                                        <Link href="/about-us" className="theme-btn btn-one">Discover More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

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