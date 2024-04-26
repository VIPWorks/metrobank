import Testimonial from "@/components/sections/home3/Testimonial"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Liquidity Providers"
      >
        <div>
          {/* about-style-two */}
          <section className="about-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>Welcome to our Liquidity Providers page</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Here we invite you to explore our tailored liquidity
                          solutions designed to meet the diverse needs of
                          institutional clients, brokers, and financial
                          institutions operating in the forex and financial
                          markets.
                        </p>
                        <p>
                          At CWBank, we specialize in delivering deep liquidity
                          pools, lightning-fast execution, and competitive
                          pricing to support your trading activities and
                          optimize your execution efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
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
                      <figure className="image">
                        <img src="/assets/images/resource/liquidity-providers.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* feature-style-three */}
          <section className="feature-style-three pb_90">
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h6 className="pb_20">Why US</h6>
                <h2>Our Liquidity Services</h2>
              </div>
              <div className="row clearfix">
                <div className="feature-block">
                  <div
                    className="service-feature-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-5"></i>
                      </div>
                      <h4>Direct Market Access</h4>
                      <p>
                        Gain direct access to major liquidity providers,
                        ensuring you have access to the best prices and
                        liquidity from around the globe.
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
                      <div className="icon-box">
                        <i className="icon-6"></i>
                      </div>
                      <h4>Tight Spreads and Low Latency Execution</h4>
                      <p>
                        Benefit from highly competitive pricing with tight
                        spreads and low latency execution, allowing you to
                        execute trades swiftly and efficiently.
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
                      <div className="icon-box">
                        <i className="icon-7"></i>
                      </div>
                      <h4>Customizable Liquidity Solutions</h4>
                      <p>
                        We offer customizable liquidity solutions tailored to
                        match your trading volume and specific requirements,
                        ensuring you have the flexibility you need to succeed in
                        the market.
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
                      <div className="icon-box">
                        <i className="icon-5"></i>
                      </div>
                      <h4>Wide Range of Instruments</h4>
                      <p>
                        Access a wide range of financial instruments, including
                        currency pairs, commodities, indices, and
                        cryptocurrencies, providing you with ample trading
                        opportunities across various asset classes.
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
                      <div className="icon-box">
                        <i className="icon-6"></i>
                      </div>
                      <h4>Advanced Trading Technology</h4>
                      <p>
                        TOur advanced trading technology and infrastructure
                        empower you with the tools and resources needed to stay
                        ahead of the market and execute trades with precision.
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
                      <div className="icon-box">
                        <i className="icon-7"></i>
                      </div>
                      <h4>Dedicated Support</h4>
                      <p>
                        Our team of liquidity experts is dedicated to providing
                        you with unparalleled support and guidance, ensuring you
                        have the assistance you need to navigate the
                        complexities of the financial markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-details-content content-one mt_60 mb_60">
                <h3 className="mb_30">
                  Whether you're a high-frequency trader, asset manager, or
                  broker-dealer, our Liquidity Solutions are designed to enhance
                  your trading performance and optimize your execution
                  efficiency.
                </h3>
                <h3 className="mb_30">
                  Additionally, our Liquidity & Execution Solutions offer:
                </h3>

                <ul className="list-style-one clearfix">
                  <li>
                    Prices sourced from an aggregated stream of Tier 1 banks and
                    non-bank liquidity providers, ensuring greater liquidity and
                    access to the best prices globally.
                  </li>
                  <li>
                    Highly competitive institutional pricing on over 130
                    financial instruments.
                  </li>
                  <li>
                    Market Impact analysis and customized liquidity management
                    to help you make informed trading decisions.
                  </li>
                  <li>
                    Deliverable Forex services, including full amount trading,
                    segregated corporate bank accounts, multicurrency accounts
                    with conversion options, and online internet banking portal.
                  </li>
                  <li>
                    Credit facility and give-up options, including prime broker
                    give-up setups, credit lines for trading, bridge loans, and
                    Lombard loans.
                  </li>
                  <li>
                    Proprietary FX platform "CFXD" with TradingView charts, MT4
                    and MT5 Gateway Solutions, and a proprietary FIX API fully
                    integrated with industry-leading platforms.
                  </li>
                </ul>

                <div className="mt_60">
                  <h3 className="mb_30">
                    <span>
                      Ready to experience the benefits of our Liquidity
                      Solutions?
                    </span>
                  </h3>
                  <p>
                    Contact us to start your winning partnership today. Whether
                    you're looking to optimize your trading performance, improve
                    your execution efficiency, or expand your trading
                    capabilities, we're here to help you achieve your goals in
                    the dynamic world of finance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* feature-style-three end */}
          
          {/* process-section */}
          <section className="process-section centred pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/background/process-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_110">
                <h6>Our process</h6>
                <h2>Open Trading Accounts</h2>
              </div>
              <div className="inner-container">
                <div className="processing-block-one">
                  <div
                    className="arrow-shape"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-12.png)",
                    }}
                  ></div>
                  <div className="inner-box">
                    <span className="count-text">
                      01 <br />
                      Step
                    </span>
                    <h3>
                      Fill In The <br />
                      Required Form
                    </h3>
                    <p>Provide accurate details in the form to proceed.</p>
                  </div>
                </div>
                <div className="processing-block-one">
                  <div
                    className="arrow-shape"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-13.png)",
                    }}
                  ></div>
                  <div className="inner-box">
                    <span className="count-text">
                      02 <br />
                      Step
                    </span>
                    <h3>
                      Submit All <br />
                      Your Documents
                    </h3>
                    <p>Ensure all necessary documents are submitted</p>
                  </div>
                </div>
                <div className="processing-block-one">
                  <div className="inner-box">
                    <span className="count-text">
                      03 <br />
                      Step
                    </span>
                    <h3>
                      Get Your <br />
                      Desire Account
                    </h3>
                    <p>Receive your customized bank account</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* process-section end */}

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