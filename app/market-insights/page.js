import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Market Insights">
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
                                    <h2 className="mb_20">Gain Valuable Intelligence</h2>
                                    

                                    <div className="text-box mb_40">
                                        <p>
                                        Explore CW BANK's Market Insights to gain valuable intelligence and stay informed about the latest developments in the financial markets. Our Market Insights provide comprehensive analysis, commentary, and forecasts across a wide range of asset classes, including forex, stocks, commodities, and cryptocurrencies. Whether you're a seasoned investor or just starting out, our insights offer the information you need to make informed trading decisions and stay ahead of the curve.
                                        </p>
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
                <section className="market-feature-section feature-style-three pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>Why US</h6>
                        <h2>Key Features of Market Insights</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">In-depth Analysis</Link></h4>
                                    <p>Our team of experienced analysts provides in-depth analysis and commentary on market trends, price movements, and key drivers affecting asset prices. From technical analysis to fundamental analysis, our insights cover a variety of perspectives to help you understand market dynamics and identify potential trading opportunities.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Expert Commentary</Link></h4>
                                    <p>Gain insights from industry experts and thought leaders who share their perspectives on market trends, economic events, and geopolitical developments. Our expert commentary provides valuable insights and actionable recommendations to help you navigate the complex world of financial markets.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Forecasting</Link></h4>
                                    <p>Access forecasts and projections for various asset classes, including currency pairs, stock indices, commodity prices, and cryptocurrency markets. Our forecasts are based on rigorous analysis and research, providing you with valuable insights into potential market movements and trends.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Educational Content</Link></h4>
                                    <p>Enhance your trading knowledge and skills with our educational content, which covers a wide range of topics, including technical analysis, fundamental analysis, risk management, and trading psychology. Whether you're a beginner or an experienced trader, our educational content provides valuable insights and guidance to help you succeed in the financial markets.</p>
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
                                    <h3 className="mb_30 highlight">Join CW BANK and Unlock the Potential of Market Insights Today</h3>
                                    <p className="mb_30 lead_text">Explore CW BANK's Market Insights today and gain access to valuable intelligence that can help you make better trading decisions and achieve your financial goals.</p>
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