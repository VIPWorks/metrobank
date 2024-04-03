import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Stock Trading">
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
                                    <h2 className="mb_20">Welcome to CW BANK's Stock Trading Page</h2>
                                    <h6>Unlocking Opportunities in the Stock Market</h6>

                                    <div className="text-box mb_40">
                                        <p>
                                        At CW BANK, we understand the allure and potential of stock trading as a means to grow wealth and achieve financial goals. Our Stock Trading services are tailored to provide you with access to a diverse range of investment opportunities in the stock market. Whether you're a seasoned investor or a novice trader, our platform offers the tools, resources, and support you need to navigate the complexities of stock trading with confidence.
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
                        <h2>Empowering Your Stock Trading Journey:</h2>
                        <p>Stock trading offers an exciting avenue for investors to participate in the growth and success of companies across various industries. At CW BANK, we are committed to empowering you on your stock trading journey by providing:</p>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Comprehensive Stock Market Access</Link></h4>
                                    <p>Gain access to a wide range of stocks listed on major exchanges around the world. From well-established blue-chip companies to promising startups, our platform offers a comprehensive selection of stocks to suit your investment preferences and goals.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Advanced Trading Tools</Link></h4>
                                    <p>Our platform is equipped with advanced trading tools and features to help you analyze market trends, identify investment opportunities, and execute trades with precision. From real-time market data to customizable charting tools, we provide everything you need to stay ahead of the curve in today's fast-paced market environment.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Educational Resources and Insights</Link></h4>
                                    <p>Whether you're new to stock trading or looking to refine your skills, our platform offers a wealth of educational resources and insights to help you make informed investment decisions. From beginner's guides to advanced technical analysis, our resources cater to investors of all levels of experience.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Personalized Support and Guidance</Link></h4>
                                    <p>At CW BANK, we understand that every investor is unique, with individual goals, risk tolerance, and investment preferences. That's why our team of experienced investment professionals is dedicated to providing personalized support and guidance tailored to your specific needs. Whether you have questions about market trends, portfolio diversification, or risk management strategies, we're here to help you every step of the way.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                <section className="key-features pt_120 pb_120">
                    <div className="auto-container">
                        <div className="sec-title mb_70">
                            <h2>Key Features of CW BANK's Stock Trading Services:</h2>
                        </div>
                        <div className="row align-items-center clearfix mb_50">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_one">
                                <div className="image-box pr_90 mr_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box ml_40"> 
                                        <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3>Comprehensive Market Coverage</h3>
                                            <p>Gain access to stocks listed on major exchanges worldwide, including the New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange (LSE), Tokyo Stock Exchange (TSE), and more.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Real-time Market Data</h3>
                                            <p>Stay informed with real-time market data, including stock prices, trading volumes, and market indices, to make timely and informed investment decisions.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Customizable Trading Platforms</h3>
                                            <p>Our trading platform is fully customizable to suit your trading style and preferences. Whether you prefer a simple, intuitive interface or advanced trading features, we offer a range of platforms to meet your needs.</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-1">
                                <div className="image_block_one">
                                    <div className="image-box pl_90 ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box mr_40"> 
                                        <div className="inner-box mb_45">
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3>Risk Management Tools</h3>
                                            <p>Protect your investments and manage risk with our comprehensive suite of risk management tools. From stop-loss orders to portfolio diversification strategies, we provide the tools you need to mitigate risk and safeguard your capital.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Research and Analysis</h3>
                                            <p>Access in-depth research reports, analyst recommendations, and market analysis to help you identify investment opportunities and stay ahead of market trends.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Educational Resources</h3>
                                            <p>Expand your knowledge and skills with our extensive library of educational resources, including articles, videos, webinars, and tutorials on a wide range of topics related to stock trading and investing.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="joinNow-section">
                    <div className="auto-container">
                        <div className="content-box mt_60 mb_60 text-center">
                                <div className="mt_60">
                                    <h3 className="mb_30 highlight">Join CW BANK and Embark on Your Stock Trading Journey Today</h3>
                                    <p className="mb_30 lead_text">Whether you're looking to build a diversified portfolio, generate passive income, or capitalize on short-term trading opportunities, CW BANK's Stock Trading services offer the tools, resources, and support you need to succeed in the dynamic world of stock trading. Join us today and unlock the potential of the stock market to achieve your financial goals.</p>
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