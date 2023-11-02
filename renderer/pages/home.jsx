import React from 'react'

export default function HomePage() {
  const [message, setMessage] = React.useState('No message found')

  React.useEffect(() => {
    window.ipc.on('message', (message) => {
      setMessage(message)
    })
  }, [])

  return (
    <React.Fragment>
      <div className="font-bold">
        test
      </div>
    </React.Fragment>
  )
}
