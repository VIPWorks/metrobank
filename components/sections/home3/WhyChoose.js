import Link from "next/link";

export default function WhyChoose() {
  return (
    <>
      {/* feature-style-three */}
      <section className="feature-style-three pt_120 pb_90">
        <div className="auto-container">
          <div className="sec-title mb_70 centred">
            <h6>Why US</h6>
            <h2>Why Choose CW BANK</h2>
            <p>
              Access to Leading Liquidity Providers: Partnering with CW BANK
              gives you access to some of the most reputable liquidity providers
              in the forex industry, ensuring that you have access to deep
              liquidity and competitive pricing on your trades.
            </p>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-5"></i>
                  </div>
                  <h4>Robust and Reliable Trading Infrastructure</h4>
                  <p>
                    Our advanced trading infrastructure is designed to deliver
                    fast, reliable, and secure order execution, even during
                    periods of high market volatility. With CW BANK, you can
                    trade with confidence, knowing that your orders will be
                    executed promptly and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-6"></i>
                  </div>
                  <h4>Transparent and Fair Pricing</h4>
                  <p>
                    We believe in transparency and fairness when it comes to
                    pricing. Our pricing is competitive and transparent, with no
                    hidden fees or commissions. You can trust CW BANK to offer
                    you fair and competitive pricing on your trades.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-7"></i>
                  </div>
                  <h4>Dedicated Customer Support</h4>
                  <p>
                    Our team of experienced customer support professionals is
                    available 24/7 to assist you with any questions or concerns
                    you may have. Whether you need help with technical issues,
                    account inquiries, or trading assistance, we're here to help
                    you every step of the way.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link href="/service">Less Time in any Loans Approval</Link></h4>
                                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                            </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
      {/* feature-style-three end */}
    </>
  );
}
