"use client";
import React, { useEffect, useRef, memo } from 'react';

function SingleTickerWidget(props) {
  const container = useRef();
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "${props?.symbol}",
          "width": "100%",
          "isTransparent": false,
          "colorTheme": "light",
          "locale": "en"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(SingleTickerWidget);
