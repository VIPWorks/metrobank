import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Research and Insights"
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
                          <h2 className="mb_20">Stay Informed, Stay Ahead</h2>

                          <div className="text-box mb_40">
                            <p>
                              At CWBANK, we understand the importance of staying
                              informed and up-to-date on market trends, news,
                              and events. That's why we offer comprehensive
                              research and insights that provide valuable
                              intelligence and analysis to help you make
                              informed trading decisions. Whether you're a
                              beginner or an experienced trader, our research
                              and insights empower you to stay ahead of the
                              curve and capitalize on market opportunities
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
                      </div>
                      <video width="450" height="450" autoPlay muted>
                        <source
                          src="/assets/images/resource/research-and-insights.mp4"
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

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
                <h2>Our Research and Insights Include</h2>
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
                      <h4>Market Analysis</h4>
                      <p>
                        Our team of experienced analysts provides in-depth
                        market analysis and commentary on a wide range of
                        financial markets, including forex, stocks, commodities,
                        and cryptocurrencies. From daily market updates to
                        in-depth research reports, our market analysis keeps you
                        informed on the latest developments and trends in the
                        financial markets
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
                      <h4>Economic Calendar</h4>
                      <p>
                        Stay ahead of important economic events and
                        announcements with our economic calendar. Our calendar
                        provides a comprehensive overview of key economic
                        indicators, central bank meetings, and other events that
                        may impact the financial markets. With our economic
                        calendar, you can plan your trading strategy accordingly
                        and avoid unexpected market volatility.
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
                      <h4>Trading Ideas</h4>
                      <p>
                        Looking for trading ideas and inspiration? Our platform
                        offers a variety of trading ideas and strategies to help
                        you generate new trading opportunities and optimize your
                        trading performance. Whether you're a day trader, a
                        swing trader, or a long-term investor, our trading ideas
                        provide valuable insights and inspiration to enhance
                        your trading strategy.
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
                      <h4>Educational Resources</h4>
                      <p>
                        Enhance your trading knowledge and skills with our
                        educational resources. From articles and tutorials to
                        webinars and seminars, our educational resources cover a
                        wide range of topics, including technical analysis,
                        fundamental analysis, risk management, and trading
                        psychology. Whether you're a novice trader or an
                        experienced investor, our educational resources provide
                        valuable insights and guidance to help you succeed in
                        the financial markets.
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
                      <h4>Market News</h4>
                      <p>
                        Stay informed on the latest market news and developments
                        with our real-time news feeds. Our platform provides
                        access to breaking news, market updates, and expert
                        commentary from leading financial news sources around
                        the world. With our market news feeds, you can stay
                        ahead of the curve and make informed trading decisions
                        based on the latest information.
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
                    Join CW BANK and Unlock the Potential of Research and
                    Insights Today
                  </h3>
                  <p className="mb_30 lead_text">
                    With our research and insights, you can stay informed and
                    up-to-date on market trends, news, and events, enabling you
                    to make better trading decisions and achieve your financial
                    goals. Whether you're a beginner or an experienced trader,
                    our research and insights empower you to stay ahead of the
                    curve and capitalize on market opportunities. Join CWBANK
                    today and access our comprehensive research and insights to
                    take your trading to the next level.
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