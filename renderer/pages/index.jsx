import React from "react"
import { Button } from "@nextui-org/react"
import Head from "next/head"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function HomePage() {
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
