import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="White Label Solutions"
      >
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
                          <h2 className="mb_20">
                            Welcome to CW BANK's White Label Solutions
                          </h2>
                          <h6>Elevate Your Brand with CWBANK</h6>

                          <div className="text-box mb_40">
                            <p>
                              Here your brand meets our platform to create a
                              powerful synergy in the financial services
                              industry. Our White Label Solutions empower
                              businesses like yours – whether you're a broker,
                              financial institution, or fintech company – to
                              offer branded financial services to your clients
                              without the need for extensive infrastructure or
                              development costs. With CWBANK's White Label
                              Solutions, you can expand your product offerings,
                              reach new markets, and elevate your brand to new
                              heights of success.
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
                        <img
                          src="/assets/images/resource/white-label-solutions.jpg"
                          alt=""
                        />
                      </figure>
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
                <h2>Key Features of CW BANK's White Label Solutions</h2>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/white-label-solutions-1.jpeg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Customizable Trading Platforms
                        </h2>
                        <p className="mb_30">
                          Make your mark in the financial services landscape by
                          branding our trading platforms with your logo and
                          corporate identity. Our customizable platforms offer
                          advanced features and functionality to deliver a
                          seamless and consistent user experience for your
                          clients. From intuitive interfaces to advanced
                          charting tools, our platforms are designed to meet the
                          diverse needs of your target audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/white-label-solutions-2.jpeg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Access to Financial Products
                        </h2>
                        <p className="mb_30">
                          Diversify your product offerings and enhance your
                          clients' trading experience with access to a wide
                          range of financial products. From forex and
                          commodities to stocks and cryptocurrencies, our
                          extensive product offering allows you to cater to the
                          diverse investment needs of your clients and expand
                          your market reach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/white-label-solutions-3.jpeg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Back-office Support and Infrastructure
                        </h2>
                        <p className="mb_30">
                          Focus on growing your business while we handle the
                          backend operations. Benefit from our comprehensive
                          back-office support and infrastructure, including risk
                          management, compliance, and customer support. Our
                          dedicated support team is committed to ensuring
                          regulatory compliance and providing assistance
                          whenever you need it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/broker-partnerships-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Integration with Third-party Tools
                        </h2>
                        <p className="mb_30">
                          Enhance the functionality and performance of our
                          platforms by integrating them with third-party tools
                          and technologies. Whether you need advanced charting
                          tools, analytics solutions, or trading algorithms, our
                          White Label Solutions offer seamless integration
                          options to meet your specific requirements and enhance
                          your competitive edge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/white-label-solutions-5.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Marketing and Promotional Support
                        </h2>
                        <p className="mb_30">
                          Attract and retain clients with our marketing and
                          promotional support. From marketing materials and
                          promotional campaigns to educational resources and
                          market insights, we provide the tools and resources
                          you need to effectively promote your branded financial
                          services and grow your business.
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
                    Unlock Your Potential with CWBANK
                  </h3>
                  <p className="mb_30 lead_text">
                    Partner with CWBANK's White Label Solutions and unlock the
                    full potential of your brand. Whether you're looking to
                    enhance your product offerings, reach new markets, or
                    elevate your brand presence, our White Label Solutions offer
                    the flexibility, scalability, and reliability you need to
                    succeed in today's competitive market. Contact us today to
                    learn more about our White Label Solutions and how we can
                    help you achieve your business goals.
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
