import '../scss/index.scss';
import React from 'react';

const Header = () => {
    return (
        <div className="header-container-wrapper">
            <div className="header-container container-fluid">

                <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                    <div className="row-fluid ">
                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                            <div id="hs_cos_wrapper_module_169029043254536" className="typTemplate hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module"><header className="header"
                                style={{ background: 'transparent', position: 'absolute', top: '52px', bottom: "50px", left: 0, width: '100%', zIndex: 1 }}>
                                <div className="container">
                                    <div className="row header__row align-items-center justify-content-between">

                                        <div className="col-12 col-xl-2" style={{ "display": "contents" }}>
                                            <div className="header__brand">
                                                <a href="https://peruconsulting.co.uk/" target="_blank">
                                                    <img src="https://139544704.fs1.hubspotusercontent-eu1.net/hubfs/139544704/onboarding-templates/per-logo-white.svg" alt="logo" />
                                                </a>
                                            </div>
                                            <div style={{ "color": "white" }}>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </header></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;