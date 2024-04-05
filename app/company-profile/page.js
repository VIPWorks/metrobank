import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Company Profile"
      >
        <div>
          {/* about-style-two */}
          <section className="about-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="text-box mb_40">
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">
                            A Leading Financial Institution
                          </h3>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we pride ourselves on being a leading
                              financial institution dedicated to providing
                              innovative solutions and exceptional service to
                              our clients. Our company profile reflects our
                              commitment to excellence, integrity, and
                              transparency in everything we do.
                            </p>
                          </div>
                        </div>
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">About CW BANK</h3>

                          <div className="text-box mb_40">
                            <p>
                              Established in [Year], CW BANK has quickly emerged
                              as a trusted name in the financial industry. With
                              a comprehensive range of services and a global
                              presence, we serve a diverse clientele, including
                              individual investors, businesses, and
                              institutional clients. Our commitment to
                              delivering value and exceeding expectations has
                              earned us a reputation for excellence and
                              reliability.
                            </p>
                          </div>
                        </div>
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">Our Vision</h3>

                          <div className="text-box mb_40">
                            <p>
                              Our vision at CW BANK is to empower individuals
                              and businesses to achieve their financial goals
                              and aspirations. We strive to be the preferred
                              choice for clients seeking innovative financial
                              solutions, trusted advice, and exceptional
                              service. By leveraging our expertise, technology,
                              and global network, we aim to create value for our
                              clients and stakeholders.
                            </p>
                          </div>
                        </div>
                        
                        {/* feature-style-three */}
                        <section className="market-feature-section feature-style-three pt_120 pb_90">
                            <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                            <div className="auto-container">
                                <div className="sec-titfle mb_70 centred">
                                    <h2>Key Highlights</h2>
                                </div>
                                <div className="row clearfix">
                                    <div className="feature-block">
                                        <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="shape"></div>
                                            <div className="icon-box"><i className="icon-5"></i></div>
                                            <h4>Global Reach</h4>
                                            <p>With a presence in [Number] countries, CW BANK serves clients around the world, providing access to international markets and opportunities.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="feature-block">
                                        <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="shape"></div>
                                            <div className="icon-box"><i className="icon-6"></i></div>
                                            <h4>Comprehensive Services</h4>
                                            <p>From investment banking and wealth management to trading and advisory services, CW BANK offers a comprehensive suite of services tailored to the diverse needs of our clients.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="feature-block">
                                        <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="shape"></div>
                                            <div className="icon-box"><i className="icon-7"></i></div>
                                            <h4>Innovative Technology</h4>
                                            <p>We are committed to leveraging the latest technologies and digital platforms to enhance our products and services, providing clients with seamless access to our offerings.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="feature-block">
                                        <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="shape"></div>
                                            <div className="icon-box"><i className="icon-5"></i></div>
                                            <h4>Trusted Partner</h4>
                                            <p>At CW BANK, trust is at the core of everything we do. We prioritize transparency, integrity, and professionalism in all our interactions, building long-lasting relationships with our clients based on mutual respect and trust.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* feature-style-three end */}

                        <div className="sec-title mb_20">
                            <br/>
                          <h3 className="mb_20">Our Team</h3>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, our team is our greatest asset.
                              Comprising experienced professionals from diverse
                              backgrounds, we bring a wealth of expertise and
                              knowledge to our clients. From financial analysts
                              and investment advisors to technology specialists
                              and customer support representatives, our team is
                              dedicated to delivering value and excellence to
                              our clients.
                            </p>
                          </div>
                        </div>
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">Corporate Governance</h3>

                          <div className="text-box mb_40">
                            <p>
                              We adhere to the highest standards of corporate
                              governance, ensuring transparency, accountability,
                              and ethical behavior in all our operations. Our
                              commitment to good governance is reflected in our
                              policies, procedures, and decision-making
                              processes, fostering trust and confidence among
                              our clients and stakeholders.
                            </p>
                          </div>
                        </div>
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">Social Responsibility</h3>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we recognize the importance of giving
                              back to the communities in which we operate.
                              Through our corporate social responsibility
                              initiatives, we support various charitable
                              organizations and community projects, making a
                              positive impact on society and contributing to the
                              well-being of future generations.
                            </p>
                          </div>
                        </div>
                        <div className="sec-title mb_20">
                          <h3 className="mb_20">Join Us</h3>

                          <div className="text-box mb_40">
                            <p>
                              Whether you're an individual investor looking to
                              grow your wealth or a business seeking innovative
                              financial solutions, we invite you to join us on
                              this journey. Discover the difference that CW BANK
                              can make in your financial success and experience
                              the excellence that sets us apart.
                            </p>
                            <br />
                            <strong>
                              Thank you for choosing CW BANK as your trusted
                              partner in financial success.
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* testimonial-style-two */}
          <section className="testimonial-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                  <div className="sec-title mr_70">
                    <h6>Testimonials</h6>
                    <h2>Love from Happy Clients</h2>
                    <p>
                      Amet dui scelerisque habitant eget tincidunt facilisis
                      pretium lorem ipsum dilore.{" "}
                    </p>
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
