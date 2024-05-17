"use client"

import { PropsWithChildren, useEffect } from "react"
import OneSignal from 'react-onesignal';

async function runOneSignal() {
    await OneSignal.init({ appId: '9567164b-cb9c-42a5-b14a-a0cf341af31b' });
    OneSignal.Slidedown.promptPush();
}

export const Providers = (props: PropsWithChildren) => {
    useEffect(() => {
        runOneSignal();
    }, []);

    return (
        <>
            {props.children}
        </>
    )
}