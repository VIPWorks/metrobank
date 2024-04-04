import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Affiliate Program">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content_block_three">
                                <div className="content-box mr_110">
                                    
                                    <div className="text-box mb_40">
                                        <div className="sec-title mb_20">
                                    <h2 className="mb_20">Welcome to CW BANK's Affiliate Program</h2>
                                    <h6>Monetize Your Online Presence with CWBANK</h6>

                                    <div className="text-box mb_40">
                                        <p>
                                            Here we believe in the transformative power of collaboration. In today's dynamic financial landscape, forging strategic alliances with brokers and financial institutions is paramount to unlocking new avenues of growth and success. With CWBANK as your partner, you gain access to a comprehensive suite of resources and support tailored to elevate your business to new heights.
                                        </p>

                                        {/* <h3 className="mb_15 mt_30">Empowering Your Success Through Collaboration:</h3>
                                        <p>
                                            At CWBANK, we understand that success is not achieved in isolation but through meaningful partnerships. Our Broker Partnerships program is meticulously designed to foster mutually beneficial relationships, enabling brokers and financial institutions worldwide to thrive in the competitive realm of online trading. Whether you're an established brokerage firm or an aspiring financial intermediary, partnering with CWBANK opens doors to a world of opportunities.
                                        </p> */}
                                    </div>
                                </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                <div className="image_block_two">
                                    <div className="image-box">
                                        <div className="image-shape">
                                        <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                                        <div className="shape-4" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        </div>
                                        <figure className="image">
                                        <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-style-two */}

                {/* feature-style-three */}
                <section className="partner-feature-section feature-style-three pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>Why US</h6>
                        <h2>Benefits of Partnering with CWBANK's Affiliate Program:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Competitive Commissions</Link></h4>
                                        <p>Earn generous commissions for every qualified referral that leads to a new account opening or trading activity. Our tiered commission structure ensures that the more referrals you drive, the more you earn. With unlimited earning potential, the sky's the limit when it comes to your earnings as an affiliate partner.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Easy Integration</Link></h4>
                                        <p>Joining and integrating our Affiliate Program into your website or online platform is quick and hassle-free. Simply sign up, access our marketing materials, and start promoting CWBANK's products and services to your audience. With seamless integration, you can start monetizing your online presence in no time.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Flexible Payout Options</Link></h4>
                                        <p>Choose from a variety of payout options, including revenue sharing, CPA (Cost Per Acquisition), and hybrid structures, to suit your preferences and revenue objectives. We understand that every affiliate partner is unique, which is why we offer flexible payout arrangements tailored to your individual needs.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Dedicated Support</Link></h4>
                                        <p>Our Affiliate Management team is dedicated to helping you succeed as an affiliate partner. Receive personalized support with onboarding, marketing strategies, and ongoing assistance. Whether you need guidance on promotional tactics or assistance with tracking your referrals, our team is here to support you every step of the way.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Advanced Tracking and Reporting</Link></h4>
                                        <p>Gain access to our advanced tracking and reporting tools, empowering you to monitor your referrals, track commissions, and analyze performance in real-time. Our transparent reporting ensures full visibility into your earnings and commissions, allowing you to optimize your strategies for maximum results.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                <section className="joinNow-section">
                    <div className="auto-container">
                        <div className="content-box mt_60 mb_60 text-center">
                                <div className="mt_60">
                                    <h3 className="mb_30 highlight">Join CW BANK's Affiliate Program Today</h3>
                                    <p className="mb_30 lead_text">Partner with CWBANK's Affiliate Program and start earning competitive commissions by promoting our industry-leading financial products and services to your audience. Whether you're a seasoned marketer or a novice affiliate, our program offers the resources and support you need to succeed. Turn your website traffic into revenue and unlock new opportunities for growth and success with CWBANK's Affiliate Program. Sign up today and start maximizing your earning potential as an affiliate partner.</p>
                                </div>
                        </div>
                    </div>
                </section>

                {/* process-section */}
                <section className="process-section centred pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/process-bg.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_110">
                        <h6>Our process</h6>
                        <h2>Open Bank Accounts</h2>
                        </div>
                        <div className="inner-container">
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">01 <br />Step</span>
                            <h3>Fill In The <br />Required Form</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">02 <br />Step</span>
                            <h3>Submit All <br />Your Documents</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="inner-box">
                            <span className="count-text">03 <br />Step</span>
                            <h3>Get Your <br />Desire Account</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* process-section end */}

                {/* requirements-section */}
                <section className="requirements-section centred pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70">
                        <h6>Requirement</h6>
                        <h2>Required Document</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Documents</h4>
                                <ul className="list-item clearfix">
                                <li>NID/Birth certificate/Passport</li>
                                <li>Photograph – 2 Copies</li>
                                <li>Nominee photograph – 1 Copy</li>
                                <li>Nominee’s NID/Birth ID/Passport</li>
                                <li>Income source document</li>
                                <li>E-TIN Certificate</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Features</h4>
                                <ul className="list-item clearfix">
                                <li>Cheque-book facility</li>
                                <li>Debit Card cash withdrawal from ATMs</li>
                                <li>Interest on Monthly Average Balance</li>
                                <li>Higher ATM withdrawal limit</li>
                                <li>Utility bill payment service</li>
                                <li>Online banking service through App</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Eligibility</h4>
                                <ul className="list-item clearfix">
                                <li>Age: At least 18 years</li>
                                <li>Nationality: Bangladeshi</li>
                                <li>Full-Time Job</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* requirements-section end */}

                {/* testimonial-style-two */}
                <section className="testimonial-style-two pt_120 pb_120">
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
                                <TestimonialSlider02 />                        
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
                                <form method="post" action="contact">
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