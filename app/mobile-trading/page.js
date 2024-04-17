import Testimonial from "@/components/sections/home3/Testimonial"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Mobile Trading">
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
                                            <h2 className="mb_20">Trade Anytime, Anywhere</h2>

                                            <div className="text-box mb_40">
                                                <p>
                                                    At CWBANK, we understand that flexibility and convenience are essential when it comes to trading. That's why we offer mobile trading solutions that allow you to trade anytime, anywhere, directly from your smartphone or tablet. Whether you're commuting to work, traveling abroad, or simply relaxing at home, our mobile trading apps ensure that you never miss an opportunity to capitalize on market movements.
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
                            <h2>Our Mobile Trading Apps</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4>User-friendly</h4>
                                    <p>Our mobile trading apps are designed with simplicity and ease of use in mind, making it easy for traders of all levels to navigate the platform and execute trades with just a few taps</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4>Feature-rich</h4>
                                    <p>Despite their compact size, our mobile trading apps are packed with powerful features and tools that provide the same level of functionality as our desktop platforms. From advanced charting tools to real-time market data, our mobile apps offer everything you need to trade with confidence on the go.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4>Secure</h4>
                                    <p>Security is our top priority, which is why our mobile trading apps are built with state-of-the-art security features to ensure that your personal and financial information remains safe and secure at all times.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4>Customizable</h4>
                                    <p>Our mobile trading apps are highly customizable, allowing you to personalize your trading experience to suit your individual preferences and trading style. From customizable watchlists to personalized alerts, you can tailor the app to meet your specific needs.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4>Responsive</h4>
                                    <p>Our mobile trading apps are optimized for performance and responsiveness, ensuring smooth and seamless trading experiences, even on devices with smaller screens and slower internet connections.</p>
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
                                    <h3 className="mb_30 highlight">Join CW BANK and Unlock the Potential of Mobile Trading Today</h3>
                                    <p className="mb_30 lead_text">With our mobile trading apps, you can trade stocks, forex, commodities, and more, directly from the palm of your hand. Experience the freedom and flexibility of mobile trading with CWBANK and take your trading to new heights.</p>
                                </div>
                        </div>
                    </div>
                </section>

          {/* testimonial-style-two */}
          <Testimonial />
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