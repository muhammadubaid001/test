import {SessionProvider, useSession} from "next-auth/react"
import {useRouter} from "next/router"
import '../styles/globals.css'

function MyApp({Component, pageProps: {session, ...pageProps},}) {
    console.log(Component)
    return (
        <SessionProvider session={session}>
            {Component?.auth?.authenticated && Component.auth.adminRoute ? (
                <Auth>
                    <Component {...pageProps} />
                </Auth>
            ) : (
                <Component {...pageProps} />
            )}
        </SessionProvider>
    )

    function Auth({children}) {
        // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
        const {data, status} = useSession()
        const router = useRouter()

        if (status === 'loading') {
            return <div>Loading...</div>
        }

        if (status === 'unauthenticated') {
            router.push('/')
        }

        return children;
    }
}

export default MyApp
