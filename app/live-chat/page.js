import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={"Metro"} footerStyle={1} breadcrumbTitle="Live Chat">
        <div>
          <section className="financial-highlight-section fabout-section pt_120 pb_120">
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
                        <h2>Welcome to CWBANK's Live Chat Support</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          At CWBANK, we recognize the importance of immediate
                          assistance when it comes to managing your finances.
                          That's why we're pleased to offer our Live Chat
                          Support feature, providing you with real-time access
                          to our knowledgeable support team right when you need
                          it. Whether you have questions about your account,
                          need assistance with a transaction, or simply want to
                          learn more about our products and services, our Live
                          Chat Support is here to help.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2>Instant Access to Assistance</h2>
                      </div>
                      <div className="text-box">
                        <p>
                          Our Live Chat Support feature enables you to connect
                          with a friendly and experienced support representative
                          instantly, ensuring that your inquiries are addressed
                          promptly and efficiently. With just a few clicks, you
                          can start a conversation with one of our
                          representatives and receive personalized assistance
                          tailored to your needs.
                        </p>
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
                  <h2 className="highlight">Business Hours Availability</h2>
                  <p className="mb_20">
                    Our Live Chat Support is available during our business
                    hours, Monday through Friday. Our team is committed to being
                    there for you when you need us most, ensuring that you
                    receive prompt and reliable assistance whenever you reach
                    out to us via live chat.
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
                        <h3>Expert Guidance at Your Fingertips</h3>
                        <p>
                          Our Live Chat Support team consists of knowledgeable
                          professionals who are dedicated to providing you with
                          the highest level of service. Whether you're a new
                          customer or a long-time client, our support
                          representatives have the expertise to address your
                          inquiries and assist you with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                    <div className="box">
                      <div className="sec-title">
                        <h3>Convenient and Hassle-Free</h3>
                        <p className="black">
                          Gone are the days of waiting on hold or navigating
                          through automated phone menus. With CWBANK's Live Chat
                          Support, you can get the help you need without any
                          hassle. Our user-friendly interface makes it easy to
                          initiate a chat session and communicate with our
                          support team in a seamless manner.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                    <div className="box">
                      <div className="sec-title">
                        <h3>Exceptional Service, Every Time</h3>
                        <p>
                          At CWBANK, we pride ourselves on delivering
                          exceptional service to our clients. Our Live Chat
                          Support team is trained to handle a wide range of
                          inquiries, from account-related questions to technical
                          issues, with professionalism and courtesy. We strive
                          to exceed your expectations and provide you with a
                          positive experience every time you engage with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="about-style-two pt_150 pb_90">
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
                                  Your Satisfaction is Our Priority
                                </h3>
                                <p className="mb_30 lead_text">
                                  Your satisfaction is our top priority, and
                                  we're here to ensure that your experience with
                                  CWBANK is nothing short of exceptional.
                                  Whether you're seeking assistance or simply
                                  want to provide feedback, our Live Chat
                                  Support team is here to listen and assist you
                                  in any way we can.
                                </p>
                                <br />
                                <strong>
                                  Thank you for choosing CWBANK for your
                                  financial needs. We're committed to providing
                                  you with the support and assistance you need
                                  to achieve your financial goals, and our Live
                                  Chat Support is just one of the many ways
                                  we're here to help.
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
