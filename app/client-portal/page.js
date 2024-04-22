import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Client Portal"
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
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2>Welcome to CW BANK's Client Portal</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          At CW BANK, we understand that accessing our platforms
                          and services efficiently is essential for our clients.
                          That's why we're delighted to introduce our Client
                          Portal, a centralized hub designed to streamline your
                          experience and provide you with convenient access to
                          all of our platforms and resources.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2>Your Gateway to CW BANK's Services</h2>
                      </div>
                      <div className="text-box">
                        <p>
                          Our Client Portal serves as your gateway to CW BANK's
                          suite of financial services and platforms. Whether
                          you're a seasoned trader, a new investor, or simply
                          looking to explore our offerings, the Client Portal is
                          your starting point for accessing our range of
                          products and resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section values pt_120 pb_90">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Easy Navigation and Access</h4>
                      <p>
                        Navigating the Client Portal is simple and intuitive,
                        allowing you to access our platforms and services with
                        ease. From the moment you log in, you'll find everything
                        you need right at your fingertips, making it easy to
                        manage your accounts, execute trades, and access
                        important resources.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Technical Support and Assistance</h4>
                      <p>
                        If you ever encounter technical issues or have questions
                        about using the Client Portal, our dedicated support
                        team is here to help. We provide prompt and responsive
                        technical support to ensure that you can access our
                        platforms and services without any interruptions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Comprehensive Resources</h4>
                      <p>
                        In addition to providing access to our platforms, the
                        Client Portal also offers a wealth of resources to help
                        you make informed investment decisions. From educational
                        materials and market insights to research reports and
                        trading guides, our resources are designed to empower
                        you with the knowledge and information you need to
                        succeed in the financial markets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Personalized Account Management</h4>
                      <p>
                        With the Client Portal, you have full control over your
                        accounts and investments. You can view your account
                        balances, track your portfolio performance, and manage
                        your account settings all in one place. Our
                        user-friendly interface makes it easy to monitor your
                        investments and make adjustments as needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Secure and Confidential</h4>
                      <p>
                        We understand the importance of security and
                        confidentiality when it comes to managing your finances.
                        That's why we've implemented robust security measures to
                        safeguard your information and transactions. With
                        encrypted communication and multi-factor authentication,
                        you can trust that your data is protected at all times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
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
                      <h4>Access to Platforms</h4>
                      <p>
                        One of the key features of our Client Portal is access
                        to our platforms, including our trading platforms,
                        investment tools, and account management services.
                        Whether you prefer to trade on your desktop, tablet, or
                        smartphone, our platforms are accessible through the
                        Client Portal, ensuring you can manage your investments
                        anytime, anywhere.
                      </p>
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
                  At CW BANK, we're committed to continuously improving our
                  Client Portal to better serve your needs. We welcome your
                  feedback and suggestions for enhancements, and we're always
                  looking for ways to enhance your experience and make it even
                  easier for you to access our platforms and services.
                </p>
                <br />
                <strong className="lead_text">
                  Thank you for choosing CW BANK as your financial partner.
                  We're dedicated to providing you with a seamless and
                  user-friendly experience through our Client Portal, and we
                  look forward to helping you achieve your financial goals.
                </strong>
              </div>
            </div>
          </section>
          {/* about-style-two */}

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