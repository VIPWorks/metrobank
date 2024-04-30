"use client";
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  return (
    <>
      <Layout headerStyle={"Metro"} footerStyle={1} breadcrumbTitle="Support">
        <div>
          <section className="about-style-two pt_120 pb_120">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h6>SUPPORT</h6>
                        <h2>The Finance Guide on All Stage of Life.</h2>
                      </div>
                      <div className="text-box mb_40">
                      <p>
                          At CW BANK, we pride ourselves on being a leading
                          financial institution dedicated to providing
                          innovative solutions and exceptional service to our
                          clients.
                          <br />
                          Our company profile reflects our commitment to
                          excellence, integrity, and transparency in everything
                          we do.
                        </p>
                        <ul className="list-style-one clearfix">
                          <li>
                            <Link href="/contact-us" className="link">Contact Us</Link>
                          </li>
                          <li>
                            <Link href="/live-chat" className="link">Live Chat</Link>
                          </li>
                          <li>
                            <Link href="/help-center" className="link">Help Center</Link>
                          </li>
                          <li>
                            <Link href="/client-portal" className="link">Client Portal</Link>
                          </li>
                          <li>
                            <Link href="/account-funding" className="link">Account Funding</Link>
                          </li>
                          <li>
                            <Link href="/account-management" className="link">
                              Account Management
                            </Link>
                          </li>
                          <li>
                            <Link href="/technical-support" className="link">
                              Technical Support
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="btn-box">
                        <Link href="/about" className="theme-btn btn-one">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_two">
                    <div className="image-box">
                      <div className="image-shape">
                        <div
                          className="shape-1"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-11.png)",
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
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="image-inner">
                            <figure className="image mb_30">
                              <img
                                src="/assets/images/resource/about-2.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="experience-box">
                              <h2>
                                25<span>Years</span>
                              </h2>
                              <h5>of Experience in the Finance Service</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="image-inner">
                            <figure className="image pt_115">
                              <img
                                src="/assets/images/resource/about-3.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                    <form method="post" action="/contact">
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
