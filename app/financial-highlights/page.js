"use client";
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Financial Highlights"
      >
        <div>
          
          <section className="financial-highlight-section about-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="text-box mb_40">
                        <div className="sec-title mb_20">
                          <h2 className="mb_20">
                            A Snapshot of CW BANK's Performance
                          </h2>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we take pride in our financial
                              performance, which reflects our commitment to
                              delivering value to our clients, employees, and
                              shareholders. Our financial highlights provide a
                              snapshot of our achievements, growth trajectory,
                              and strategic direction, showcasing our strength,
                              resilience, and ability to navigate the
                              ever-evolving financial landscape.
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

          <section className="market-feature-section feature-style-three pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h2>Key Financial Metrics</h2>
                <p>
                  As a leading financial institution, CW BANK continuously
                  strives for excellence in financial performance. Here are some
                  key metrics that highlight our financial strength and
                  stability:
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
                      <h4>Revenue Growth</h4>
                      <p>
                        Our revenue growth reflects our ability to attract and
                        retain clients, expand our product offerings, and
                        capitalize on emerging opportunities in the market. With
                        a focus on innovation and client-centricity, we have
                        achieved robust revenue growth year over year,
                        positioning us as a trusted partner for individuals and
                        businesses seeking financial success.
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
                      <h4>Profitability</h4>
                      <p>
                        CW BANK's profitability is a testament to our prudent
                        risk management, operational efficiency, and strategic
                        investments. We consistently generate strong profits,
                        allowing us to reinvest in our business, reward our
                        shareholders, and support our long-term growth
                        objectives.
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
                      <h4>Asset Quality</h4>
                      <p>
                        Maintaining high asset quality is a top priority for CW
                        BANK. Our disciplined approach to risk management and
                        credit underwriting ensures the quality and resilience
                        of our loan portfolio, minimizing credit losses and
                        preserving shareholder value.
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
                      <h4>Capital Adequacy</h4>
                      <p>
                        CW BANK maintains a robust capital position to support
                        our growth initiatives and withstand economic
                        uncertainties. Our capital adequacy ratios exceed
                        regulatory requirements, providing confidence to our
                        clients, counterparties, and investors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="service-style-two mt_150 pb_120">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title centred">
                <h2 className="">Strategic Investments and Initiatives</h2>
                <p className="pb_30">
                  CW BANK is committed to driving sustainable growth and
                  creating long-term value for our stakeholders. We continually
                  invest in our people, technology, and infrastructure to
                  enhance our capabilities, expand our market reach, and deliver
                  innovative solutions to our clients. Some of our strategic
                  investments and initiatives include:
                </p>
                <div className="tabs-box">
                  <div className="tab-btn-box p_relative mb_100">
                    <ul className="tab-btns tab-buttons" role="tablist">
                      <li className="nav-link" onClick={() => handleOnClick(1)}>
                        <a
                          className={
                            activeIndex == 1 ? "nav-link active" : "nav-link"
                          }
                        >
                          <span>Digital Transformation</span>
                        </a>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(2)}>
                        <a
                          className={
                            activeIndex == 2 ? "nav-link active" : "nav-link"
                          }
                        >
                          <span>Product Innovation</span>
                        </a>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(3)}>
                        <a
                          className={
                            activeIndex == 3 ? "nav-link active" : "nav-link"
                          }
                        >
                          <span>Expansion and Diversification</span>
                        </a>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(4)}>
                        <a
                          className={
                            activeIndex == 4 ? "nav-link active" : "nav-link"
                          }
                        >
                          <span>
                            Sustainability and Corporate Responsibility
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div
                      className={
                        activeIndex == 1
                          ? "tab-pane fadeInUp animated show active"
                          : "tab-pane fadeInUp animated"
                      }
                    >
                      <div className="row clearfix align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_four">
                            <div className="content-box mr_110">
                              <h2>Digital Transformation</h2>
                              <p>
                                We are investing in digital technologies and
                                platforms to enhance the client experience,
                                streamline operations, and drive efficiency
                                across our organization. Our digital
                                transformation initiatives aim to leverage data
                                analytics, automation, and artificial
                                intelligence to deliver personalized, seamless,
                                and intuitive banking solutions to our clients.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image-box ml_40">
                            <div
                              className="image-shape"
                              style={{
                                backgroundImage:
                                  "url(assets/images/shape/shape-3.png)",
                              }}
                            ></div>
                            <figure className="image">
                              <img
                                src="assets/images/service/service-1.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 2
                          ? "tab-pane fadeInUp animated show active"
                          : "tab-pane fadeInUp animated"
                      }
                    >
                      <div className="row clearfix align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_four">
                            <div className="content-box mr_110">
                              <h2>Product Innovation</h2>
                              <p>
                                {" "}
                                CW BANK is committed to innovation, continuously
                                introducing new products and services to meet
                                the evolving needs of our clients. From
                                cutting-edge trading platforms to innovative
                                investment products, we strive to provide our
                                clients with access to the latest financial
                                tools and technologies to help them achieve
                                their financial goals.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image-box ml_40">
                            <div
                              className="image-shape"
                              style={{
                                backgroundImage:
                                  "url(assets/images/shape/shape-3.png)",
                              }}
                            ></div>
                            <figure className="image">
                              <img
                                src="assets/images/service/service-2.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 3
                          ? "tab-pane fadeInUp animated show active"
                          : "tab-pane fadeInUp animated"
                      }
                    >
                      <div className="row clearfix align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_four">
                            <div className="content-box mr_110">
                              <h2>Expansion and Diversification</h2>
                              <p>
                                We are focused on expanding our presence in key
                                markets and diversifying our revenue streams to
                                reduce risk and enhance resilience. Through
                                organic growth initiatives and strategic
                                partnerships, we aim to capture new
                                opportunities and strengthen our position as a
                                leading financial services provider globally.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image-box ml_40">
                            <div
                              className="image-shape"
                              style={{
                                backgroundImage:
                                  "url(assets/images/shape/shape-3.png)",
                              }}
                            ></div>
                            <figure className="image">
                              <img
                                src="assets/images/service/service-3.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 4
                          ? "tab-pane fadeInUp animated show active"
                          : "tab-pane fadeInUp animated"
                      }
                    >
                      <div className="row clearfix align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_four">
                            <div className="content-box mr_110">
                              <h2>
                                Sustainability and Corporate Responsibility
                              </h2>
                              <p>
                                CW BANK is committed to corporate responsibility
                                and sustainability, integrating environmental,
                                social, and governance (ESG) principles into our
                                business practices and decision-making
                                processes. We are dedicated to making a positive
                                impact on society, supporting community
                                development initiatives, and promoting
                                environmental stewardship.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image-box ml_40">
                            <div
                              className="image-shape"
                              style={{
                                backgroundImage:
                                  "url(assets/images/shape/shape-3.png)",
                              }}
                            ></div>
                            <figure className="image">
                              <img
                                src="assets/images/service/service-4.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section pb_60">
            <div className="auto-container">
              <div className="content-box mt_60 text-center">
                <div>
                  <h3 className="mb_20 highlight">Join Us</h3>
                  <p className="lead_text">
                    As we look ahead, CW BANK remains steadfast in our
                    commitment to delivering value, driving innovation, and
                    creating positive outcomes for our clients, employees, and
                    stakeholders. We will continue to leverage our strengths,
                    adapt to market dynamics, and seize new opportunities to
                    achieve sustainable growth and success in the years to come.
                  </p>
                  <br />
                  <strong>
                    Thank you for your continued trust and support in CW BANK.
                    Together, we will build a brighter future and achieve
                    financial success.
                  </strong>
                </div>
              </div>
            </div>
          </section>

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
