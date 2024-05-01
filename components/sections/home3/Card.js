import Link from "next/link";

export default function Card() {
  return (
    <>
      <section className="card-section centred pt_120 pb_90">
        <div className="pattern-layer">
          <div className="pattern-1 rotate-me"></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title mb_70">
            <h6>Our Credit Card</h6>
            <h2>Credit Cards We Provide</h2>
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
                      <img src="/assets/images/resource/card-1.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>
                      Visa Silver Card
                    </h3>
                    <p>
                      With competitive rates and worldwide acceptance, it's the
                      perfect companion for your everyday purchases and travel
                      needs. Apply now to unlock a world of financial freedom.
                    </p>
                    <div className="btn-box">
                      <Link href="/contact-us" className="theme-btn btn-two">
                         Apply For Card
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
                      <img src="/assets/images/resource/card-2.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>
                      Mastercard Gold Card
                    </h3>
                    <p>
                      From exclusive rewards to premium benefits, this card is
                      designed to complement your lifestyle. Apply now and enjoy
                      the privileges of Gold status.
                    </p>
                    <br/>
                    <div className="btn-box">
                      <Link href="/contact-us" className="theme-btn btn-two">
                         Apply For Card
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
                      <img src="/assets/images/resource/card-3.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>
                      Visa Platinum Card
                    </h3>
                    <p>
                      With enhanced rewards, concierge services, and travel
                      perks, this card is tailored for discerning individuals.
                      Apply now to elevate your banking experience.
                    </p>
                    <br/>
                    <div className="btn-box">
                      <Link href="/contact-us" className="theme-btn btn-two">
                         Apply For Card
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
