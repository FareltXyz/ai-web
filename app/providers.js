"use client"

import { SessionProvider } from "next-auth/react";

export default function Providers({session, children}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}