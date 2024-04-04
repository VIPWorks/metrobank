import Link from "next/link";

export default function Card() {
  return (
    <>
      <section className="card-section centred pt_120 pb_90">
        <div className="pattern-layer">
          <div className="pattern-1 rotate-me"></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title mb_70">
            <h2>Why Choose CW BANK</h2>
            <p>
              Access to Leading Liquidity Providers: Partnering with CW BANK
              gives you access to some of the most reputable liquidity providers
              in the forex industry, ensuring that you have access to deep
              liquidity and competitive pricing on your trades.
            </p>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img src="assets/images/resource/card-1.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">
                        Robust and Reliable Trading Infrastructure
                      </Link>
                    </h3>
                    <p>
                      Our advanced trading infrastructure is designed to deliver
                      fast, reliable, and secure order execution, even during
                      periods of high market volatility. With CW BANK, you can
                      trade with confidence, knowing that your orders will be
                      executed promptly and efficiently.
                    </p>
                    <div className="btn-box">
                      <Link href="/index-2" className="theme-btn btn-two">
                        Apply for Card
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img src="assets/images/resource/card-2.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Transparent and Fair Pricing</Link>
                    </h3>
                    <p>
                      We believe in transparency and fairness when it comes to
                      pricing. Our pricing is competitive and transparent, with
                      no hidden fees or commissions. You can trust CW BANK to
                      offer you fair and competitive pricing on your trades.
                    </p>
                    <div className="btn-box">
                      <Link href="/index-2" className="theme-btn btn-two">
                        Apply for Card
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img src="assets/images/resource/card-3.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Dedicated Customer Support</Link>
                    </h3>
                    <p>
                      Our team of experienced customer support professionals is
                      available 24/7 to assist you with any questions or
                      concerns you may have. Whether you need help with
                      technical issues, account inquiries, or trading
                      assistance, we're here to help you every step of the way.
                    </p>
                    <div className="btn-box">
                      <Link href="/index-2" className="theme-btn btn-two">
                        Apply for Card
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}