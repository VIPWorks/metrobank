'use client'
import { ForexHeatMap } from "react-ts-tradingview-widgets";

export default function HeatmapWidget() {
    return (
        <>
           <ForexHeatMap
            colorTheme="light"
            width="auto"
            height="500"></ForexHeatMap>
        </>
    )
}
