import "../styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

export default function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<ThemeProvider attribute="class" enableSystem enableColorScheme>
				<Component {...pageProps} />
			</ThemeProvider>
		</NextUIProvider>
	)
}
