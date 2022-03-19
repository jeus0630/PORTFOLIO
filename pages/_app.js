import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion'


const Website = ({ Component, pageProps, router }) => {
    return(
        <ChakraProvider them={theme}>
            <Fonts></Fonts>
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                        }
                    }}
                    >
                    <Component {...pageProps} key={router.route}></Component>
                    </AnimatePresence>
            </Layout>
        </ChakraProvider>

    )
}

export default Website