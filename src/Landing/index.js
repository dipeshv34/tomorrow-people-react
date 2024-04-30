import '../scss/index.scss';
import logo from '../assets/images/logo.svg';
import book_image from '../assets/images/book_image.svg';
import tick from '../assets/images/tick.svg';
import background_design from '../assets/images/bg_design.svg';
import bottom_section_bg_transparent from '../assets/images/bottom_section_bg_transparent.svg';
import React from "react";


const LandingPage = () => {
    return (
        <div
            className="app_wrapper"
        >
            <div className='header_container container'>
                <div className='header  text-start p-4 mx-4'>
                    <img className='header__logo ' src={logo} alt='app_logo' />
                </div>
            </div>
            <img src={background_design} alt='bg_design' className='main_section__bg_design' />
            <div className='main_section container'>

                <div className='main_section__row row justify-content-evenly align-items-start'>
                    <div className='main_section__left_section col-lg-6 col-md-12'>
                        <div className='left_section__caption_header'>eGuide</div>
                        <div className='left_section__header_text'>Use Architecture the <br /> clever way.</div>
                        <div className='left_section__image_box'>
                            <img className='image_box__image' src={book_image} alt='book_image'></img>
                        </div>
                        <div className='left_section__content_box'>
                            <div className='content_box__caption'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </div>
                            <div className='content_box__points_box'>
                                <img className='points_box__tick' alt='tick' src={tick} />
                                <span className='points_box__label'>At vero eos et accusam et justo ea rebum. </span>
                            </div>
                            <div className='content_box__points_box'>
                                <img className='points_box__tick' alt='tick' src={tick} />
                                <span className='points_box__label'>At vero et justo duo dolores eos et accusam et justo duo dolores et ea rebum.  </span>
                            </div>
                            <div className='content_box__points_box'>
                                <img className='points_box__tick' alt='tick' src={tick} />
                                <span className='points_box__label'>At vero eos et accusam et justo duo dolores et ea rebum. </span>
                            </div>
                            <div className='content_box__bottom_caption'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>
                        </div>
                    </div>
                    <div className='main_section__right_section col-lg-6 col-md-12 gy-4'>
                        <div className='right_section__header'>
                            Download guide
                        </div>
                        <div className='right_section__header_caption'>
                            Please fill out the fields below
                        </div>
                        <div className='formContainer'>
                            {/*<div className='right_section__input_wrapper'>*/}
                            {/*    <div className='input_wrapper__row'>*/}
                            {/*        <input className='input_wrapper__input' placeholder='First name*' />*/}
                            {/*        <input className='input_wrapper__input' placeholder='Last name*' />*/}
                            {/*    </div>*/}
                            {/*    <input className='input_wrapper__input' placeholder='Email Address*' />*/}
                            {/*    <input className='input_wrapper__input' placeholder='Phone Number*' />*/}
                            {/*    <div className='input_wrapper__row'>*/}
                            {/*        <select className="input_wrapper__input form-select" aria-label="Default select example" placeholder='Job Title*'>*/}
                            {/*            <option selected>Job Title*</option>*/}
                            {/*            <option value="1">One</option>*/}
                            {/*            <option value="2">Two</option>*/}
                            {/*            <option value="3">Three</option>*/}
                            {/*        </select>*/}
                            {/*        <select className="input_wrapper__input form-select" aria-label="Default select example" placeholder='Industry*'>*/}
                            {/*            <option selected>Industry*</option>*/}
                            {/*            <option value="1">One</option>*/}
                            {/*            <option value="2">Two</option>*/}
                            {/*            <option value="3">Three</option>*/}
                            {/*        </select>*/}
                            {/*    </div>*/}
                            {/*    <div className='input_wrapper__checkbox_wrapper'>*/}
                            {/*        <input className='checkbox_wrapper__checkbox' type='checkbox' />*/}
                            {/*        <span className='checkbox_wrapper__label'>Lorem ipsum dolor sit amet, consectetur</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className='right_section__description'>*/}
                            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.*/}
                            {/*</div>*/}
                            {/*<div className='right_section__button'>*/}
                            {/*    Download*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </div>


            </div>
            <div className='bottom_section'>
                <img className='bottom_section__bg_image' src={bottom_section_bg_transparent} alt='app_logo' />
                <div className='bottom_section_wrapper container'>
                    <div className='bottom_section__row  row m-4 p-4'>
                        <div className='bottom_section__text col-12'>
                            “Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore magna.”
                        </div>
                        <div className='bottom_section__author'>
                            <div className='bottom_section__author__logo'>LOGO</div>
                            <div className='bottom_section__author__text'>[author name], [job title] </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_section container'>
                <div className='footer_section_copyright_text'>
                    Copyright © 2023 Peru Consulting
                </div>
            </div>
        </div>
    )
}

export default LandingPage;