import Link from "next/link";

export default function App() {
  return (
    <>
      <section className="apps-section alternat-2 pt_120 pb_120">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
          ></div>
        </div>
        <div className="image-layer">
          <figure className="image-1">
            <img src="assets/images/resource/CW-Bank-mobile-1.png" alt="" />
          </figure>
          <figure className="image-2">
            <img src="assets/images/resource/CW-Bank-mobile-2.png" alt="" />
          </figure>
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
              <div className="content-box ml_50">
                <div className="sec-title light mb_20">
                  <h6>Mobile App</h6>
                  <h2>Get the Fastest and Most Secure Banking</h2>
                </div>
                <div className="text-box mb_50">
                  <p>
                    Manage your finances anytime, anywhere with CW Bank's mobile
                    app, empowering you with intuitive features for efficient
                    banking at your fingertips.
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/" className="play-store mr_20">
                    <img src="assets/images/icons/icon-2.png" alt="" />
                    <span>get it on</span>
                    Google Play
                  </Link>
                  <Link href="/" className="play-store">
                    <img src="assets/images/icons/icon-3.png" alt="" />
                    <span>Download on the</span>
                    App Store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
