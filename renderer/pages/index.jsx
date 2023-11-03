import React, { useEffect, useState } from "react"
import {
	Button,
	Switch,
	Link,
	Card,
	CardBody,
	ScrollShadow,
	Tooltip,
} from "@nextui-org/react"
import Head from "next/head"
import { Inter } from "next/font/google"
import { FiTrash2 } from "react-icons/fi"

const inter = Inter({ subsets: ["latin"] })
const footerLinks = {
	left: [
		{ name: "Discord", href: "https://discord.gg/" },
		{
			name: "Github",
			href: "https://github.com/THE-SIMPLE-MARK/stormworks-tts-addon-app",
		},
	],
	right: [
		{
			name: "Report Issue",
			href: "https://github.com/THE-SIMPLE-MARK/stormworks-tts-addon-app/issues",
		},
	],
}

const voiceLogsSampleDataToBeRemoved = [
	{
		vehicleId: 27,
		text: "Warning! Nuclear reactor reaching critical temperatures. Detonation in 12 minutes and 37 seconds.",
		createdAt: new Date(),
	},
	{
		vehicleId: 27,
		text: "Welcome aboard captain! All systems online.",
		createdAt: new Date(),
	},
	{
		vehicleId: 27,
		text: "Warning! Critical structural failure detected in the storage room. Sealing all doors and vents.",
		createdAt: new Date(),
	},
]

export default function HomePage() {
	const [_window, setWindow] = useState()
	const [voiceLogs, setVoiceLogs] = useState(voiceLogsSampleDataToBeRemoved)

	useEffect(() => {
		setWindow(window)
	}, [])

	return (
		<>
			<Head>
				<title>Stormworks TTS Companion</title>
			</Head>
			<main
				className={`${inter.className} w-screen h-screen text-foreground bg-background flex flex-col justify-between items-center`}
			>
				<div className="flex flex-col gap-8 mt-16 items-center justify-between h-full w-full px-12">
					<div className="flex flex-col gap-12 items-center">
						<div className="flex flex-col gap-2 items-center">
							<h1 className="text-4xl font-semibold">Stormworks TTS</h1>
							<p className="text-gray-500 max-w-sm text-center">
								Bringing text-to-speech to the world of Stormworks.
							</p>
						</div>
						<div className="flex flex-col gap-2 items-center">
							<Switch
								size="lg"
								classNames={{
									base: "flex flex-col-reverse items-center gap-2",
									wrapper: "mr-0",
								}}
							>
								Activate
							</Switch>
						</div>
					</div>

					<div className="flex flex-col gap-2 w-full h-1/2 items-center">
						<div className="flex flex-row w-full justify-between items-center">
							<h2 className="font-medium text-xl">Voice logs</h2>
							<Tooltip showArrow content="Delete voice logs" placement="top">
								<Button
									isDisabled={!voiceLogs.length}
									isIconOnly
									onClick={() => setVoiceLogs([])}
								>
									<FiTrash2 />
								</Button>
							</Tooltip>
						</div>
						<ScrollShadow className="flex flex-col gap-2 rounded w-full h-[16rem] overflow-y-scroll overflow-x-hidden scrollbar p-1">
							{voiceLogs.map(voiceLog => (
								<Card
									key={`${voiceLog.vehicleId}-${voiceLog.createdAt.toString()}`}
									isPressable
									className="flex-shrink-0 min-w-0"
								>
									<CardBody>
										<p className="line-clamp-2">{voiceLog.text}</p>
									</CardBody>
								</Card>
							))}
							{!voiceLogs.length && (
								<div className="flex w-full h-full justify-center items-center">
									<p className="text-lg text-gray-500">No data.</p>
								</div>
							)}
						</ScrollShadow>
					</div>
				</div>

				<div className="flex flex-row justify-between w-full p-3">
					<div className="flex flex-row gap-2">
						{footerLinks.left.map(footerLink => (
							<Link
								key={footerLink.href}
								onClick={() =>
									_window.electron.shell.openExternal(footerLink.href)
								}
								className="text-tiny text-gray-500 hover:underline hover:cursor-pointer"
							>
								{footerLink.name}
							</Link>
						))}
					</div>
					<div className="flex flex-row gap-2">
						{footerLinks.right.map(footerLink => (
							<Link
								key={footerLink.href}
								onClick={() =>
									_window.electron.shell.openExternal(footerLink.href)
								}
								className="text-tiny text-gray-500 hover:underline hover:cursor-pointer"
							>
								{footerLink.name}
							</Link>
						))}
					</div>
				</div>
			</main>
		</>
	)
}
