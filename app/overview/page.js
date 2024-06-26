import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={"Metro"} footerStyle={1} breadcrumbTitle="Overview">
        <div>
          <section className="about-section pt_120 pb_120">
            <div className="pattern-layer rotate-me"></div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_three">
                    <div className="image-box pr_110 mr_20">
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
                        <img src="/assets/images/resource/overview.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box ml_40">
                      <div className="sec-title mb_20">
                        <h2>Your Partner in Financial Success</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          At CW BANK, we are committed to revolutionizing the
                          way individuals and businesses approach finance. With
                          a rich heritage and a forward-thinking approach, we
                          strive to be at the forefront of innovation in the
                          financial industry. Our dedication to excellence,
                          integrity, and customer-centricity sets us apart as a
                          trusted partner for all your financial needs.
                        </p>
                      </div>
                      <div className="inner-box mb_45">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-10"></i>
                          </div>
                          <h3>Our Story</h3>
                          <p>
                            Established in 2024, CW BANK has quickly emerged
                            as a leading financial institution, providing a
                            comprehensive range of services tailored to the
                            needs of our diverse clientele. From individual
                            traders to institutional investors, we cater to a
                            wide spectrum of clients, offering innovative
                            solutions designed to empower financial success.
                          </p>
                        </div>
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-10"></i>
                          </div>
                          <h3>Our Values</h3>
                          <p>
                            Integrity, transparency, and professionalism are the
                            guiding principles that drive our organization. We
                            believe in doing business with honesty and
                            integrity, building trust with our clients and
                            stakeholders. Our commitment to transparency means
                            that clients can always rely on us to provide
                            accurate information and advice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overlay">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col title-column">
                  <h2 className="highlight">A Global Presence</h2>
                  <p className="mb_20">
                    With a global presence spanning several countries, CW BANK
                    serves clients across the globe, providing access to
                    international markets and opportunities. Our strategically
                    located offices and digital platforms ensure that clients
                    can access our services seamlessly, regardless of their
                    location.
                  </p>
                </div>
              </div>
            </div>
            <section className="box">
              <div className="pattern-layer rotate-me"></div>
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                    <div className="box">
                      <div className="sec-title">
                        <h3>Innovation at Our Core</h3>
                        <p>
                          At CW BANK, innovation is not just a buzzword – it's
                          ingrained in our DNA. We continuously strive to
                          leverage the latest technologies and industry trends
                          to enhance our products and services. Whether it's our
                          cutting-edge trading platforms, advanced analytics
                          tools, or mobile applications, we are committed to
                          delivering innovative solutions that meet the evolving
                          needs of our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                    <div className="box">
                      <div className="sec-title">
                        <h3>Community Engagement</h3>
                        <p className="black">
                          At CW BANK, we recognize the importance of giving back
                          to the communities in which we operate. Through our
                          corporate social responsibility initiatives, we
                          support various charitable organizations and community
                          projects, making a positive impact on society.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                    <div className="box">
                      <div className="sec-title">
                        <h3>Commitment to Excellence</h3>
                        <p>
                          Excellence is the cornerstone of everything we do at
                          CW BANK. From our dedicated customer support team to
                          our experienced financial advisors, we are committed
                          to delivering exceptional service and value to our
                          clients. Our focus on excellence extends to every
                          aspect of our business, ensuring that we consistently
                          exceed our clients' expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="about-style-two pt_150 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="text-box">
                        <section className="joinNow-section">
                          <div className="auto-container">
                            <div className="content-box mt_60 text-center">
                              <div className="mt_60 mb_60">
                                <h3 className="mb_10 highlight">
                                  Looking Ahead
                                </h3>
                                <p className="mb_30 lead_text">
                                  As we look to the future, we remain focused on
                                  driving innovation, delivering excellence, and
                                  creating value for our clients. We are excited
                                  about the opportunities that lie ahead and are
                                  committed to continuing our journey of growth
                                  and success.
                                </p>
                              </div>
                              <div>
                                <h3 className="mb_10 highlight">Join Us</h3>
                                <p className="lead_text">
                                  Whether you're an individual investor looking
                                  to grow your wealth or a business seeking
                                  innovative financial solutions, we invite you
                                  to join us on this journey. Discover the
                                  difference that CW BANK can make in your
                                  financial success and experience the
                                  excellence that sets us apart.
                                </p>
                                <strong className="lead_text">
                                Thank you for choosing CW BANK as your trusted partner in financial success.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
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