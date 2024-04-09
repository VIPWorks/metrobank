import Testimonial from "@/components/sections/home3/Testimonial"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={"Metro"}
        footerStyle={1}
        breadcrumbTitle="Mission and Values"
      >
        <div>
          {/* about-style-two */}
          <section className="company-section">
            <div className="pattern-layer rotate-me"></div>
            <div className="row clearfix">
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_60">
                    <div className="company_bold_heading">
                      <h2>Guiding Principles for Success</h2>
                    </div>

                    <div className="company_content">
                      <p className="mb_45">
                      At CW BANK, our mission and values serve as the cornerstone of our organization, guiding our decisions, actions, and interactions with clients, employees, and stakeholders. Rooted in integrity, innovation, and excellence, our mission and values reflect our commitment to delivering exceptional service, driving sustainable growth, and making a positive impact in the communities we serve.
                      </p>
                      <h3 className="mb_10">Our Mission</h3>
                      <p>Our mission at CW BANK is to empower individuals and businesses to achieve their financial goals and aspirations. We strive to be a trusted partner and advisor, providing innovative solutions, expert guidance, and exceptional service to our clients. Through our dedication to excellence and integrity, we aim to build long-lasting relationships and create value for our clients, employees, and shareholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div className="image_block_three">
                  <div className="image-box pr_80 mr_20">
                    <figure className="image">
                      <img
                        src="https://www.swissquote.com/_next/image?url=%2Fapi%2Finternal%2Fmedia%2Fget-media%3Ffilename%3D2023-09%2Fheader-partners.jpg&w=1024&q=90"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section values pt_120 pb_90">
            <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
            <div className="auto-container">
              <div className="sec-title centred mb_60">
                <h2>Our Values</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Integrity</h4>
                      <p>
                      At CW BANK, integrity is non-negotiable. We conduct our business with the highest ethical standards, honesty, and transparency, earning the trust and confidence of our clients and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Innovation</h4>
                      <p>
                      We embrace innovation as a catalyst for growth and success. We continuously seek new ideas, technologies, and solutions to enhance our products and services, driving innovation and creating value for our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Continuous Improvement</h4>
                      <p>
                      We are committed to continuous improvement and learning. We embrace change, adapt to new challenges, and strive for continuous growth and development, both personally and professionally.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Client-Centricity</h4>
                      <p>
                      Our clients are at the heart of everything we do. We listen to their needs, understand their goals, and tailor our solutions to meet their unique requirements. We are dedicated to delivering value, building trust, and exceeding expectations for every client, every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Teamwork</h4>
                      <p>
                      Collaboration and teamwork are fundamental to our success. We value diversity, respect, and collaboration, fostering a culture of inclusivity and teamwork where every individual is valued, respected, and empowered to contribute their best.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Excellence</h4>
                      <p>
                      We strive for excellence in everything we do. From delivering exceptional service to achieving superior results, we are committed to excellence in all aspects of our business, setting the highest standards for ourselves and exceeding the expectations of our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Social Responsibility</h4>
                      <p>
                      We recognize our responsibility to make a positive impact on society and the environment. We are committed to conducting our business in a socially responsible and environmentally sustainable manner, giving back to the communities in which we operate, and contributing to the well-being of future generations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Diversity and Inclusion</h4>
                      <p>
                      We celebrate diversity and inclusion as essential elements of our culture and success. We foster an inclusive environment where every individual feels valued, respected, and empowered to contribute their unique perspectives and talents.
                      </p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                  <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="shape"></div>
                      <div className="icon-box"><i className="icon-12"></i></div>
                      <h4>Corporate Citizenship</h4>
                      <p>
                      We are committed to being responsible corporate citizens, contributing to the communities in which we operate through philanthropy, volunteerism, and community engagement initiatives. We strive to make a meaningful and lasting impact on society, supporting education, health, environmental conservation, and social welfare initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="joinNow-section pb_60">
            <div className="auto-container">
              <div className="content-box mt_60 text-center">
                <div>
                  <h3 className="mb_20 highlight">Join Us</h3>
                  <p className="lead_text">
                    At CW BANK, our mission and values inspire and guide us in
                    everything we do. We invite you to join us on this journey
                    and experience the difference that integrity, innovation,
                    and excellence can make in your financial success. Together,
                    we can achieve great things and create a brighter future for
                    all.
                  </p>
                  <br />
                  <strong>
                    Thank you for choosing CW BANK as your trusted partner in
                    financial success.
                  </strong>
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
