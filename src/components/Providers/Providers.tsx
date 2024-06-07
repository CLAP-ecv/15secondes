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
        appId: "9567164b-cb9c-42a5-b14a-a0cf341af31b",
        safari_web_id: "web.onesignal.auto.1172fa5f-6e39-45ba-9a29-ceb4d8311220",
        slidePromptOptions: {
            autoPrompt: true,
            force: true,
        },
        allowLocalhostAsSecureOrigin: true,
    });
}