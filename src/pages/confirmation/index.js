import React from 'react';
import Footer from '../../component/footer';
import '../../css/css1.css';
import '../../css/css2.css';
import '../../css/css3.css';

const SubscriptionConfirmation = () => {

    return (
        <div>
            <div className="header-container-wrapper">
                <div className="header-container container-fluid">

                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                        <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                                <div id="hs_cos_wrapper_module_170568245045852" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module"><header className="header" style={{ padding: '52px 0px 68px' }}>
                                    <div className="container">
                                        <div className="row header__row align-items-center justify-content-between">

                                            <div className="col-12 col-xl-2">
                                                <div className="header__brand">

                                                    <img src="https://139544704.fs1.hubspotusercontent-eu1.net/hubfs/139544704/onboarding-templates/per-logo-colour.svg" alt="logo" />

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

            <div className="body-container-wrapper" style={{ "paddingBottom": "45px" }}>
                <div className="body-container container-fluid">

                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                        <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-cell confirmation" data-widget-type="cell" data-x="0" data-w="12">

                                <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                                    <div className="row-fluid ">
                                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                                            <div id="hs_cos_wrapper_module_170568264155497" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-email_subscriptions_confirmation" data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_module_170568264155497_email_subscriptions_confirmation" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_email_subscriptions_confirmation" data-hs-cos-general-type="widget" data-hs-cos-type="email_subscriptions_confirmation">



                                                <div className="page-header">
                                                    <h1></h1>
                                                    <h2>example@email.com</h2>
                                                    <br />
                                                    If this is not your email address, please ignore this page since the email associated with this page was most likely forwarded to you.
                                                </div>



                                                <div id="content" className="success">
                                                    You have successfully updated your email preferences.
                                                </div>






                                            </span></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ "paddingBottom": "30px" }}>
                <Footer showLine={false} />
            </div>
        </div>
    )
}

export default SubscriptionConfirmation;