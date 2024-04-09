import Testimonial from "@/components/sections/home3/Testimonial";
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
                      <h4>Account Information</h4>
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
                      <h4>Account Settings</h4>
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
                      <h4>Deposit and Withdrawal</h4>
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
                      <h4>Transaction History</h4>
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
                      <h4>Portfolio Management</h4>
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
                      <h4>Account Security</h4>
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
                      <h4>Customer Support</h4>
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
                      <h4>Convenience</h4>
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
                      <h4>Transparency</h4>
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
                      <h4>Control</h4>
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
                      <h4>Security</h4>
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
                          <h3 className="mb_20">
                            Start Managing Your Account Today
                          </h3>

                          <div className="text-box mb_40">
                            <p>
                              Ready to take control of your finances and
                              optimize your trading experience? Log in to your
                              CW BANK account and access the Account Management
                              platform to start managing your accounts with
                              ease. With powerful features and convenient
                              access, our Account Management platform puts you
                              in the driver's seat of your financial journey.
                            </p>
                            <br />
                            <strong>
                              Thank you for choosing CW BANK as your financial
                              partner. We're committed to providing you with the
                              tools and resources you need to succeed, and we
                              look forward to supporting you every step of the
                              way.
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
