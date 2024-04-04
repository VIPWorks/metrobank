import Link from "next/link"
// import { useRouter } from "next/router"

export default function MenuMetro() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li><Link href="/index-metro">Home</Link></li>
                <li className="dropdown"><Link href="/service-cw">Services</Link>
                    <ul>
                        <li><Link href="/digital-banking">Digital Banking</Link></li>
                        <li><Link href="/liquidity-providers">Liquidity Provider</Link></li>
                        <li><Link href="/risk-management">Risk Management</Link></li>
                        <li><Link href="/white-label-solutions">White Label Solutions</Link></li>
                        <li><Link href="/trading-solutions">Trading Solutions</Link></li>
                        <li><Link href="/robo-advisory-services">Robo-Advisory Services</Link></li>
                        <li><Link href="/wealth-management">Wealth Management</Link></li>
                        <li><Link href="/mortgage-solutions">Mortgage Solutions</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/markets">Markets</Link>
                    <ul>
                        <li><Link href="/forex-trading">Forex</Link></li>
                        <li><Link href="/cfds">CFDs</Link></li>
                        <li><Link href="/stock">Stock</Link></li>
                        <li><Link href="/etfs">ETFs</Link></li>
                        <li><Link href="/cryptocurrencies">Cryptocurrencies</Link></li>
                        <li><Link href="/bonds">Bonds</Link></li>
                        <li><Link href="/money-markets">Money Markets</Link></li>
                        <li><Link href="/options-&-futures">Options & Futures</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/partners">Partners</Link>
                    <ul>
                        <li><Link href="/broker-partnerships">Broker Partnerships</Link></li>
                        <li><Link href="/institutional-solutions">Institutional Solutions</Link></li>
                        <li><Link href="/introducing-broker-program">Introducing Broker Program</Link></li>
                        <li><Link href="/affiliate-program">Affiliate Program</Link></li>
                        <li><Link href="/partners-white-label-solutions">White Label Solutions</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/technology">Technology</Link>
                    <ul>
                        <li><Link href="/trading-platforms">Trading Platforms</Link></li>
                        <li><Link href="/mobile-trading">Mobile Trading</Link></li>
                        <li><Link href="/api-integration">API Integration</Link></li>
                        <li><Link href="/advanced-tools-and-analytics">Advanced Tools and Analytics</Link></li>
                        <li><Link href="/research-and-insights">Research and Insights</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/resources">Resources</Link>
                    <ul>
                        <li><Link href="/market-insights">Market Insights</Link></li>
                        <li><Link href="/economic-calendar">Economic Calendar</Link></li>
                        <li><Link href="/news-and-analysis">News and Analysis</Link></li>
                        <li><Link href="/client-testimonials">Client Testimonials</Link></li>
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/trading-calculator">Trading Calculator</Link></li>
                        <li><Link href="/market-heatmap">Market Heatmap</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/about-us/">About</Link>
                    <ul>
                        <li><Link href="/overview">Overview</Link></li>
                        <li><Link href="/company-profile">Company Profile</Link></li>
                        <li><Link href="/mission-and-values">Mission and Values</Link></li>
                        <li><Link href="/financial-highlights">Financial Highlights</Link></li>
                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                        <li><Link href="/career-opportunities">Career Opportunities</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/support">Support</Link>
                    <ul>
                        <li><Link href="/service-details">Contact Us</Link></li>
                        <li><Link href="/service-details-2">Live Chat</Link></li>
                        <li><Link href="/service-details-3">Help Center</Link></li>
                        <li><Link href="/service-details-4">Client Portal</Link></li>
                        <li><Link href="/service-details-5">Account Funding</Link></li>
                        <li><Link href="/service-details-5">Account Management</Link></li>
                        <li><Link href="/service-details-5">Technical Support</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}









                                    
