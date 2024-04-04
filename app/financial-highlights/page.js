import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Financial Highlights"
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
                            A Snapshot of CW BANK's Performance
                          </h3>

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
                      <h4>
                        <Link href="/service">Revenue Growth</Link>
                      </h4>
                      <p>
                      Our revenue growth reflects our ability to attract and retain clients, expand our product offerings, and capitalize on emerging opportunities in the market. With a focus on innovation and client-centricity, we have achieved robust revenue growth year over year, positioning us as a trusted partner for individuals and businesses seeking financial success.
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
                      <h4>
                        <Link href="/service">Profitability</Link>
                      </h4>
                      <p>
                      CW BANK's profitability is a testament to our prudent risk management, operational efficiency, and strategic investments. We consistently generate strong profits, allowing us to reinvest in our business, reward our shareholders, and support our long-term growth objectives.
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
                      <h4>
                        <Link href="/service">Asset Quality</Link>
                      </h4>
                      <p>
                      Maintaining high asset quality is a top priority for CW BANK. Our disciplined approach to risk management and credit underwriting ensures the quality and resilience of our loan portfolio, minimizing credit losses and preserving shareholder value.
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
                      <h4>
                        <Link href="/service">Capital Adequacy</Link>
                      </h4>
                      <p>CW BANK maintains a robust capital position to support our growth initiatives and withstand economic uncertainties. Our capital adequacy ratios exceed regulatory requirements, providing confidence to our clients, counterparties, and investors.
                      </p>
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
                <h2>Strategic Investments and Initiatives</h2>
                <p>
                CW BANK is committed to driving sustainable growth and creating long-term value for our stakeholders. We continually invest in our people, technology, and infrastructure to enhance our capabilities, expand our market reach, and deliver innovative solutions to our clients. Some of our strategic investments and initiatives include:
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
                      <h4>
                        <Link href="/service">Digital Transformation</Link>
                      </h4>
                      <p>We are investing in digital technologies and platforms to enhance the client experience, streamline operations, and drive efficiency across our organization. Our digital transformation initiatives aim to leverage data analytics, automation, and artificial intelligence to deliver personalized, seamless, and intuitive banking solutions to our clients.
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
                      <h4>
                        <Link href="/service">Product Innovation</Link>
                      </h4>
                      <p>CW BANK is committed to innovation, continuously introducing new products and services to meet the evolving needs of our clients. From cutting-edge trading platforms to innovative investment products, we strive to provide our clients with access to the latest financial tools and technologies to help them achieve their financial goals.
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
                      <h4>
                        <Link href="/service">Expansion and Diversification</Link>
                      </h4>
                      <p>We are focused on expanding our presence in key markets and diversifying our revenue streams to reduce risk and enhance resilience. Through organic growth initiatives and strategic partnerships, we aim to capture new opportunities and strengthen our position as a leading financial services provider globally.
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
                      <h4>
                        <Link href="/service">Sustainability and Corporate Responsibility</Link>
                      </h4>
                      <p>CW BANK is committed to corporate responsibility and sustainability, integrating environmental, social, and governance (ESG) principles into our business practices and decision-making processes. We are dedicated to making a positive impact on society, supporting community development initiatives, and promoting environmental stewardship.
                      </p>
                    </div>
                  </div>
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
                        <h3 className="mb_20">Looking Ahead</h3>

<div className="text-box mb_40">
  <p>As we look ahead, CW BANK remains steadfast in our commitment to delivering value, driving innovation, and creating positive outcomes for our clients, employees, and stakeholders. We will continue to leverage our strengths, adapt to market dynamics, and seize new opportunities to achieve sustainable growth and success in the years to come.
  </p>
  <br />
  <strong>
  Thank you for your continued trust and support in CW BANK. Together, we will build a brighter future and achieve financial success.
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
                <h2>Open Bank Accounts</h2>
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
                    <p>Amet minim mollit no duis deserunt ulamco.</p>
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
                    <p>Amet minim mollit no duis deserunt ulamco.</p>
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
