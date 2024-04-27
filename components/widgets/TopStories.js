import React from 'react'
//import { Helmet } from "react-helmet"
import Script from "next/script"

export default function TopStories() {
    return (
        <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
            <Script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
            {`
            "feedMode": "all_symbols",
            "isTransparent": false,
            "displayMode": "regular",
            "width": 400,
            "height": 550,
            "colorTheme": "light",
            "locale": "en"
            `}
            </Script>
        </div>
    );
  }
