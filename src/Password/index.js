import React from 'react';
import Footer from '../component/footer';
import '../scss/index.scss';
import Header from '../component/header';

const Password = () => {

    return (
        <div>
            <Header />
            <div className="body-container-wrapper" style={{ paddingBottom: "40px" }}>
                <div className="body-container container-fluid">

                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                        <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-cell password" data-widget-type="cell" data-x="0" data-w="12">

                                <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                                    <div className="row-fluid ">
                                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                                            <div id="hs_cos_wrapper_module_169149399300669" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-password_prompt" data-hs-cos-general-type="widget" data-hs-cos-type="module"><h1>Password required</h1>
                                                <p>Please enter the password required to view this page.</p>
                                                <span id="hs_cos_wrapper_module_169149399300669_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_password_prompt" data-hs-cos-general-type="widget" data-hs-cos-type="password_prompt">
                                                    <form method="post" action="https://372424.hubspotpreview-na1.com/_hcms/protected/auth">
                                                        <input name="content_id" type="hidden" value="1" />
                                                        <input name="redirect_url" type="hidden" value="https://372424.hubspotpreview-na1.com/content-rendering/v1/public/_hcms/preview/template/multi?hs_preview_key=RVaRsQbvSALRm3213tZ1eQ&amp;is_buffered_template_layout=true&amp;portalId=372424&amp;tc_deviceCategory=undefined&amp;template_layout_id=153631938474&amp;updated=1705682812935" />
                                                        <input name="password" className='hight-margin-top' type="password" placeholder="Password" id="hs-pwd-widget-password" />
                                                        <input type="submit" className="hs-button primary large" value="Submit" />
                                                    </form>
                                                </span></div>
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

export default Password;
