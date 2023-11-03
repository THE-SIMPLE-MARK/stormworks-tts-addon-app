const { ipcRenderer, contextBridge, shell } = require("electron")

contextBridge.exposeInMainWorld("electron", {
	message: {
		send: payload => ipcRenderer.send("message", payload),
		on: handler => ipcRenderer.on("message", handler),
		off: handler => ipcRenderer.off("message", handler),
	},
	shell,
})
