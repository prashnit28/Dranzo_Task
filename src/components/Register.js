import { useState } from 'react'

function App() {
	// const history = useHistory()

    const [text,setText] = useState("")
	async function registerUser(event) {
		setText('waiting for response')

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify({
				name:"adjfljflsd"

			}),
		})

		const data = await response.json();
        console.log("this is msg",data);
        setText(data.msg)
		// if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

	return (
		<div>
			<button onClick={registerUser}>
                Login
            </button>
            <h1>{text}</h1>
		</div>
	)
}

export default App