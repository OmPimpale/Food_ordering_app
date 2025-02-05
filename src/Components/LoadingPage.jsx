let LoadingPage = () => {



    return (
        <>

            <section className="row py-4 py-md-5" id="loadingpage">
                <div className="col">
                    <section className="row justify-content-center">
                        <div id="carouselExampleCaptions" className="col-12 carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./05.jpg" className="d-block mx-auto img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./06.jpg" className="d-block mx-auto img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./07.jpg" className="d-block mx-auto img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-11 py-4 m-4 rounded-3 text-center" id="apptext">
                            <div>
                                <h3 className="loadinghead">Embark On Culinary
                                    <br /> Adventures</h3>
                                <p className="loadingtext">Embark on an existing culinary
                                    <br /> journy wuth our app.</p>
                            </div>
                            <div className="d-none">
                                <h3 className="loadinghead">Craft Your
                                    <br /> Perfect Order</h3>
                                <p className="loadingtext">Customize your cravings and place
                                    <br /> orders effortlessly.</p>
                            </div>
                            <div className="d-none">
                                <h3 className="loadinghead">Taste The
                                    <br /> Delivered Magic</h3>
                                <p className="loadingtext">Enjoy the convenience of doorstep
                                    <br /> culinary delights.</p>
                            </div>
                        </div>
                        <button className="btn rounded-3" id="loadingbtn">Get Started</button>
                    </section>
                </div>
            </section>

        </>
    )
}

export default LoadingPage;