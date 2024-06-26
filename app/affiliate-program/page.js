import Testimonial from "@/components/sections/home3/Testimonial";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Affiliate Program"
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
                            Welcome to CW BANK's Affiliate Program
                          </h2>
                          <h6>Monetize Your Online Presence with CWBANK</h6>

                          <div className="text-box mb_40">
                            <p>
                              Here we believe in the transformative power of
                              collaboration. In today's dynamic financial
                              landscape, forging strategic alliances with
                              brokers and financial institutions is paramount to
                              unlocking new avenues of growth and success. With
                              CWBANK as your partner, you gain access to a
                              comprehensive suite of resources and support
                              tailored to elevate your business to new heights.
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
                        <img src="/assets/images/resource/affiliate-program.jpg" alt="" />
                      </figure>
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
                <h2>Benefits of Partnering with CWBANK's Affiliate Program</h2>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                  <img src="/assets/images/resource/affiliate-program-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Competitive Commissions
                        </h2>
                        <p className="mb_30">
                          Earn generous commissions for every qualified referral
                          that leads to a new account opening or trading
                          activity. Our tiered commission structure ensures that
                          the more referrals you drive, the more you earn. With
                          unlimited earning potential, the sky's the limit when
                          it comes to your earnings as an affiliate partner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                  <img src="/assets/images/resource/affiliate-program-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">Easy Integration</h2>
                        <p className="mb_30">
                          Joining and integrating our Affiliate Program into
                          your website or online platform is quick and
                          hassle-free. Simply sign up, access our marketing
                          materials, and start promoting CWBANK's products and
                          services to your audience. With seamless integration,
                          you can start monetizing your online presence in no
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                  <img src="/assets/images/resource/affiliate-program-3.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">
                          Flexible Payout Options
                        </h2>
                        <p className="mb_30">
                          Choose from a variety of payout options, including
                          revenue sharing, CPA (Cost Per Acquisition), and
                          hybrid structures, to suit your preferences and
                          revenue objectives. We understand that every affiliate
                          partner is unique, which is why we offer flexible
                          payout arrangements tailored to your individual needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-0 order-lg-1">
                  <figure className="image-box">
                  <img src="/assets/images/resource/affiliate-program-4.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_one">
                    <div className="content-box pt_10">
                      <div className="inner-box">
                        <h2 className="pb_20 highlight">Dedicated Support</h2>
                        <p className="mb_30">
                          Our Affiliate Management team is dedicated to helping
                          you succeed as an affiliate partner. Receive
                          personalized support with onboarding, marketing
                          strategies, and ongoing assistance. Whether you need
                          guidance on promotional tactics or assistance with
                          tracking your referrals, our team is here to support
                          you every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix align-items-center mt_30 mb_30">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                  <img src="/assets/images/resource/introducing-broker-program-4.jpg" alt="" />
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
                          tools, empowering you to monitor your referrals, track
                          commissions, and analyze performance in real-time. Our
                          transparent reporting ensures full visibility into
                          your earnings and commissions, allowing you to
                          optimize your strategies for maximum results.
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
                    Join CW BANK's Affiliate Program Today
                  </h3>
                  <p className="mb_30 lead_text">
                    Partner with CWBANK's Affiliate Program and start earning
                    competitive commissions by promoting our industry-leading
                    financial products and services to your audience. Whether
                    you're a seasoned marketer or a novice affiliate, our
                    program offers the resources and support you need to
                    succeed. Turn your website traffic into revenue and unlock
                    new opportunities for growth and success with CWBANK's
                    Affiliate Program. Sign up today and start maximizing your
                    earning potential as an affiliate partner.
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
