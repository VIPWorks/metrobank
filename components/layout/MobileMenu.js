'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>
            <div className="mobile-menu" >
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="assets/images/CW-logo-footer.png" alt="" />
                        </Link>
                    </div>

                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/">Home</Link>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/services">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/digital-banking">Digital Banking</Link></li>
                                        <li><Link href="/liquidity-providers">Liquidity Provider</Link></li>
                                        <li><Link href="/risk-management">Risk Management</Link></li>
                                        <li><Link href="/white-label-solutions">White Label Solutions</Link></li>
                                        <li><Link href="/trading-solutions">Trading Solutions</Link></li>
                                        <li><Link href="/robo-advisory-services">Robo-Advisory Services</Link></li>
                                        <li><Link href="/wealth-management">Wealth Management</Link></li>
                                        <li><Link href="/mortgage-solutions">Mortgage Solutions</Link></li>
                                    </ul>

                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/markets">Markets</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/forex-trading">Forex</Link></li>
                                        <li><Link href="/cfds">CFDs</Link></li>
                                        <li><Link href="/stock">Stock</Link></li>
                                        <li><Link href="/etfs">ETFs</Link></li>
                                        <li><Link href="/cryptocurrencies">Cryptocurrencies</Link></li>
                                        <li><Link href="/bonds">Bonds</Link></li>
                                        <li><Link href="/money-markets">Money Markets</Link></li>
                                        <li><Link href="/options-&-futures">Options & Futures</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link href="/partners">Partners</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/broker-partnerships">Broker Partnerships</Link></li>
                                        <li><Link href="/institutional-solutions">Institutional Solutions</Link></li>
                                        <li><Link href="/introducing-broker-program">Introducing Broker Program</Link></li>
                                        <li><Link href="/affiliate-program">Affiliate Program</Link></li>
                                        <li><Link href="/partners-white-label-solutions">White Label Solutions</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                                    <Link href="/technology">Technology</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/trading-platforms">Trading Platforms</Link></li>
                                        <li><Link href="/mobile-trading">Mobile Trading</Link></li>
                                        <li><Link href="/api-integration">API Integration</Link></li>
                                        <li><Link href="/advanced-tools-and-analytics">Advanced Tools and Analytics</Link></li>
                                        <li><Link href="/research-and-insights">Research and Insights</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}>
                                    <Link href="/resources">Resources</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="/market-insights">Market Insights</Link></li>
                                        <li><Link href="/economic-calendar">Economic Calendar</Link></li>
                                        <li><Link href="/news-and-analysis">News and Analysis</Link></li>
                                        <li><Link href="/client-testimonials">Client Testimonials</Link></li>
                                        <li><Link href="/faqs">FAQs</Link></li>
                                        <li><Link href="/trading-calculator">Trading Calculator</Link></li>
                                        <li><Link href="/market-heatmap">Market Heatmap</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                                    <Link href="/about-us">About</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link href="/overview">Overview</Link></li>
                                        <li><Link href="/company-profile">Company Profile</Link></li>
                                        <li><Link href="/mission-and-values">Mission and Values</Link></li>
                                        <li><Link href="/financial-highlights">Financial Highlights</Link></li>
                                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                                        <li><Link href="/career-opportunities">Career Opportunities</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}>
                                    <Link href="/support">Support</Link>
                                    <ul style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                        <li><Link href="/live-chat">Live Chat</Link></li>
                                        <li><Link href="/help-center">Help Center</Link></li>
                                        <li><Link href="/client-portal">Client Portal</Link></li>
                                        <li><Link href="/account-funding">Account Funding</Link></li>
                                        <li><Link href="/account-management">Account Management</Link></li>
                                        <li><Link href="/technical-support">Technical Support</Link></li>
                                    </ul>
                                    <div className={isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(8)}><span className="fa fa-angle-right" /></div>
                                </li>
                                {/* <li><Link href="/contact">Contact</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    {/*menu-outer end*/}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                        </ul>
                    </div>

                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
export default MobileMenu;
