import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Cryptocurrencies Trading"
      >
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
                          <h2 className="mb_20">
                            Welcome to CW BANK's Cryptocurrency Trading Page
                          </h2>
                          <h6>Embracing the Future of Digital Assets</h6>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we recognize the transformative
                              potential of cryptocurrencies as a groundbreaking
                              asset class reshaping the financial landscape. Our
                              Cryptocurrency Trading services are designed to
                              provide you with access to the dynamic world of
                              digital assets. Whether you're a seasoned crypto
                              trader or new to the space, our platform offers
                              the tools, resources, and support you need to
                              participate in the exciting cryptocurrency market
                              with confidence.
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
                        <div
                          className="shape-3"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                        <div
                          className="shape-4"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-3.png)",
                          }}
                        ></div>
                      </div>
                      <video width="450" height="450" autoPlay muted loop>
                        <source
                          src="/assets/images/resource/cryptocurrencies.mp4"
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* feature-style-three */}
          <section className="market-feature-section feature-style-three pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h6 className="pb_20">Why US</h6>
                <h2>Empowering Your Cryptocurrency Trading Experience</h2>
                <p>
                  Cryptocurrency trading offers unparalleled opportunities for
                  investors to capitalize on the rapid growth and innovation
                  within the digital asset space. At CW BANK, we are committed
                  to empowering you on your cryptocurrency trading journey by
                  providing:
                </p>
              </div>
              <div className="row clearfix">
                <div className="feature-block">
                  <div
                    className="service-feature-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-5"></i>
                      </div>
                      <h4>Comprehensive Market Access</h4>
                      <p>
                        Gain access to a diverse range of cryptocurrencies,
                        including Bitcoin, Ethereum, Ripple, Litecoin, and many
                        more. Our platform offers a comprehensive selection of
                        cryptocurrencies to suit your trading preferences and
                        investment objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-block">
                  <div
                    className="service-feature-block-one wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-6"></i>
                      </div>
                      <h4>Advanced Trading Platforms</h4>
                      <p>
                        Our platform is equipped with advanced trading tools and
                        features designed to help you analyze market trends,
                        execute trades, and manage risk effectively. Whether you
                        prefer a simple, intuitive interface or advanced
                        charting tools, we provide everything you need to make
                        informed trading decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-block">
                  <div
                    className="service-feature-block-one wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-7"></i>
                      </div>
                      <h4>Educational Resources and Insights</h4>
                      <p>
                        Whether you're new to cryptocurrency trading or looking
                        to enhance your skills, our platform offers a wealth of
                        educational resources and insights to help you succeed.
                        From beginner's guides to advanced trading strategies,
                        our resources cater to traders of all levels of
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-block">
                  <div
                    className="service-feature-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-5"></i>
                      </div>
                      <h4>Personalized Support and Guidance</h4>
                      <p>
                        At CW BANK, we understand that every trader is unique,
                        with individual trading goals, risk tolerance, and
                        investment preferences. That's why our team of
                        experienced cryptocurrency specialists is dedicated to
                        providing personalized support and guidance tailored to
                        your specific needs. Whether you have questions about
                        market analysis, trading strategies, or risk management,
                        we're here to assist you every step of the way.
                      </p>
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
                <h2>
                  Key Features of CW BANK's Cryptocurrency Trading Services
                </h2>
              </div>
              <div className="row align-items-center clearfix mb_50">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_one">
                    <div className="image-box pr_90 mr_40">
                      <div
                        className="image-shape"
                        style={{
                          backgroundImage:
                            "url(/assets/images/shape/shape-3.png)",
                        }}
                      ></div>
                      <figure className="image">
                        <img
                          src="/assets/images/resource/cryptocurrencies-1.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box ml_40">
                      <div className="inner-box mb_45">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-10"></i>
                          </div>
                          <h3>Wide Range of Cryptocurrencies</h3>
                          <p>
                            Gain access to a diverse range of cryptocurrencies
                            to suit your trading preferences and investment
                            objectives. Whether you're interested in major
                            cryptocurrencies like Bitcoin and Ethereum or
                            altcoins with unique value propositions, our
                            platform offers a comprehensive selection of digital
                            assets.
                          </p>
                        </div>
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-11"></i>
                          </div>
                          <h3>Real-time Market Data</h3>
                          <p>
                            Stay informed with real-time market data, including
                            cryptocurrency prices, trading volumes, and market
                            sentiment indicators, to make timely and informed
                            trading decisions.
                          </p>
                        </div>
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-11"></i>
                          </div>
                          <h3>Customizable Trading Platforms</h3>
                          <p>
                            Our trading platform is fully customizable to suit
                            your trading style and preferences. Whether you
                            prefer a simple, intuitive interface or advanced
                            trading features, we offer a range of platforms to
                            meet your needs.
                          </p>
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
                      <div
                        className="image-shape"
                        style={{
                          backgroundImage:
                            "url(/assets/images/shape/shape-3.png)",
                        }}
                      ></div>
                      <figure className="image">
                        <img
                          src="/assets/images/resource/cryptocurrencies-2.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box mr_40">
                      <div className="inner-box mb_45">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-10"></i>
                          </div>
                          <h3>Risk Management Tools</h3>
                          <p>
                            Protect your investments and manage risk with our
                            comprehensive suite of risk management tools. From
                            stop-loss orders to position sizing strategies, we
                            provide the tools you need to mitigate risk and
                            safeguard your capital in the volatile
                            cryptocurrency market.
                          </p>
                        </div>
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-11"></i>
                          </div>
                          <h3>Research and Analysis</h3>
                          <p>
                            Access in-depth research reports, market analysis,
                            and cryptocurrency insights to help you identify
                            trading opportunities and stay ahead of market
                            trends.
                          </p>
                        </div>
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-11"></i>
                          </div>
                          <h3>Educational Resources</h3>
                          <p>
                            Expand your knowledge and skills with our extensive
                            library of educational resources, including
                            articles, videos, webinars, and tutorials on a wide
                            range of topics related to cryptocurrency trading
                            and blockchain technology.
                          </p>
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
                  <h3 className="mb_30 highlight">
                    Join CW BANK and Explore the Exciting World of
                    Cryptocurrency Trading Today
                  </h3>
                  <p className="mb_30 lead_text">
                    Whether you're looking to diversify your investment
                    portfolio, hedge against fiat currency inflation, or
                    participate in the innovation of blockchain technology, CW
                    BANK's Cryptocurrency Trading services offer the tools,
                    resources, and support you need to succeed in the dynamic
                    world of digital assets. Join us today and embrace the
                    future of finance with cryptocurrency trading.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* testimonial-style-two */}
          <Testimonial />
          {/* testimonial-style-two end */}

          {/* subscribe-section */}
          <section className="subscribe-section">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-5.png)",
              }}
            ></div>
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
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                        />
                        <button type="submit" className="theme-btn btn-two">
                          Subscribe Now
                        </button>
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
  );
}
