import React from "react"
import { Button } from "@nextui-org/react"

export default function HomePage() {
	const [message, setMessage] = React.useState("No message found")

	React.useEffect(() => {
		window.ipc.on("message", message => {
			setMessage(message)
		})
	}, [])

	return <h1 className="text-3xl font-bold underline">Hello, world!</h1>
}
