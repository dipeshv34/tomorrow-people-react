import React, { useState } from 'react';
import Footer from '../../component/footer';
import '../../css/css1.css';
import '../../css/css2.css';
import '../../css/css3.css';

const styleCss = {
    "border": '2px solid #084059',
    'border-radius': '7px',
    'color': '#021c25',
    'margin-right': '20px',
    'min-width': '300px',
    'padding': '17px 20px'
}

const SubsCription = () => {

    const [showEmail, setShowEmail] = useState(false);
    
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

            <div className="body-container-wrapper">
                <div className="body-container container-fluid">

                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                        <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-cell preferences" data-widget-type="cell" data-x="0" data-w="12">

                                <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                                    <div className="row-fluid ">
                                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
                                            <div id="hs_cos_wrapper_module_170568241168340" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-email_subscriptions" data-hs-cos-general-type="widget" data-hs-cos-type="module">



                                                <div className="page-header">
                                                    <h1>Preferences</h1>
                                                    Email preferences
                                                </div>

                                                <div id="prefsForm" className="prefsForm" style={{ "opacity": "1" }}>
                                                    <div className="prefsForm__wrapper">
                                                        <form id="prefsForm__form" className="prefsForm__form">
                                                            <div className="prefsForm__inner">
                                                                <div className="prefsForm__email">
                                                                    <div className="prefsForm__email__label">
                                                                        <h4>Your email</h4>
                                                                        <p id="emailValue">example@email.com</p>
                                                                    </div>
                                                                    <div>
                                                                        {showEmail && <input name="email" type="email" value="example@gmail.com"  style={styleCss}/>}
                                                                    </div>
                                                                    <div className="prefsForm__email__field">
                                                                        <button 
                                                                            type="button"
                                                                            id="emailChange" 
                                                                            className="button button--outline" 
                                                                            onClick={(e) => setShowEmail(!showEmail)}
                                                                        >
                                                                            Edit email
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <template id="prefsFormItem">
                                                                    <div className="prefsForm__item prefsFormItem">
                                                                        <div className="prefsFormItem__label"><h4 className="prefsFormItem__header"></h4><p className="prefsFormItem__description"></p></div>
                                                                        <label for="" className="prefsFormItem__input">
                                                                            <input id="" type="checkbox" name="" />
                                                                            <span className="slider"><span className="slider__text"></span></span>
                                                                        </label>
                                                                    </div>
                                                                </template>
                                                                <div id="prefsForm__fields" className="prefsForm__fields">


                                                                    <div className="prefsForm__item prefsFormItem">
                                                                        <div className="prefsFormItem__label"><h4 className="prefsFormItem__header">Marketing Information</h4><p className="prefsFormItem__description">Marketing offers and updates.</p></div>
                                                                        <label for="id_244907" className="prefsFormItem__input">
                                                                            <input id="id_244907" type="checkbox" name="id_244907" />
                                                                            <span className="slider"><span className="slider__text"></span></span>
                                                                        </label>
                                                                    </div>

                                                                    <div className="prefsForm__item prefsFormItem">
                                                                        <div className="prefsFormItem__label"><h4 className="prefsFormItem__header">Sandertest Subscription</h4><p className="prefsFormItem__description">Receive timely updates with the latest blog posts.</p></div>
                                                                        <label for="id_1043597" className="prefsFormItem__input">
                                                                            <input id="id_1043597" type="checkbox" name="id_1043597" />
                                                                            <span className="slider"><span className="slider__text"></span></span>
                                                                        </label>
                                                                    </div>

                                                                    <div className="prefsForm__item prefsFormItem">
                                                                        <div className="prefsFormItem__label"><h4 className="prefsFormItem__header">One to One</h4><p className="prefsFormItem__description">One to One emails</p></div>
                                                                        <label for="id_4558666" className="prefsFormItem__input">
                                                                            <input id="id_4558666" type="checkbox" name="id_4558666" />
                                                                            <span className="slider"><span className="slider__text"></span></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="prefsForm__unsub">
                                                                <div className="prefsForm__item prefsForm__item--unsub prefsFormItem" data-lang="global" id="globalunsubField">
                                                                    <div className="prefsFormItem__label"><h4 className="prefsFormItem__header">Unsubscribe from everything</h4><p className="prefsFormItem__description">We’ll be sad, but we won’t send you anything.</p></div>
                                                                    <label for="globalunsubCustom" className="prefsFormItem__input">
                                                                        <input id="globalunsubCustom" type="checkbox" name="globalunsubCustom" />
                                                                        <span className="slider"><span className="slider__text"></span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="prefsForm__submit">
                                                                <input type="submit" className="button button--tertiary hs-button" id="customSubmit" value="Update email preferences" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="prefsForm__ty">
                                                        <h2>All saved! Thanks for updating your preferences.</h2>
                                                        <div className="prefsForm__ty__buttons">
                                                            <button id="startagain" className="button button--outline">Start again</button>
                                                            <a href="https://www.peruconsulting.co.uk" id="backhome" className="button button--green button--darkHover">Back home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="defaultForm">
                                                    <span id="hs_cos_wrapper_module_170568241168340_email_subscriptions" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_email_subscriptions" data-hs-cos-general-type="widget" data-hs-cos-type="email_subscriptions">


                                                        <form id="email-prefs-form" method="post" target="defaultFormFrame">
                                                            <div className="page-header">
                                                                <h1>Preferences</h1>
                                                                <h2>example@email.com</h2>
                                                                <br />
                                                                Email preferences
                                                            </div>


                                                            <div id="content" className="email-prefs">



                                                                <input type="hidden" name="email" value="example@email.com" />
                                                                <input type="hidden" name="unsub_url" value="" />
                                                                <input type="hidden" name="unsubed_all" value="false" />








                                                                <p className="header">Uncheck the types of emails you do not want to receive:</p>
                                                                <input type="hidden" name="subscription_ids" value="" />


                                                                <div className="item">
                                                                    <div className="item-inner">
                                                                        <div className="checkbox-row">
                                                                            <span className="fakelabel">
                                                                                <input id="id_244907" type="checkbox" name="id_244907" />


                                                                                <span>Marketing Information</span>
                                                                            </span>
                                                                        </div>
                                                                        <p>Marketing offers and updates.</p>
                                                                    </div>
                                                                </div>

                                                                <div className="item">
                                                                    <div className="item-inner">
                                                                        <div className="checkbox-row">
                                                                            <span className="fakelabel">
                                                                                <input id="id_1043597" type="checkbox" name="id_1043597" />


                                                                                <span>Sandertest Subscription</span>
                                                                            </span>
                                                                        </div>
                                                                        <p>Receive timely updates with the latest blog posts.</p>
                                                                    </div>
                                                                </div>

                                                                <div className="item">
                                                                    <div className="item-inner">
                                                                        <div className="checkbox-row">
                                                                            <span className="fakelabel">
                                                                                <input id="id_4558666" type="checkbox" name="id_4558666" />


                                                                                <span>One to One</span>
                                                                            </span>
                                                                        </div>
                                                                        <p>One to One emails</p>
                                                                    </div>
                                                                </div>


                                                                <script>
                                                                    window.disabledHsPopups = ['LEADFLOW', 'FEEDBACK', 'CALLS_TO_ACTION'];
                                                                </script>
                                                                <div className="subscribe-options" style={{ "margin-right": "0px" }}>
                                                                    <p className="header">Unsubscribe from everything</p>
                                                                    <p>
                                                                        <label for="globalunsub">
                                                                            <input name="globalunsub" id="globalunsub" type="checkbox" />
                                                                            <span>
                                                                                We’ll be sad, but we won’t send you anything.
                                                                            </span>
                                                                        </label>
                                                                    </p>
                                                                </div>
                                                                <input type="submit" className="hs-button primary" id="submitbutton" value="Update email preferences" />

                                                                <div className="clearer"></div>
                                                            </div>

                                                        </form>


                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ "padding": "40px 0" }}>
                <Footer showLine={false} />
            </div>
        </div>
    )
}

export default SubsCription;
