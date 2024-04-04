import Link from "next/link"
import MenuMetro from "../MenuMetro"
import MobileMenu from "../MobileMenu"

export default function HeaderMetro({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner">
                        <ul className="links-list clearfix">
                            <li><Link href="/career">Career</Link></li>
                            <li><Link href="/faq">Faq</Link></li>
                            <li><Link href="/">Rewards</Link></li>
                            <li><Link href="/">Media</Link></li>
                        </ul>
                        <ul className="info-list clearfix">
                            <li>
                            <i className="icon-1"></i>
                            <Link href="mailto:info@example.com">info@example.com</Link>
                            </li>
                            <li>
                            <i className="icon-2"></i>
                            Find Nearest Branch
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Header lower */}
                <div className="header-lower">
                    <div className="large-container">
                    <div className="outer-box">
                        <div className="logo-box">
                        <div className="shape"></div>
                        <figure className="logo"><Link href="/index-metro"><img src="assets/images/CW-logo-new.png" alt="" /></Link></figure>
                        </div>
                        <div className="menu-area">
                        {/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light clearfix">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <MenuMetro />
                            </div>
                        </nav>
                        
                        </div>
                    </div>
                    </div>
                </div>
                {/*End Header lower*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <div className="shape"></div>
                            <figure className="logo"><Link href="/"><img src="assets/images/CW-logo-new.png" alt="" /></Link></figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <MenuMetro />
                                </div>
                            </nav>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
