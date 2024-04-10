import React from 'react'
import { useRoutes } from 'react-router-dom'
import LandingPage from './../pages/landing'
import ThankYou from './../pages/ThankYou'
import Password from './../pages/password'
import SubsCription from './../pages/subscription'
import UnsubsCribe from './../pages/unsubscribe'
import SubscriptionConfirmation from './../pages/confirmation'

export default function MainRouter() {
    const MainRoute = [
        {
            path:"/",
            element: (
                <LandingPage />
            )
        },
        {
            path:"thank-you",
            element: (
               <ThankYou/>
            )
        },
        {
            path:"password",
            element: (
               <Password/>
            )
        },
        {
            path:"subscription",
            element: (
                <SubsCription/>
            )
        },
        {
            path:"unsubscribe",
            element: (
                <UnsubsCribe/>
            )
        },
        {
            path:"subscription-confirmation",
            element: (
                <SubscriptionConfirmation/>
            )
        }
    ]
    const MainRouter = useRoutes(MainRoute);
    return MainRouter
}
