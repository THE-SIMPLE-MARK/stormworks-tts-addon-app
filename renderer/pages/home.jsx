import React from "react"
import { Button } from "@nextui-org/react"
import Head from "next/head"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function HomePage() {
	const [message, setMessage] = React.useState("No message found")

	React.useEffect(() => {
		window.ipc.on("message", message => {
			setMessage(message)
		})
	}, [])

	return (
		<>
			<Head>
				<title>Stormworks TTS Companion</title>
			</Head>
			<main
				className={`${inter.className} w-screen h-screen text-foreground bg-background`}
			>
				<Button>test</Button>
			</main>
		</>
	)
}
