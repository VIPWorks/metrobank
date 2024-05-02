'use client'
import Link from "next/link"
import SingleTicker from "@/components/widgets/SingleTicker"
import { useState } from "react"
import Sidebar from "@/components/layout/Sidebar"

export default function Exchange() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
    
        <>
            <section className="exchange-section pt_120 pb_90 centred">
                <div className="auto-container">
                    <div className="sec-title mb_70">
                    <h6>Exchange Currency</h6>
                    <h2>Foreign Exchange Rate</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_60">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Foreign Currency</a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Crypto Currency</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:EURUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:GBPUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:USDJPY" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:AUDUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:USDCAD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="FX:USDCHF" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="BITSTAMP:BTCUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="BITSTAMP:ETHUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="BITSTAMP:SOLUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="BITSTAMP:XRPUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <SingleTicker symbol="CRYPTO:TONUSD" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                        <div className="exchange-block-one red">
                                            <div className="inner-box">
                                                <SingleTicker symbol="BITSTAMP:ADAUSD" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
