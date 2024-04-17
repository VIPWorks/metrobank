import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="service-style-three pt_120 pb_90">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/background/service-bg-3.jpg)",
          }}
        ></div>
        <div className="auto-container">
          <div className="sec-title light centred mb_60">
            <h6 className="pb_20">Our Services</h6>
            <h2>Explore the opportunities with CW BANK</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details">
                    <img src="assets/images/service/service-5.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-12"></i>
                  </div>
                  <h4>
                    <Link href="/digital-banking">Digital Banking</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Budget Management Tools</li>
                    <li>Effortless Bill Payments</li>
                    <li>Remote Check Deposits</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-2">
                    <img src="assets/images/service/service-6.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-13"></i>
                  </div>
                  <h4>
                    <Link href="/liquidity-providers">Liquidity Provider</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Direct Market Access</li>
                    <li>Wide Range of Instruments</li>
                    <li>Dedicated Support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-3">
                    <img src="assets/images/service/service-7.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-14"></i>
                  </div>
                  <h4>
                    <Link href="/risk-management">Risk Management</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Competitive Without Cost</li>
                    <li>Well Connected</li>
                    <li>Effective Risk Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="900ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-4">
                    <img src="assets/images/service/service-8.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-15"></i>
                  </div>
                  <h4>
                    <Link href="/white-label-solutions">
                      White Label Solutions
                    </Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Empowering Your Brand</li>
                    <li>Flexible Pricing Models</li>
                    <li>Enhanced Functionality</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-5">
                    <img src="assets/images/service/service-9.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-16"></i>
                  </div>
                  <h4>
                    <Link href="/trading-solutions">Trading Solutions</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Risk Management Tools</li>
                    <li>Dedicated Customer Support</li>
                    <li>Direct Market Access</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-6">
                    <img src="assets/images/service/service-10.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-17"></i>
                  </div>
                  <h4>
                    <Link href="/robo-advisory-services">
                      Robo Advisory Services
                    </Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Transparent Fee Structures</li>
                    <li>Access to Investment Professionals</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-7">
                    <img src="assets/images/service/service-11.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    <Link href="/wealth-management">Wealth Management</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Financial Planning</li>
                    <li>Regular Reviews</li>
                    <li>Tax Planning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="900ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <Link href="/service-details-8">
                    <img src="assets/images/service/service-12.jpg" alt="" />
                  </Link>
                </figure>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-19"></i>
                  </div>
                  <h4>
                    <Link href="/mortgage-solutions">Mortgage Solutions</Link>
                  </h4>
                  <ul className="list-item clearfix">
                    <li>Personalized Guidance</li>
                    <li>Refinance Options</li>
                    <li>Expert Advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
