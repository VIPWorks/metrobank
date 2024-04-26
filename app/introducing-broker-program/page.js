import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Introducing Broker (IB) Program"
      >
        <div>
          {/* about-style-two */}
          <section className="pt_120 pb_120">
            <div className="pattern-layer rotate-me"></div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_three">
                    <div className="image-box pr_110">
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
                        <img
                          src="/assets/images/resource/woman-cafe-with-laptop.jpeg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pb_60">
                      <div className="sec-title mb_10">
                        <h2 className="highlight">
                          Welcome to CW BANK's Introducing Broker (IB) Program
                        </h2>
                        {/* <h6>Your Gateway to Lucrative Partnerships</h6> */}
                      </div>
                      <div className="text-box">
                        <p>
                          Here unlocking your earning potential as a financial
                          intermediary has never been easier. Our IB Program is
                          meticulously crafted to empower individuals and
                          businesses to earn competitive commissions by
                          referring clients to CWBANK and promoting our diverse
                          range of financial products and services. Whether
                          you're a seasoned broker or an aspiring entrepreneur,
                          joining our IB Program opens doors to lucrative
                          opportunities and unlimited earning potential.
                        </p>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="sec-title mb_10">
                        <h2 className="highlight">
                          Unlocking Your Earning Potential
                        </h2>
                      </div>
                      <div className="text-box">
                        <p>
                          As a participant in CW BANK's IB Program, you'll enjoy
                          a host of benefits designed to maximize your earning
                          potential and drive your success as a financial
                          intermediary. Here's why our IB Program stands out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-style-two */}

          {/* feature-style-three */}
          <section className="calculator-section vision market-feature-section pt_120 pb_90">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/background/service-bg.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_50 centred">
                <h6 className="pb_10">Why US</h6>
                <h2>Our Broker Partnerships Program</h2>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/introducing-broker-program-1.jpeg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Lucrative Commissions
                        </h2>
                        <p className="mb_30">
                          Earn competitive commissions for every client you
                          refer to CWBANK who opens and trades a live account.
                          Our tiered commission structure ensures that the more
                          clients you refer, the more you earn. With unlimited
                          earning potential, the sky's the limit when it comes
                          to your earnings as an IB partner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/introducing-broker-program-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Flexible Partnership Models
                        </h2>
                        <p className="mb_30">
                          Choose from a range of partnership models to suit your
                          business model and revenue objectives. Whether you
                          prefer revenue sharing, CPA (Cost Per Acquisition), or
                          hybrid structures, we offer flexible partnership
                          agreements tailored to your needs. You have the
                          freedom to select the partnership model that aligns
                          best with your goals and preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/introducing-broker-program-3.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Comprehensive Support
                        </h2>
                        <p className="mb_30">
                          We understand that your success is our success. That's
                          why we provide dedicated support from our IB
                          management team, who will assist you every step of the
                          way. From onboarding and training to marketing
                          materials and ongoing support, we're committed to
                          helping you succeed as an IB partner and maximizing
                          your earning potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/introducing-broker-program-4.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Advanced Tracking and Reporting
                        </h2>
                        <p className="mb_30">
                          Gain access to our advanced tracking and reporting
                          tools, allowing you to monitor your referrals, track
                          commissions, and analyze performance in real-time. Our
                          transparent reporting ensures full visibility into
                          your earnings and commissions, empowering you to make
                          informed decisions and optimize your earning
                          potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/resource/introducing-broker-program-5.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">Marketing Resources</h2>
                        <p className="mb_30">
                          Access a wealth of marketing resources designed to
                          help you attract and retain clients effectively. From
                          banners and landing pages to promotional materials and
                          educational content, our marketing resources are
                          tailored to enhance your promotional efforts and drive
                          client acquisition. We provide you with the tools and
                          resources you need to succeed as an IB partner.
                        </p>
                      </div>
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
                    Join CW BANK's IB Program Today
                  </h3>
                  <p className="mb_30 lead_text">
                    Partner with CW BANK's IB Program and turn your network into
                    a source of income. Join us today and start earning
                    competitive commissions by referring clients to CW BANK and
                    promoting our industry-leading financial products and
                    services. With our flexible partnership models,
                    comprehensive support, and advanced tracking and reporting
                    tools, the path to success as an IB partner has never been
                    clearer. Contact us now to learn more about how you can
                    unlock your earning potential with CW BANK's Introducing
                    Broker Program.
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
