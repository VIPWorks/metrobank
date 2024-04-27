import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <div className="top_footer pt_90 pb_90">
        <div class="main_div d-flex d-col">
          <div class="heading">
            <h2>FOLLOW US</h2>
          </div>
          <div class="d-flex wrap">
            <div class="anchor">
              <i className="fab fa-facebook"></i>
              <a>Facebook</a>
            </div>
            <div class="anchor">
              <i className="fab fa-instagram"></i>
              <a>Instagram</a>
            </div>
            <div class="anchor">
              <i className="fab fa-black-tie"></i>
              <a>Tiktok</a>
            </div>
            <div class="anchor">
              <i className="fab fa-linkedin"></i>
              <a>Linkedin</a>
            </div>
            <div class="anchor">
              <i className="fab fa-twitter"></i>
              <a>X</a>
            </div>
            <div class="anchor">
              <i className="fab fa-youtube"></i>
              <a>youtube</a>
            </div>
          </div>
        </div>
      </div>

      {/* main footer code */}
      <footer className="main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-8.png)",
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-9.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="/assets/images/CW-logo-footer.png" alt="" />
                    </Link>
                  </figure>
                  <p>
                    At CW BANK, we are committed to revolutionizing the way
                    individuals and businesses approach finance. With a rich
                    heritage and a forward-thinking approach, we strive to be at
                    the forefront of innovation in the financial industry. Our
                    dedication to excellence, integrity, and customer-centricity
                    sets us apart as a trusted partner for all your financial
                    needs.
                  </p>
                  <ul className="social-links">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_40">
                  <div className="widget-title">
                    <h4>Services</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/digital-banking">Digital Banking</Link>
                      </li>
                      <li>
                        <Link href="/liquidity-providers">
                          Liquidity Provider
                        </Link>
                      </li>
                      <li>
                        <Link href="/risk-management">Risk Management</Link>
                      </li>
                      <li>
                        <Link href="/white-label-solutions">
                          White Label Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/trading-solutions">Trading Solutions</Link>
                      </li>
                      <li>
                        <Link href="/robo-advisory-services">
                          Robo-Advisory Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/wealth-management">Wealth Management</Link>
                      </li>
                      <li>
                        <Link href="/mortgage-solutions">
                          Mortgage Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Resources</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/market-insights">Market Insights</Link>
                      </li>
                      <li>
                        <Link href="/economic-calendar">Economic Calendar</Link>
                      </li>
                      <li>
                        <Link href="/news-and-analysis">News and Analysis</Link>
                      </li>
                      <li>
                        <Link href="/client-testimonials">
                          Client Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link href="/faqs">FAQs</Link>
                      </li>
                      <li>
                        <Link href="/trading-calculator">
                          Trading Calculator
                        </Link>
                      </li>
                      <li>
                        <Link href="/market-heatmap">Market Heatmap</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h4>Find Our Branch & ATM</h4>
                  </div>
                  <div className="form-inner">
                    <form method="post" action="index">
                      <div className="form-group">
                        <div className="select-box">
                          <select className="wide">
                            <option data-display="Branch">Branch</option>
                            <option value="1">California</option>
                            <option value="2">Man City</option>
                            <option value="3">New York</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="theme-btn btn-one">
                          Find on Map
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                Copyright 2024 by <Link href="/">CWBank</Link>. All Right
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
