import { Fragment, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import web1 from "../../../public/assets/landing/web/1.png"
import web2 from "../../../public/assets/landing/web/2.png"
import web3 from "../../../public/assets/landing/web/3.png"
import web4 from "../../../public/assets/landing/web/4.png"
import web5 from "../../../public/assets/landing/web/5.png"
import web6 from "../../../public/assets/landing/web/6.png"

export const Slicksider = () => {

    useEffect(()=>{
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".landing-page")) {
              let Scolls = document.querySelectorAll(".sticky");
              Scolls.forEach((e) => {
                e.classList.add("sticky-pin");
              });
            } else {
              let Scolls = document.querySelectorAll(".sticky");
              Scolls.forEach((e) => {
                e.classList.remove("sticky-pin");
              });
            }
          }

        if (typeof window !== "undefined") {
          window.addEventListener("scroll", landingpages);
        }
    })


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Fragment>
            <div>
                <Slider {...settings}>
                    <div>
                        <img alt="web1" src={web1.src} />
                        <h5 className="mt-3 text-white">Bootstrap5</h5>
                    </div>
                    <div>
                        <img alt="web2" src={web2.src} />
                        <h5 className="mt-3 text-white">HTML5</h5>
                    </div>
                    <div>
                        <img alt="web3" src={web3.src} />
                        <h5 className="mt-3 text-white">JQuery</h5>
                    </div>
                    <div>
                        <img alt="web4" src={web4.src} />
                        <h5 className="mt-3 text-white">Sass</h5>
                    </div>
                    <div>
                        <img alt="web5" src={web5.src} />
                        <h5 className="mt-3 text-white">Gulp</h5>
                    </div>
                    <div>
                        <img alt="web6" src={web6.src} />
                        <h5 className="mt-3 text-white">NPM</h5>
                    </div>
                    <div>
                        <img alt="web1" src={web1.src} />
                        <h5 className="mt-3 text-white">Bootstrap5</h5>
                    </div>
                    <div>
                        <img alt="web2" src={web2.src} />
                        <h5 className="mt-3 text-white">HTML5</h5>
                    </div>
                </Slider>
            </div>
        </Fragment>
    )
}
export const Slicksiderwithdata = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <Fragment>
            <div>
                <div>
                    <Slider {...settings}>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80">
                                            <i className="fa fa-quote-left fs-20 text-white-80"></i>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quod eos id
                                            officiis hic tenetur quae quaerat
                                            ad velit ab. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Dolore cum accusamus eveniet molestias
                                            voluptatum inventore laboriosam
                                            labore sit, aspernatur praesentium iste
                                            impedit quidem dolor veniam.
                                        </p>
                                        <h3 className="title">Elizabeth</h3>
                                        <span className="post">Web Developer</span>
                                        <div className="rating-stars block my-rating-5 mb-5"
                                            data-rating="4"></div>
                                        <div className="slick-controls clickable">
                                            <div className="slick-pagination">
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1 ">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> Nemo
                                            enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Neque
                                            porro quisquam est, qui dolorem ipsum quia
                                            dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore.
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">williamson</h3>
                                            <span className="post">Web Developer</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className=" d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> Duis
                                            aute irure dolor
                                            in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis
                                            iste natus error sit voluptatem accusantium
                                            doloremque laudantium.
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">Sophie Carr</h3>
                                            <span className="post">Web Developer</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

//Scroll To Top

// export const Topup = () => {
//     if (window.scrollY > 30 && document.querySelector(".landing-page")) {
//         let Scolls = document.querySelectorAll(".top", ".sticky");
//         Scolls.forEach((e) => {
//             e.classList.add("sticky-pin");
//         });
//     } else {
//         let Scolls = document.querySelectorAll(".top", ".sticky");
//         Scolls.forEach((e) => {
//             e.classList.remove("sticky-pin");
//         });
//     }
// };

// window.addEventListener("scroll", Topup);