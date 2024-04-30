import React from 'react';
import Footer from '../component/footer';
import '../scss/index.scss';
import Header from '../component/header';

const UnsubsCribe = () => {

    return (
        <div>
            <Header />
            <div className="body-container-wrapper" style={{ paddingBottom: "101px" }}>
                <div className="body-container container-fluid">

                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                        <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-cell confirmation" data-widget-type="cell" data-x="0" data-w="12">

                                <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                                    <div className="row-fluid ">
                                        <div className="container">

                                            <div className="span12 widget-span widget-type-email_simple_subscription " data-widget-type="email_simple_subscription" data-x="0" data-w="12">
                                                <div className="cell-wrapper layout-widget-wrapper">
                                                    <span id="hs_cos_wrapper_email_simple_subscription" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_email_simple_subscription" data-hs-cos-general-type="widget" data-hs-cos-type="email_simple_subscription"><div className="page-header">
                                                        <h1>Email Unsubscribe </h1>

                                                    </div>


                                                        <h3 style={{ "font-weight": "normal", 'font-size': "20px", "padding-top": "16px" }}>There was a problem loading the page. Try using the same link from a more recent email, or contact the company to update your subscription preferences.</h3>

                                                    </span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer showLine={false} />
        </div>
    )
}

export default UnsubsCribe;
