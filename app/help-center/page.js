import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Help Center"
      >
        <div>
          {/* about-style-two */}
          <section className="financial-highlight-section pt_120 pb_120">
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
                              "url(assets/images/shape/shape-3.png)",
                          }}
                        ></div>
                        <div
                          className="shape-2"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                      </div>
                      <figure className="image">
                        <img src="assets/images/resource/about-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2>Welcome to CW BANK's Help Centre</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          At CWBANK, we're committed to providing our valued
                          clients with the support and assistance they need to
                          navigate their financial journey with confidence. Our
                          Help Centre is designed to be your go-to resource for
                          answers to common questions, step-by-step guides,
                          tutorials, and troubleshooting tips. Whether you're
                          new to CW BANK or a seasoned investor, our Help Centre
                          is here to help you make the most of your financial
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2>Comprehensive Knowledge Base</h2>
                      </div>
                      <div className="text-box">
                        <p>
                          Our Help Centre features a comprehensive knowledge
                          base that covers a wide range of topics related to
                          account management, trading, technical support, and
                          more. From basic banking terminology to advanced
                          trading strategies, our articles and guides are
                          designed to provide you with the information you need
                          to succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section values pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="full_container">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-12"></i>
                      </div>
                      <h4>Searchable Database</h4>
                      <p>
                        Looking for answers to specific questions? Our Help
                        Centre includes a powerful search feature that allows
                        you to quickly find articles and resources related to
                        your inquiry. Simply enter a keyword or phrase into the
                        search bar, and our system will generate relevant
                        articles and guides to help you find the information
                        you're looking for.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-12"></i>
                      </div>
                      <h4>Responsive Support</h4>
                      <p>
                        While our Help Centre is designed to provide you with
                        self-service support options, we understand that
                        sometimes you need assistance from a real person. That's
                        why we offer responsive support via live chat, phone,
                        and email. Our dedicated support team is here to assist
                        you with any questions or issues you may have, ensuring
                        that you receive the help you need in a timely manner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-12"></i>
                      </div>
                      <h4>Updated Regularly</h4>
                      <p>
                        We understand that the financial landscape is constantly
                        evolving, which is why we're committed to keeping our
                        Help Centre up to date with the latest information and
                        resources. Our team of experts regularly updates the
                        Help Centre with new articles, guides, and tutorials to
                        ensure that you have access to the most current
                        information available.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box">
                        <i className="icon-12"></i>
                      </div>
                      <h4>User-Friendly Interface</h4>
                      <p>
                        Navigating our Help Centre is easy thanks to our
                        user-friendly interface. Whether you're browsing
                        articles on your computer, tablet, or smartphone, our
                        Help Centre is designed to provide you with a seamless
                        and intuitive experience. Simply click on the topic
                        you're interested in to access relevant articles and
                        resources, or use the search feature to find specific
                        information.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section mt_90 pb_90">
            <div className="auto-container">
              <div className="content-box">
                <h3 className="mb_20 highlight">Continuously Improving</h3>
                <p className="lead_text">
                  At CWBANK, we're always looking for ways to improve the
                  customer experience. Your feedback is important to us, so if
                  you have suggestions for how we can enhance our Help Centre or
                  if there's a topic you'd like to see covered, please don't
                  hesitate to reach out. We're here to listen and to ensure that
                  our Help Centre meets your needs.
                </p>
                <br />
                <strong className="lead_text">
                  Thank you for choosing CW BANK as your financial partner.
                  We're committed to providing you with the support and
                  assistance you need to achieve your financial goals. Whether
                  you're a beginner or an experienced investor, our Help Centre
                  is here to help you every step of the way.
                </strong>
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