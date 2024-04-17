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
                      <div className="sec-title mb_20">
                        <h2>Welcome to CW BANK's White Label Solutions page</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Here we offer innovative solutions designed to empower
                          businesses to provide branded financial services to
                          their clients with ease. Whether you're a broker,
                          financial institution, or fintech company, our White
                          Label Solutions offer a streamlined approach to
                          expanding your product offerings and reaching new
                          markets quickly and efficiently.
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
                              "url(assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                        <div
                          className="shape-4"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-3.png)",
                          }}
                        ></div>
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
          <section className="feature-style-three pb_90">
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h6 className="pb_20">Why US</h6>
                <h2>Key Features of CW BANK's White Label Solutions</h2>
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
                      <h4>Empowering Your Brand</h4>
                      <p>
                        Our White Label Solutions allow you to create customized
                        trading platforms branded with your logo and corporate
                        identity. With our easy-to-use platform, you can offer a
                        seamless trading experience to your clients while
                        maintaining brand consistency and identity.
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
                      <h4>Comprehensive Financial Products</h4>
                      <p>
                        Gain access to a wide range of financial products,
                        including forex, commodities, stocks, and
                        cryptocurrencies. Our diverse product offering ensures
                        that you can cater to the diverse needs and preferences
                        of your clients, enhancing their trading experience and
                        satisfaction.
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
                      <h4>Robust Infrastructure and Support</h4>
                      <p>
                        Benefit from our comprehensive back-office support and
                        infrastructure, including risk management, compliance,
                        and customer support. Our dedicated team ensures that
                        your operations run smoothly, allowing you to focus on
                        growing your business and serving your clients
                        effectively.
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
                      <h4>Enhanced Functionality</h4>
                      <p>
                        Integrate seamlessly with third-party tools and
                        technologies to enhance your platform's functionality
                        and features. Whether it's integrating advanced charting
                        tools, analytics, or trading algorithms, our White Label
                        Solutions enable you to offer cutting-edge capabilities
                        to your clients.
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
                      <h4>Marketing and Promotional Support</h4>
                      <p>
                        Receive marketing and promotional support to help you
                        attract and retain clients. From promotional campaigns
                        to targeted advertising, our marketing experts work
                        closely with you to develop strategies that drive client
                        acquisition and retention.
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
                      <h4>Flexible Pricing Models</h4>
                      <p>
                        Choose from flexible pricing models tailored to your
                        business model and growth objectives. Whether it's a
                        fixed fee, revenue share, or transaction-based pricing,
                        our flexible pricing options ensure that you can scale
                        your business profitably and sustainably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-details-content content-one mt_60 mb_60">
                <div className="mt_60">
                  <p className="mb_30">
                    With CW BANK's White Label Solutions, you can leverage our
                    expertise and technology to launch your own branded trading
                    platform and offer a seamless trading experience to your
                    clients. Whether you're looking to expand your product
                    offerings, enhance your brand presence, or attract new
                    clients, our White Label Solutions provide the tools and
                    support you need to succeed in today's competitive
                    marketplace.
                  </p>

                  <h3 className="mb_30">
                    Partner with CW BANK today and unlock the full potential of
                    your brand with our innovative White Label Solutions.
                  </h3>
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
                backgroundImage: "url(assets/images/background/process-bg.jpg)",
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
                      backgroundImage: "url(assets/images/shape/shape-12.png)",
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
                      backgroundImage: "url(assets/images/shape/shape-13.png)",
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

          {/* requirements-section */}

          {/* requirements-section end */}

          {/* testimonial-style-two */}
          <Testimonial />
          {/* testimonial-style-two end */}

          {/* subscribe-section */}
          <section className="subscribe-section">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-5.png)",
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