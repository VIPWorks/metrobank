import Link from "next/link";

export default function News() {
  return (
    <>
      <section className="news-section pt_120 pb_90">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(/assets/images/shape/shape-6.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(/assets/images/shape/shape-7.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <h6 className="pb_20">Latest News</h6>
            <h2>Our Latest Media Update</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-two wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blog-details-1">
                      <img src="/assets/images/news/news-4.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="post-date">
                      <h4>
                        15<span>April</span>
                      </h4>
                    </div>
                    <h3>
                      <Link href="/blog-details-1">
                      Maximizing Profits with Ultra-Tight Spreads
                      </Link>
                    </h3>
                    <p>The ray of hope in these turbulent times is that retail traders are sitting on a cash pile of almost $1.8 trillion. This is a result of rage selling, driven by recessionary fears in 2022.
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-32"></i>
                        Vicky Malik
                      </li>
                      <li>
                        <i className="icon-33"></i>0 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-two wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blog-details-2">
                      <img src="/assets/images/news/news-5.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="post-date">
                      <h4>
                        14<span>April</span>
                      </h4>
                    </div>
                    <h3>
                      <Link href="/blog-details-2">
                        {/* Market Analysis for Brokers:  */}
                        Outsourcing or In-House Team?
                      </Link>
                    </h3>
                    <p>Establishing credibility and trust as a broker is crucial in attracting new clients. By offering insightful market analysis, you demonstrate your expertise.
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-32"></i>
                        Vicky Malik
                      </li>
                      <li>
                        <i className="icon-33"></i>3 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blog-details-3">
                      <img src="/assets/images/news/news-6.jpg" alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="post-date">
                      <h4>
                        13<span>April</span>
                      </h4>
                    </div>
                    <h3>
                      <Link href="/blog-details-3">How to Choose and Evaluate a CRM for Your Forex Brokerage
                      </Link>
                    </h3>
                    <p>The global Customer Relationship Management (CRM) software market is projected to grow significantly, driven by the increasing digitization in financial services.
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-32"></i>
                        Vicky Malik
                      </li>
                      <li>
                        <i className="icon-33"></i>4 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: "url(/assets/images/news/news-1.jpg)",
                  }}
                >
                  <div className="content-box">
                    <span className="post-date">
                      <i className="icon-27"></i>Apr 15, 2024
                    </span>
                    <h3>
                      <Link href="/blog-details">
                        Self-Guided Driving & Tours Walk Of Greater City
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      <li>
                        <i className="icon-28"></i>
                        <Link href="/blog-details">Vicky Malik</Link>
                      </li>
                      <li>
                        <i className="icon-29"></i>0 Comment
                      </li>
                    </ul>
                    <div className="btn-box">
                      <Link
                        href="/blog-details"
                        className="theme-btn btn-three"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: "url(/assets/images/news/news-2.jpg)",
                  }}
                >
                  <div className="content-box">
                    <span className="post-date">
                      <i className="icon-27"></i>Apr 14, 2024
                    </span>
                    <h3>
                      <Link href="/blog-details">
                        Assistance For Homes & Properties Real Estate
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      <li>
                        <i className="icon-28"></i>
                        <Link href="/blog-details">Vicky Malik</Link>
                      </li>
                      <li>
                        <i className="icon-29"></i>4 Comment
                      </li>
                    </ul>
                    <div className="btn-box">
                      <Link
                        href="/blog-details"
                        className="theme-btn btn-three"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: "url(/assets/images/news/news-3.jpg)",
                  }}
                >
                  <div className="content-box">
                    <span className="post-date">
                      <i className="icon-27"></i>Apr 13, 2024
                    </span>
                    <h3>
                      <Link href="/blog-details">
                        Long-Term Vision Of Health & Attractive Facility
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      <li>
                        <i className="icon-28"></i>
                        <Link href="/blog-details">Vicky Malik</Link>
                      </li>
                      <li>
                        <i className="icon-29"></i>1 Comment
                      </li>
                    </ul>
                    <div className="btn-box">
                      <Link
                        href="/blog-details"
                        className="theme-btn btn-three"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
