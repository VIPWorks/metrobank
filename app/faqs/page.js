"use client";
import Testimonial from "@/components/sections/home3/Testimonial"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={"Metro"} footerStyle={1} breadcrumbTitle="FAQs">
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
                          <h2 className="mb_20">Your Questions Answered</h2>

                          <div className="text-box mb_40">
                            <p>
                              Find answers to your questions with CW BANK's
                              FAQs. Our Frequently Asked Questions section
                              provides comprehensive answers to common queries
                              about our platform, products, services, and
                              trading processes. Whether you're new to trading
                              or an experienced investor, our FAQs offer
                              valuable information and guidance to help you
                              navigate the world of online trading.
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
                              "url(assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                        <div
                          className="shape-4"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-3.png)",
                          }}
                        ></div>
                      </div>
                      <figure className="image">
                        <img src="assets/images/resource/about-4.jpg" alt="" />
                      </figure>
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
                backgroundImage: "url(assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h2>Key Features of FAQs</h2>
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
                        Comprehensive Coverage
                      </h4>
                      <p>
                        Our FAQs cover a wide range of topics, including account
                        opening, funding and withdrawals, trading platforms,
                        financial products, regulations, and more. Whether you
                        have questions about how to get started or how to use
                        specific features of our platform, our FAQs provide the
                        answers you need.
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
                        Clear and Concise
                      </h4>
                      <p>
                        Our FAQs are written in clear and concise language,
                        making them easy to understand and accessible to traders
                        of all levels. We strive to provide straightforward
                        answers to common questions, eliminating confusion and
                        uncertainty for our clients.
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
                        Search Functionality
                      </h4>
                      <p>
                        Use our search functionality to quickly find answers to
                        specific questions or topics of interest. Our FAQs are
                        organized into categories and subcategories, allowing
                        you to navigate through the content with ease and
                        efficiency.
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
                        Updated Regularly
                      </h4>
                      <p>
                        We regularly update our FAQs to ensure that they remain
                        accurate, relevant, and up-to-date with the latest
                        information and developments. Whether there are changes
                        to regulations, updates to our platform, or new features
                        added, we keep our FAQs current to provide you with the
                        most accurate and reliable information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* feature-style-three end */}

          <section className="faq-section pt_120 pb_100">
            <div className="auto-container">
              <div className="sec-title centred mb_70">
                <p>Find answers to your questions and gain a better understanding of CW BANK's platform, products, and services with our FAQs. Whether you're a beginner or an experienced trader, our FAQs offer valuable guidance and information to help you succeed in the world of online trading.</p>
                <br/>
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                  <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 1 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is CW BANK?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>
                            CW BANK is a leading financial institution that offers a wide range of banking and investment services, including online trading, wealth management, and institutional solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        <div className="icon-box"></div>
                        <h4>What documents do I need to open an account?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>
                            You will typically need to provide identification documents such as a passport or driver's license, proof of address, and other relevant documentation as required by regulatory authorities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 5 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(5)}
                      >
                        <div className="icon-box"></div>
                        <h4>What financial products does CW BANK offer?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 5
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK offers a wide range of financial products, including forex, stocks, commodities, indices, cryptocurrencies, bonds, and more.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 7 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(7)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I trade on my mobile device?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 7
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK offers mobile trading platforms that are compatible with iOS and Android devices, allowing you to trade on the go.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 9 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(9)}
                      >
                        <div className="icon-box"></div>
                        <h4>What advanced tools and analytics does CW BANK offer?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 9
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK offers a range of advanced tools and analytics, including charting tools, technical indicators, economic calendars, and market analysis reports.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 11 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(11)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I access market insights on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 11
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK provides market insights, economic calendars, and analysis reports on our website to help you make informed trading decisions.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 13 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(13)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer educational resources for traders?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 13
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK provides a range of educational resources, including articles, tutorials, webinars, and seminars, to help traders improve their knowledge and skills.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 15 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(15)}
                      >
                        <div className="icon-box"></div>
                        <h4>What languages does CW BANK's customer support team speak?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 15
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's customer support team is multilingual and can assist you in several languages, including English, Spanish, French, German, and more.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 17 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(17)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I become an introducing broker (IB) with CW BANK?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 17
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can become an introducing broker (IB) with CW BANK by signing up for our IB program and referring clients to our platform.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 19 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(19)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I join CW BANK's affiliate program?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 19
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can join CW BANK's affiliate program by signing up on our website and accessing our marketing materials to promote our products and services.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 21 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(21)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer white label solutions?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 21
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK offers white label solutions for brokers, financial institutions, and fintech companies who wish to offer branded financial services to their clients.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 23 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(23)}
                      >
                        <div className="icon-box"></div>
                        <h4>How does CW BANK ensure regulatory compliance?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 23
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK adheres to strict regulatory standards and compliance requirements in all jurisdictions where we operate. We work closely with regulatory authorities to ensure that our operations comply with relevant laws and regulations.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 25 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(25)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I access market insights on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 25
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can access market insights, economic calendars, news, and analysis reports on CW BANK's website under the "Market Insights" section.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 27 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(27)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I use CW BANK's economic calendar?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 27
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's economic calendar provides information about key economic events, such as interest rate decisions, employment reports, GDP releases, and more, allowing you to stay informed about market-moving events.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 29 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(29)}
                      >
                        <div className="icon-box"></div>
                        <h4>What type of news and analysis does CW BANK provide?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 29
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK provides news and analysis reports covering a wide range of topics, including market trends, economic indicators, geopolitical events, and more.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 31 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(31)}
                      >
                        <div className="icon-box"></div>
                        <h4>Are client testimonials genuine?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 31
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, all client testimonials on CW BANK's website are genuine and represent the experiences and opinions of real clients who have used our platform and services.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 33 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(33)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I access the FAQs on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 33
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can access the FAQs (Frequently Asked Questions) on CW BANK's website by visiting the "FAQs" section, where you will find answers to commonly asked questions about our products, services, and trading platform.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 35 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(35)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is a trading calculator?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 35
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>A trading calculator is a tool that allows traders to calculate key trading metrics, such as position size, risk exposure, potential profit and loss, and more.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 37 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(37)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is a market heatmap?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 37
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>A market heatmap is a visual representation of market data that shows the relative strength or weakness of different assets or instruments over a specific time period.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 39 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(39)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I customize the market heatmap on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 39
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK's market heatmap allows you to customize the display settings, such as time frame, asset class, and color scheme, to suit your preferences and trading style.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 41 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(41)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I access trading signals or alerts on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 41
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can access trading signals or alerts on CW BANK's website under the "Market Insights" or "Trading Tools" section, where you will find timely updates and recommendations from our team of analysts.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 43 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(43)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is the difference between trading signals and market insights?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 43
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Trading signals are specific recommendations or alerts based on technical analysis or market trends, while market insights provide broader analysis and commentary on market developments.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 45 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(45)}
                      >
                        <div className="icon-box"></div>
                        <h4>How far back does CW BANK's historical market data go?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 45
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's historical market data typically covers several years of price history for most traded instruments, allowing traders to analyse long-term trends and patterns.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 47 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(47)}
                      >
                        <div className="icon-box"></div>
                        <h4>How many trading sessions are there in a day?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 47
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>There are typically three main trading sessions in a day: the Asian session, the European session, and the North American session. Each session has its own characteristics and trading volume.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 49 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(49)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer support for algorithmic trading?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 49
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK offers support for algorithmic trading through our API (Application Programming Interface), which allows traders to automate their trading strategies and execute trades programmatically.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                  <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        <div className="icon-box"></div>
                        <h4>How do I open an account with CW BANK</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Opening an account with CW BANK is simple. You can start by visiting our website and clicking on the "Open an Account" button to begin the application process.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="icon-box"></div>
                        <h4>Is my money safe with CW BANK?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK takes the security of our clients' funds very seriously. We adhere to strict regulatory standards and employ advanced security measures to safeguard your assets.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 6 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(6)}
                      >
                        <div className="icon-box"></div>
                        <h4>What trading platforms does CW BANK offer?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 6
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK offers a variety of trading platforms to suit the needs of different traders, including desktop, web-based, and mobile platforms.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 8 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(8)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer API integration?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 8
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK provides API integration for clients who wish to connect their trading platforms or systems to our infrastructure.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 10 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(10)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I stay informed about market news and analysis?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 10
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can stay informed about market news and analysis by visiting our website regularly, subscribing to our newsletters, and following us on social media.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 12 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(12)}
                      >
                        <div className="icon-box"></div>
                        <h4>What are the benefits of using CW BANK's trading calculator?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 12
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's trading calculator allows you to calculate key trading metrics such as position size, risk exposure, potential profit and loss, and more, helping you manage your trades with precision.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 14 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(14)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I contact CW BANK's customer support team?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 14
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can contact CW BANK's customer support team via phone, email, or live chat on our website. Our support team is available 24/7 to assist you with any queries or issues.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 16 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(16)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is an introducing broker (IB)?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 16
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>An introducing broker (IB) is a financial intermediary who refers clients to CW BANK in exchange for commissions or other incentives.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 18 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(18)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is an affiliate program?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 18
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>An affiliate program is a partnership arrangement where individuals or businesses promote CW BANK's products and services on their website or platform in exchange for commissions.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 20 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(20)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is a white label solution?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 20
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>A white label solution is a product or service that is rebranded and resold by another company under its own brand name.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 22 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(22)}
                      >
                        <div className="icon-box"></div>
                        <h4>What are the benefits of using CW BANK's white label solutions?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 22
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's white label solutions allow you to expand your product offerings, reach new markets, and enhance your brand visibility without the need for extensive infrastructure or development costs.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 24 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(24)}
                      >
                        <div className="icon-box"></div>
                        <h4>Is CW BANK regulated?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 24
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK is regulated by reputable financial authorities in various jurisdictions, including [insert regulatory bodies here].</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 26 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(26)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is an economic calendar?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 26
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>An economic calendar is a tool that provides information about upcoming economic events, indicators, and announcements that may impact financial markets.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 28 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(28)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer news and analysis?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 28
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK provides news and analysis reports on our website to help traders stay informed about market developments and make informed trading decisions.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 30 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(30)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I access client testimonials on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 30
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>You can access client testimonials on CW BANK's website under the "Client Testimonials" section. These testimonials provide insights into the experiences of our clients and the value they have received from our platform and services.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 32 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(32)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I submit my own testimonial to CW BANK?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 32
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, if you are a client of CW BANK and would like to share your experience with others, you can submit your testimonial to us for consideration.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 34 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(34)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I suggest a question to be added to the FAQs?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 34
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, if you have a question that is not addressed in our FAQs, you can suggest it to us, and we will consider adding it to the list.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 36 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(36)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I use CW BANK's trading calculator?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 36
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's trading calculator is easy to use. Simply input the relevant parameters, such as account currency, leverage, trade size, and stop loss level, and the calculator will provide you with the results.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 38 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(38)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I use CW BANK's market heatmap?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 38
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's market heatmap provides a visual overview of market trends and price movements across various asset classes, helping traders identify potential trading opportunities.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 40 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(40)}
                      >
                        <div className="icon-box"></div>
                        <h4>Does CW BANK offer trading signals or alerts?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 40
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK offers trading signals and alerts to help traders identify potential trading opportunities based on technical analysis and market trends.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 42 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(42)}
                      >
                        <div className="icon-box"></div>
                        <h4>Are trading signals or alerts provided in real-time?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 42
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK's trading signals or alerts are provided in real-time, allowing traders to act quickly on potential trading opportunities as they arise.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 44 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(44)}
                      >
                        <div className="icon-box"></div>
                        <h4>Can I access historical market data on CW BANK's website?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 44
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>Yes, CW BANK provides access to historical market data, including price charts, volume data, and other relevant information, to help traders conduct technical analysis and research.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 46 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(46)}
                      >
                        <div className="icon-box"></div>
                        <h4>What is a trading session?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 46
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>A trading session refers to a specific period during the day when financial markets are open for trading. Different trading sessions correspond to different time zones and market hours.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 48 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(48)}
                      >
                        <div className="icon-box"></div>
                        <h4>What are the trading hours for CW BANK's platform?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 48
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>CW BANK's trading platform is available 24 hours a day, five days a week, allowing traders to access the market and trade at any time during market hours.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 50 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(50)}
                      >
                        <div className="icon-box"></div>
                        <h4>How can I get started with algorithmic trading on CW BANK's platform?</h4>
                      </div>
                      <div
                        className={
                          isActive.key == 50
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            <p>To get started with algorithmic trading on CW BANK's platform, you can contact our support team for assistance in setting up your API integration and developing your trading algorithms. We provide documentation and support to help you get up and running quickly and efficiently.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section">
            <div className="auto-container">
              <div className="content-box mt_60 mb_60 text-center">
                <div className="mt_60">
                  <h3 className="mb_30 highlight">
                    Join CW BANK and Unlock the Potential of Trading Today
                  </h3>
                  <p className="mb_30 lead_text">
                    These FAQs cover a wide range of topics related to our products, services, and trading platform, providing valuable information to our clients and helping them navigate their trading journey effectively. If you have any further questions, please don't hesitate to contact us for assistance.
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