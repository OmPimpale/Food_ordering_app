
let LoginForm = () => {


    return (
        <>
            <section className="row justify-content-center py-4" id="loginform">
                <div className="col-11 col-md-10 col-lg-8 col-xxl-6">
                    <section className="row">
                        <i className="fa-solid fa-chevron-left"></i>

                        <div className="col-12 mt-3 py-4 rounded-3" id="formdiv">
                            <h3 id="loginformhead">Welcome Back!</h3>
                            <p id="loginformtext">Sign in to continue</p>
                            <form action="" className="text-center">
                            {/* <i class="fa-solid fa-envelope"></i> */}
                                <input type="email" placeholder="Email" className="form-control logininpuut mb-3 py-2" />
                                {/* <i class="fa-solid fa-key"></i> */}
                                <input type="password" placeholder="Password" className="form-control logininpuut py-2" />

                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input border-0" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label" for="flexCheckIndeterminate" id="checkboxtext">
                                            Remember me
                                        </label>
                                    </div>
                                    <p id="forgotpasstext" className="m-0">Forget Password?</p>
                                </div>
                                <button className="btn" id="loginbtn">Sign In</button>
                            </form>
                            <div className="mt-4">
                                <p id="signupbtn">Don't have an account? <span>Sign up.</span></p>
                            </div>
                        </div>
                        <div className="col mt-4">
                            <div className="row justify-content-center">
                                {/* <div className="col-5 text-center formicondiv rounded-3 py-4 me-3"> */}
                                <a href="#" className="col-5 text-center formicondiv rounded-3 py-4 me-3"><i className="fa-brands fa-linkedin-in formicon"></i></a>
                                {/* </div> */}
                                {/* <div className="col-5 text-center formicondiv rounded-3 py-4 ms-3"> */}
                                <a href="#" className="col-5 text-center formicondiv rounded-3 py-4 ms-3"><i className="fa-brands fa-github formicon px-auto"></i></a>
                                {/* </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default LoginForm;