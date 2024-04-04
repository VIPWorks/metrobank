import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Account Management"
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
                            Welcome to CW BANK's Account Management
                          </h3>

                          <div className="text-box mb_40">
                            <p>
                              At CW BANK, we're committed to providing our
                              clients with the tools and resources they need to
                              manage their accounts efficiently and effectively.
                              Our Account Management platform offers a
                              comprehensive suite of features and
                              functionalities designed to empower you to take
                              control of your finances and optimize your trading
                              experience.
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
                <h2>Key Features of Account Management</h2>
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
                        <Link href="/service">Account Information</Link>
                      </h4>
                      <p>
                        Access detailed information about your CW BANK accounts,
                        including account balances, transaction history, and
                        account statements. Stay informed about your financial
                        position and track your trading activities with ease.
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
                        <Link href="/service">Account Settings</Link>
                      </h4>
                      <p>
                        Customize your account settings to suit your preferences
                        and trading style. Update personal information, change
                        account passwords, and configure notification
                        preferences to ensure that you're always in control of
                        your account.
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
                        <Link href="/service">Deposit and Withdrawal</Link>
                      </h4>
                      <p>
                        Initiate deposits and withdrawals directly from the
                        Account Management platform. Choose from a variety of
                        funding options and enjoy fast and convenient
                        transactions, allowing you to access your funds whenever
                        you need them.
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
                        <Link href="/service">Transaction History</Link>
                      </h4>
                      <p>
                        View a comprehensive history of your account
                        transactions, including deposits, withdrawals, trades,
                        and other activities. Keep track of your financial
                        transactions and monitor your account activity over
                        time.
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
                        <Link href="/service">Portfolio Management</Link>
                      </h4>
                      <p>
                        Manage your investment portfolio seamlessly from the
                        Account Management platform. Monitor your positions,
                        track market performance, and make informed investment
                        decisions to optimize your portfolio's growth and
                        profitability.
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
                        <Link href="/service">Account Security</Link>
                      </h4>
                      <p>
                        We prioritize the security of your account information
                        and employ advanced security measures to protect your
                        data. Our Account Management platform utilizes
                        industry-standard encryption protocols and multi-factor
                        authentication to safeguard your sensitive information.
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
                        <Link href="/service">Customer Support</Link>
                      </h4>
                      <p>
                        If you have any questions or encounter any issues while
                        using the Account Management platform, our dedicated
                        customer support team is here to help. Contact us via
                        phone, email, or live chat for prompt and personalized
                        assistance.
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
                <h2>Benefits of Account Management</h2>
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
                        <Link href="/service">Convenience</Link>
                      </h4>
                      <p>
                        Access your CW BANK accounts anytime, anywhere, from any
                        device with internet access. Our Account Management
                        platform is designed for maximum convenience, allowing
                        you to manage your accounts on the go.
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
                        <Link href="/service">Transparency</Link>
                      </h4>
                      <p>
                        Enjoy full transparency into your account activity and
                        financial transactions. With detailed account
                        information and transaction history available at your
                        fingertips, you can make informed decisions about your
                        finances.
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
                        <Link href="/service">Control</Link>
                      </h4>
                      <p>
                        {" "}
                        Take control of your accounts and trading activities
                        with customizable account settings and portfolio
                        management tools. Tailor your account preferences to
                        align with your financial goals and trading strategy.
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
                        <Link href="/service">Security</Link>
                      </h4>
                      <p>
                        Rest assured that your account information is safe and
                        secure with CW BANK's Account Management platform. We
                        employ robust security measures to protect your data and
                        ensure the integrity of your accounts.
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
                          <h3 className="mb_20">Start Managing Your Account Today</h3>

                          <div className="text-box mb_40">
                            <p>
                            Ready to take control of your finances and optimize your trading experience? Log in to your CW BANK account and access the Account Management platform to start managing your accounts with ease. With powerful features and convenient access, our Account Management platform puts you in the driver's seat of your financial journey.
                            </p>
                            <br />
                            <strong>
                            Thank you for choosing CW BANK as your financial partner. We're committed to providing you with the tools and resources you need to succeed, and we look forward to supporting you every step of the way.
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
