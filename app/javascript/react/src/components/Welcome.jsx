import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Welcome = () => {
    return <h1>Hello!</h1>
    }

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Welcome />,
        document.getElementById('welcome'),
    )
});

export default Welcome;
