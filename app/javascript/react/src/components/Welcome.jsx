import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionList from './QuestionList'
import { createRoot } from 'react-dom/client';

const Welcome = () => {
    return (
    <div>
        <h1>Hello!</h1>
        < QuestionList />
     </div>
    )
    }

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('welcome');
    const root = createRoot(container);
    root.render(<Welcome />);
});

export default Welcome;
