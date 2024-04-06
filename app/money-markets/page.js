import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Money Markets">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_three">
                                <div className="content-box mr_110">
                                    
                                    <div className="text-box mb_40">
                                        <div className="sec-title mb_20">
                                    <h2 className="mb_20">Welcome to CW BANK's Money Market Page</h2>
                                    <h6>Unlocking Opportunities in Term & Fiduciary Deposits</h6>

                                    <div className="text-box mb_40">
                                        <p>
                                        At CW BANK, we understand the importance of maximizing the potential of your deposits while ensuring security and liquidity. Our Money Market services offer you access to term and fiduciary deposits with attractive interest rates, providing you with an opportunity to earn higher returns on your idle funds while maintaining flexibility and peace of mind.
                                        </p>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
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
                        <h2>Term & Fiduciary Deposits:</h2>
                        <p>Term and fiduciary deposits are excellent options for investors seeking to earn higher interest rates on their deposits with fixed or flexible placement durations. Here's why you should consider term and fiduciary deposits as part of your investment strategy:</p>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4>Attractive Interest Rates</h4>
                                    <p>Enjoy higher interest rates compared to traditional savings accounts, with the flexibility to choose fixed or flexible placement durations that suit your investment preferences.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4>Reputable Counterparties</h4>
                                    <p>CW BANK collaborates with Swissquote and a selection of nine partner banks, ensuring that your deposits are held with reputable financial institutions with strong credit ratings and stability.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4>Lombard Loan Opportunities</h4>
                                    <p>Benefit from accrued liquidities by leveraging your term or fiduciary deposit to obtain a Lombard loan. Pledge up to 90% of the value of your deposited funds and seize new investment opportunities while your money continues to generate interest.</p>
                                </div>
                                </div>
                            </div>
                            {/* <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4>Personalized Support and Guidance</h4>
                                    <p>At CW BANK, we understand that every trader is unique, with individual trading goals, risk tolerance, and investment preferences. That's why our team of experienced forex specialists is dedicated to providing personalized support and guidance tailored to your specific needs. Whether you have questions about market analysis, trading strategies, or risk management, we're here to assist you every step of the way.</p>
                                </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                <section className="key-features pt_120 pb_120">
                    <div className="auto-container">
                        <div className="sec-title mb_70">
                            <h2>Interest Rates and Conditions</h2>
                            <p>Our Money Market services offer competitive interest rates across various currencies, including CHF, EUR, and USD. Here's an overview of the interest rates and conditions for term and fiduciary deposits</p>
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
                                            <h3>Placement Duration</h3>
                                            <p>Fixed from 1 to 12 months or flexible with a 48-hour notice period for call deposits.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Minimum Investment Amount</h3>
                                            <p>Start with CHF/EUR/USD 100,000 (or higher, depending on the counterparty) to begin earning attractive interest rates on your deposits.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Payment of Interests</h3>
                                            <p>Interests are paid on maturity for fixed placements and quarterly for call placements, providing you with regular income streams.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Value Date for Operations</h3>
                                            <p>Enjoy a swift value date for operations with a 48-hour (D+2) processing time.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Order Placement</h3>
                                            <p>Place your orders conveniently by telephone on +41 44 825 88 88, and our dedicated team will assist you with the process.</p>
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
                                            <h3>Counterparty</h3>
                                            <p>Choose CW BANK or one of our nine partner banks as your counterparty, ensuring flexibility and choice in managing your deposits.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Commission on Paid Interests</h3>
                                            <p>Benefit from competitive commission rates, with commission percentages based on the amount of nominal in CHF/EUR/USD or equivalent in EUR.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Withholding Tax</h3>
                                            <p>Withholding tax of 35% is applicable on interests for term deposits, while fiduciary deposits are exempt from withholding tax.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Increase/Decrease of Capital</h3>
                                            <p>Manage your call deposits effectively with a CHF/EUR/USD 25 or equivalent fee for capital increase or decrease.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Ancillary Fees</h3>
                                            <p>Swiss residents may be subject to VAT on commissions paid, ensuring transparency and compliance with regulatory requirements.</p>
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
                                    <h3 className="mb_30 highlight">Unlock Opportunities with Lombard Loans</h3>
                                    <p className="mb_30 lead_text">Did you know? You can easily request a Lombard Loan with attractive conditions by pledging up to 90% of the value of the funds locked in a term or fiduciary deposit. This means that even as your money is generating interest, you can rapidly obtain the liquidity to seize new investment opportunities at any time.</p>
                                </div>
                        </div>
                    </div>
                </section>

                <section className="about-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="text-box mb_40">
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">Start Maximizing Your Deposits Today Ahead</h3>

                          <div className="text-box mb_40">
                            <p>
                            Explore the potential of term and fiduciary deposits with CW BANK's Money Market services. Contact us today at +41 44 825 88 88 to inquire about our latest rates and place your order. Let us help you unlock the opportunities in the money market and optimize the returns on your deposits.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

                {/* process-section */}
                
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