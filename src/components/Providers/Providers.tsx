"use client"

import Script from "next/script";
import { PropsWithChildren } from "react";

export const Providers = (props: PropsWithChildren) => {
    return (
        <>
            <Script
                id="onesignal-sdk"
                src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
                onLoad={initOneSignal}
            />
            {props.children}
        </>
    )
}

const initOneSignal = () => {
    // @ts-ignore
    const onesignal = window.OneSignal
    if (!onesignal) {
        console.warn('OneSignal SDK not loaded.')
        return
    }
    onesignal.init({
        appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
        safari_web_id: "web.onesignal.auto.1172fa5f-6e39-45ba-9a29-ceb4d8311220",
        slidePromptOptions: {
            autoPrompt: true,
            force: true,
        },
        allowLocalhostAsSecureOrigin: true,
    });
}