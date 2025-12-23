import ChatProviders from "./providers"

export default function ChatLayout({ children }){
    return(
        <section>
                <ChatProviders>
                    {children}
                </ChatProviders>
        </section>
    )
}