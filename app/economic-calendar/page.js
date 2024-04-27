import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import EconomicCalendarWidget from "@/components/widgets/EconomicCalendar";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Economic Calendar"
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
                          <h2 className="mb_20">Stay Ahead of Key Events</h2>

                          <div className="text-box mb_40">
                            <p>
                              Stay ahead of important economic events and
                              announcements with CW BANK's Economic Calendar.
                              Our Economic Calendar provides a comprehensive
                              overview of key economic indicators, central bank
                              meetings, and other events that may impact the
                              financial markets. Whether you're a short-term
                              trader or a long-term investor, our Economic
                              Calendar helps you plan your trading strategy
                              accordingly and avoid unexpected market
                              volatility.
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
                        <img src="/assets/images/resource/economic-calendar.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* EconomicCalendar */}
          <EconomicCalendarWidget />
          {/* EconomicCalendar-end */}

          {/* feature-style-three */}
          <section className="market-feature-section feature-style-three pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                {/* <h6>Why US</h6> */}
                <h2>Key Features of the Economic Calendar</h2>
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
                      <h4>Comprehensive Coverage</h4>
                      <p>
                        Our Economic Calendar covers a wide range of economic
                        indicators, including GDP growth, inflation rates,
                        employment figures, interest rate decisions, and more.
                        With comprehensive coverage of key economic events, you
                        can stay informed about the factors driving market
                        movements and trends.
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
                      <h4>Real-time Updates</h4>
                      <p>
                        Get real-time updates on economic events and
                        announcements as they happen. Our Economic Calendar
                        provides instant notifications and alerts for important
                        events, ensuring that you never miss a market-moving
                        development.
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
                      <h4>Filtering Options</h4>
                      <p>
                        Customize your Economic Calendar to focus on specific
                        countries, regions, or economic indicators that are most
                        relevant to your trading strategy. With filtering
                        options, you can tailor the calendar to suit your
                        individual needs and preferences.
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
                      <h4>Historical Data</h4>
                      <p>
                        Access historical data and charts for past economic
                        events, allowing you to analyze trends and patterns over
                        time. By studying historical data, you can gain valuable
                        insights into how economic events have impacted the
                        financial markets in the past and make more informed
                        trading decisions in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* feature-style-three end */}

          <section className="joinNow-section">
            <div className="auto-container">
              <div className="content-box mt_60 mb_60 text-center">
                <div className="mt_60">
                  <h3 className="mb_30 highlight">
                    Join CW BANK and Unlock the Potential of Economic Calendar
                    Today
                  </h3>
                  <p className="mb_30 lead_text">
                    Stay ahead of key economic events and announcements with CW
                    BANK's Economic Calendar. Whether you're a beginner or an
                    experienced trader, our Economic Calendar provides valuable
                    insights and intelligence to help you navigate the financial
                    markets with confidence.
                  </p>
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