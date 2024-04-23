import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Institutional Solutions"
      >
        <div>
          {/* about-style-two */}
          <section className="pt_120 pb_120">
            <div className="pattern-layer rotate-me"></div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_three">
                    <div className="image-box pr_110">
                      <div className="image-shape">
                        <div
                          className="shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-3.png)",
                          }}
                        ></div>
                        <div
                          className="shape-2"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                      </div>
                      <figure className="image">
                        <img src="/assets/images/resource/about-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pb_60">
                      <div className="sec-title mb_10">
                        <h2 className="highlight">
                          Welcome to CWBANK's Institutional Solutions
                        </h2>
                        {/* <h6>Elevating Your Institutional Trading Experience</h6> */}
                      </div>
                      <div className="text-box">
                        <p>
                          Here tailored strategies meet institutional success.
                          We understand that institutional clients have unique
                          needs and requirements that demand specialized
                          attention and expertise. That's why we've curated a
                          suite of institutional services designed to empower
                          hedge funds, asset managers, pension funds, and other
                          institutional entities to thrive in today's intricate
                          financial landscape.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2 className="highlight">
                          Tailored Solutions for Institutional Success
                        </h2>
                      </div>
                      <div className="text-box">
                        <p>
                          At CWBANK, we recognize the importance of customized
                          solutions that cater to the specific needs of
                          institutional clients. Our Institutional Solutions
                          encompass a range of services and offerings crafted to
                          deliver performance, reliability, and transparency,
                          ensuring that institutional clients can navigate the
                          complexities of the financial markets with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* feature-style-three */}
          <section className="calculator-section vision market-feature-section pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_50 centred">
                <h6 className="pb_10">Why US</h6>
                <h2>Our Institutional Solutions Include</h2>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img src="/assets/images/service/service-12.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Customized Trading Platforms
                        </h2>
                        <p className="mb_30">
                          Gain access to our institutional-grade trading
                          platforms, meticulously engineered to meet the
                          sophisticated trading needs of institutional clients.
                          Equipped with advanced order execution capabilities,
                          real-time market data, and customizable features, our
                          platforms empower institutions to execute trades
                          efficiently and effectively, even in high-volume
                          environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img src="/assets/images/service/service-7.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Liquidity Management
                        </h2>
                        <p className="mb_30">
                          Leverage our liquidity management solutions to access
                          deep liquidity pools and competitive pricing from
                          top-tier liquidity providers. Our solutions enable
                          institutions to execute large orders with minimal
                          slippage, ensuring optimal trading performance across
                          various market conditions. With CW BANK's liquidity
                          management services, institutions can execute trades
                          with confidence and precision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img src="/assets/images/service/service-12.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">Risk Management</h2>
                        <p className="mb_30">
                          Mitigate risk and safeguard your investment capital
                          with our comprehensive risk management solutions. Our
                          team of experts collaborates closely with
                          institutional clients to develop tailored risk
                          mitigation strategies that align with their investment
                          objectives and risk tolerance. From portfolio
                          diversification to hedging strategies, we provide
                          institutions with the tools and expertise needed to
                          navigate market volatility and protect their assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img src="/assets/images/service/service-7.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Regulatory Compliance
                        </h2>
                        <p className="mb_30">
                          CWBANK is committed to upholding the highest standards
                          of regulatory compliance and transparency. We work
                          diligently to ensure that our institutional clients
                          remain compliant with regulatory requirements and
                          industry best practices, providing them with peace of
                          mind and confidence in our services. With CWBANK,
                          institutions can trust that their trading activities
                          are conducted in full compliance with applicable
                          regulations.
                        </p>
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
                  <h3 className="mb_30 highlight">
                    Partner with CW BANK for Institutional Excellence
                  </h3>
                  <p className="mb_30 lead_text">
                    Partnering with CW BANK for institutional solutions means
                    gaining access to a trusted partner dedicated to your
                    success. Our Institutional Solutions are designed to deliver
                    performance, reliability, and transparency, enabling
                    institutions to achieve their investment goals with
                    confidence. Contact us today to learn more about how CW BANK
                    can support your institutional trading needs and elevate
                    your institutional trading experience.
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
