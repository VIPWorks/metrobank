import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Account Funding"
      >
        <div>
          {/* about-style-two */}{" "}
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
                    <div className="content-box mb_60">
                      <div className="sec-title mb_20">
                        <h2>Welcome to CW BANK's Account Funding</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          At CW BANK, we understand the importance of seamless
                          and efficient account funding for our clients. That's
                          why we're dedicated to providing you with convenient
                          and secure options to fund your accounts, ensuring
                          that you can access our services and start trading
                          with ease.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_20">
                        <h2>Flexible Funding Options</h2>
                      </div>
                      <div className="text-box">
                        <p>
                          We offer a variety of funding options to accommodate
                          your preferences and needs. Whether you prefer
                          traditional bank transfers, credit/debit card
                          payments, or electronic payment methods, we've got you
                          covered. Our goal is to make the funding process as
                          convenient and hassle-free as possible, so you can
                          focus on your trading activities.
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
                      <h4>Secure and Confidential</h4>
                      <p>
                        At CW BANK, we prioritize the security and
                        confidentiality of your financial transactions. We
                        utilize advanced encryption technologies and security
                        protocols to ensure that your account funding
                        transactions are secure and protected from unauthorized
                        access. You can trust that your personal and financial
                        information is safe when you fund your CW BANK account.
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
                      <h4>Electronic Payment Methods</h4>
                      <p>
                        In addition to bank transfers and card payments, we also
                        support a variety of electronic payment methods for
                        funding your account. These may include popular e-wallet
                        services, online payment platforms, and other electronic
                        transfer options. Electronic payment methods offer fast
                        processing times and may be available in your region for
                        added convenience.
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
                      <h4>Transparent Fees and Charges</h4>
                      <p>
                        We believe in transparency when it comes to fees and
                        charges associated with account funding. Before
                        initiating a funding transaction, you'll have full
                        visibility into any applicable fees or charges, ensuring
                        that there are no surprises. Our goal is to provide you
                        with a clear and transparent funding process, so you can
                        make informed decisions about your finances.
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
                      <h4>Bank Transfers</h4>
                      <p>
                        Bank transfers are a popular and reliable method for
                        funding your CW BANK account. Simply initiate a transfer
                        from your bank account to your CW BANK account using the
                        provided banking details. Bank transfers are secure and
                        typically processed within a few business days, allowing
                        you to fund your account quickly and easily.
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
                      <h4>Dedicated Support</h4>
                      <p>
                        If you have any questions or encounter any issues while
                        funding your CW BANK account, our dedicated support team
                        is here to help. Our knowledgeable representatives are
                        available to assist you with any inquiries or concerns
                        you may have, providing prompt and helpful assistance
                        whenever you need it.
                      </p>
                      <br/>
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
                      <h4>Credit/Debit Card Payments</h4>
                      <p>
                        Credit and debit card payments offer a convenient way to
                        fund your CW BANK account instantly. Simply enter your
                        card details on our platform, and your account
                        will be funded in real-time. card
                        payments are processed securely using industry-standard
                        encryption protocols, ensuring the safety of your
                        financial information.
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
                <h3 className="mb_20 highlight">
                  Start Funding Your Account Today
                </h3>
                <p className="lead_text">
                  Ready to fund your CW BANK account and start trading? Explore
                  our range of funding options and choose the method that works
                  best for you. With convenient and secure funding options, you
                  can quickly and easily fund your account and begin your
                  trading journey with confidence.
                </p>
                <br />
                <strong className="lead_text">
                  Thank you for choosing CW BANK as your financial partner.
                  We're committed to providing you with the tools and resources
                  you need to succeed, and we look forward to supporting you
                  every step of the way.
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
