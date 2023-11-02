import {NextUIProvider} from '@nextui-org/react'
import "../styles/index.css"

export default function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}