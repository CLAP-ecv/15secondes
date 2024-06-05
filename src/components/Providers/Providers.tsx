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
        notifyButton: {
            enable: true,
        },
        allowLocalhostAsSecureOrigin: true
    });
}