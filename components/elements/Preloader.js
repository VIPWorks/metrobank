export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="c" className="letters-loading">
                                c
                            </span>
                            <span data-text-preloader="w" className="letters-loading">
                                w
                            </span>
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="k" className="letters-loading">
                                k
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
