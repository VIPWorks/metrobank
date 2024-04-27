'use client'
import { MarketData } from "react-ts-tradingview-widgets";

export default function MarketDataWidget() {
    return (
        <>
           <MarketData
            colorTheme="light"
            width="auto"
            height="500"></MarketData>
        </>
    )
}
