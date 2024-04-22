import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Investor Relations"
      >
        <div>
          <section className="company-section">
            <div className="pattern-layer rotate-me"></div>
            <div className="row clearfix">
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_60">
                    <div className="company_bold_heading">
                      <h2>Building Trust and Transparency</h2>
                    </div>

                    <div className="company_content">
                      <p className="mb_45">
                        Welcome to CW BANK's Investor Relations page, your
                        gateway to transparent communication and valuable
                        insights into our financial performance, strategy, and
                        corporate governance practices. As a trusted financial
                        institution, we are committed to fostering strong
                        relationships with our investors, providing timely and
                        accurate information, and upholding the highest
                        standards of transparency and integrity.
                      </p>
                      <h3 className="mb_10">Our Commitment to Investors</h3>
                      <p>
                        At CW BANK, we recognize the importance of investor
                        confidence and trust in our organization. That's why we
                        place great emphasis on transparency, accountability,
                        and open communication with our investors. Our Investor
                        Relations team is dedicated to providing investors with
                        the information they need to make informed decisions and
                        understand our business, strategy, and financial
                        performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div className="image_block_three">
                  <div className="image-box pr_80 mr_20">
                    <figure className="image">
                      <img
                        src="https://www.swissquote.com/_next/image?url=%2Fapi%2Finternal%2Fmedia%2Fget-media%3Ffilename%3D2023-09%2Fheader-partners.jpg&w=1024&q=90"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="market-feature-section feature-style-three pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h2>Key Areas of Focus</h2>
                <p>
                  Our Investor Relations page covers a range of key areas to
                  help investors stay informed and engaged with CW BANK:
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
                      <h4>Financial Performance</h4>
                      <p>
                        Gain access to our financial reports, presentations, and
                        earnings releases to stay updated on CW BANK's financial
                        performance and results. Our reports provide detailed
                        insights into our revenue, profitability, asset quality,
                        and capital adequacy, allowing investors to assess our
                        financial health and stability.
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
                      <h4>Corporate Governance</h4>
                      <p>
                        Learn about CW BANK's corporate governance framework,
                        policies, and practices, which are designed to promote
                        transparency, accountability, and ethical behavior. We
                        are committed to upholding the highest standards of
                        corporate governance and complying with regulatory
                        requirements to protect the interests of our
                        shareholders and stakeholders.
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
                      <h4>Strategy and Outlook</h4>
                      <p>
                        Understand CW BANK's strategic priorities, business
                        model, and growth initiatives through our investor
                        presentations and strategic updates. We provide
                        investors with insights into our long-term strategy,
                        market positioning, and growth opportunities, enabling
                        them to assess our future prospects and potential for
                        value creation.
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
                      <h4>Events and Conferences</h4>
                      <p>
                        Stay informed about upcoming investor events,
                        conferences, and earnings calls where CW BANK executives
                        discuss our performance, strategy, and outlook.
                        Investors have the opportunity to interact with our
                        management team, ask questions, and gain deeper insights
                        into our business and industry dynamics.
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
                      <h4>Shareholder Information</h4>
                      <p>
                        Access information about CW BANK's shareholder
                        structure, stock performance, and dividend payments. Our
                        investor relations page provides shareholders with
                        valuable information to track their investment in CW
                        BANK and stay informed about developments that may
                        impact their investment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="calculator-section vision pt_90 pb_90">
            <div
              className="light-icon"
              style={{ backgroundImage: "url(/assets/images/icons/icon-1.png)" }}
            ></div>
            <div className="auto-container">
              <div className="mt_50 mb_50">
                <div className="row clearfix align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <figure className="image-box">
                      <img src="/assets/images/service/service-12.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_one">
                      <div className="content-box pt_20">
                        <div className="inner-box">
                          <h2 className="pb_20 highlight">Engage with Us</h2>
                          <p className="pb_30">
                            We encourage investors to engage with CW BANK's
                            Investor Relations team to ask questions, provide
                            feedback, and share perspectives. Our team is
                            available to address investor inquiries, provide
                            clarifications, and facilitate dialogue between
                            investors and management. We value investor feedback
                            and are committed to fostering a culture of
                            transparency, responsiveness, and accountability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img src="/assets/images/service/service-7.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_20">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Transparency and Integrity
                        </h2>
                        <p className="pb_30">
                          At CW BANK, we are guided by principles of
                          transparency, integrity, and accountability in all our
                          interactions with investors and stakeholders. We
                          believe that open communication and disclosure are
                          essential for building trust and maintaining
                          credibility in the financial markets. By providing
                          investors with timely, accurate, and comprehensive
                          information, we aim to foster long-term relationships
                          based on mutual respect and transparency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section bg-light pt_90 pb_90">
            <div className="auto-container">
              <div className="content-box">
                <h3 className="mb_20 highlight">Thank You for Your Support</h3>
                <p className="lead_text">
                  We would like to express our gratitude to our investors for
                  their continued support and confidence in CW BANK. We remain
                  committed to delivering value, driving growth, and upholding
                  the highest standards of corporate governance and investor
                  relations practices. Together, we will navigate challenges,
                  seize opportunities, and create sustainable value for our
                  shareholders and stakeholders.
                </p>
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