import '../scss/index.scss';
import React from 'react';

const Footer = ({showLine}) => {
    return (
        <div className="footer-container-wrapper">
            <div className="footer-container container-fluid">

                <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                    <div className="row-fluid ">
                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                            <div id="hs_cos_wrapper_module_169029066733430" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module"><footer className="footer">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-12">
                                            <div className={`${showLine ? "footer__legal" : ""}`}>
                                                <ul className="footer__legal-ul footer__ul list--reset">
                                                    <li className="footer__legal-li">
                                                        Copyright © 2024 Tomorrow People
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </footer></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;