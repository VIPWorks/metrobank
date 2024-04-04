import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="White Label Solutions">
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
                                    <h2 className="mb_20">Welcome to CW BANK's White Label Solutions</h2>
                                    <h6>Elevate Your Brand with CWBANK</h6>

                                    <div className="text-box mb_40">
                                        <p>
                                            Here your brand meets our platform to create a powerful synergy in the financial services industry. Our White Label Solutions empower businesses like yours – whether you're a broker, financial institution, or fintech company – to offer branded financial services to your clients without the need for extensive infrastructure or development costs. With CWBANK's White Label Solutions, you can expand your product offerings, reach new markets, and elevate your brand to new heights of success.

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
                        <h2>Key Features of CW BANK's White Label Solutions:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-6">
                                <div className="feature-block">
                                    <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image mb_40">
                                            <img src="assets/images/resource/about-4.jpg" alt="" />
                                        </figure>
                                        <h4><Link href="/service">Customizable Trading Platforms</Link></h4>
                                        <p>Make your mark in the financial services landscape by branding our trading platforms with your logo and corporate identity. Our customizable platforms offer advanced features and functionality to deliver a seamless and consistent user experience for your clients. From intuitive interfaces to advanced charting tools, our platforms are designed to meet the diverse needs of your target audience.</p>
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
                                        <h4><Link href="/service">Access to Financial Products</Link></h4>
                                        <p>Diversify your product offerings and enhance your clients' trading experience with access to a wide range of financial products. From forex and commodities to stocks and cryptocurrencies, our extensive product offering allows you to cater to the diverse investment needs of your clients and expand your market reach.</p>
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
                                        <h4><Link href="/service">Back-office Support and Infrastructure</Link></h4>
                                        <p>Focus on growing your business while we handle the backend operations. Benefit from our comprehensive back-office support and infrastructure, including risk management, compliance, and customer support. Our dedicated support team is committed to ensuring regulatory compliance and providing assistance whenever you need it.</p>
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
                                        <h4><Link href="/service">Integration with Third-party Tools</Link></h4>
                                        <p>Enhance the functionality and performance of our platforms by integrating them with third-party tools and technologies. Whether you need advanced charting tools, analytics solutions, or trading algorithms, our White Label Solutions offer seamless integration options to meet your specific requirements and enhance your competitive edge.</p>
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
                                        <h4><Link href="/service">Marketing and Promotional Support</Link></h4>
                                        <p>Attract and retain clients with our marketing and promotional support. From marketing materials and promotional campaigns to educational resources and market insights, we provide the tools and resources you need to effectively promote your branded financial services and grow your business.</p>
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
                                    {/* <h3 className="mb_30 highlight">Unlock Your Potential with CWBANK</h3> */}
                                    <p className="mb_30 lead_text">Partner with CWBANK's White Label Solutions and unlock the full potential of your brand. Whether you're looking to enhance your product offerings, reach new markets, or elevate your brand presence, our White Label Solutions offer the flexibility, scalability, and reliability you need to succeed in today's competitive market. Contact us today to learn more about our White Label Solutions and how we can help you achieve your business goals.</p>
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