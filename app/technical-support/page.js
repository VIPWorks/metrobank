import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Technical Support"
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
                            Welcome to CW BANK's Technical Support
                          </h2>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we understand that technology plays a
                              crucial role in the success of our clients'
                              financial endeavors. That's why we're committed to
                              providing top-notch technical support to ensure
                              that your experience with our platform is smooth,
                              seamless, and hassle-free. Our Technical Support
                              team is dedicated to resolving any issues you may
                              encounter promptly and effectively, so you can
                              focus on achieving your financial goals with
                              confidence.
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
                        <img src="/assets/images/resource/about-4.jpg" alt="" />
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
                backgroundImage: "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h2>Key Features of Technical Support</h2>
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
                      <h4>Dedicated Support Team</h4>
                      <p>
                        Our Technical Support team comprises experienced
                        professionals who are well-versed in our platform's
                        functionalities and capabilities. They're here to assist
                        you with any technical issues or challenges you may
                        face, providing personalized guidance and
                        troubleshooting assistance.
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
                      <h4>Multiple Support Channels</h4>
                      <p>
                        We offer multiple channels for you to reach our
                        Technical Support team, including phone support, email
                        support, and live chat. Choose the option that works
                        best for you, and our team will be standing by to assist
                        you promptly.
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
                      <h4>24/7 Availability</h4>
                      <p>
                        We understand that technical issues can arise at any
                        time, which is why our Technical Support team is
                        available 24/7 to provide assistance. Whether it's
                        during business hours or in the middle of the night, you
                        can count on us to be there when you need us most.
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
                      <h4>Remote Assistance</h4>
                      <p>
                        In some cases, our Technical Support team may need to
                        access your device remotely to diagnose and resolve
                        technical issues. Rest assured that we take privacy and
                        security seriously, and our team will only access your
                        device with your explicit consent and under strict
                        security protocols.
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
                      <h4>Knowledge Base</h4>
                      <p>
                        We maintain a comprehensive knowledge base that contains
                        articles, guides, FAQs, and troubleshooting tips to help
                        you resolve common technical issues on your own. Our
                        goal is to empower you with the information you need to
                        address minor issues independently and efficiently.
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
                      <h4>Regular Updates and Maintenance</h4>
                      <p>
                        We're constantly monitoring our platform's performance
                        and stability to ensure optimal functionality. In the
                        event of scheduled maintenance or updates, we'll notify
                        you in advance to minimize disruption to your trading
                        activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section values pt_120 pb_120">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="full_container">
              <div className="sec-title mb_70 centred">
                <h2>Benefits of Technical Support</h2>
              </div>
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
                      <h4>Prompt Resolution</h4>
                      <p>
                        Our Technical Support team is committed to resolving
                        your issues promptly and effectively. Whether it's a
                        minor glitch or a more complex technical issue, we'll
                        work tirelessly to get you back up and running as
                        quickly as possible.
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
                      <h4>Peace of Mind</h4>
                      <p>
                        With our 24/7 technical support availability, you can
                        have peace of mind knowing that help is always just a
                        phone call, email, or live chat away. No matter the time
                        or day, our team is here to support you whenever you
                        need assistance.
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
                      <h4>Enhanced User Experience</h4>
                      <p>
                        By providing top-notch technical support, we aim to
                        enhance your overall user experience with our platform.
                        We want every interaction you have with our platform to
                        be positive and productive, and our Technical Support
                        team plays a crucial role in achieving that goal.
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
                      <h4>Improved Productivity</h4>
                      <p>
                        Technical issues can be frustrating and disruptive, but
                        with our Technical Support team on your side, you can
                        minimize downtime and stay focused on your financial
                        objectives. Our goal is to help you maximize
                        productivity and efficiency in your trading activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section pt_90 pb_90">
            <div className="auto-container">
              <div className="content-box text-cdenter">
                <div className="">
                  <h3 className="mb_20 highlight">
                    Get the Support You Need Today
                  </h3>
                  <p className="mbs_10 lead_text">
                    If you're experiencing technical issues or need assistance
                    with our platform, don't hesitate to reach out to our
                    Technical Support team. Whether it's troubleshooting a
                    glitch, resolving an error, or seeking guidance on platform
                    features, we're here to help you every step of the way.
                    Thank you for choosing CW BANK, and we look forward to
                    providing you with the exceptional technical support you
                    deserve.
                  </p>
                </div>
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