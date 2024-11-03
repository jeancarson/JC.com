import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from './QuestionList'

const Welcome = () => {
    return (
    <div>
        <h1>Hello!</h1>
        < QuestionList />
     </div>
    )
    }

const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(
    <React.StrictMode>
        <Welcome />
</React.StrictMode>);
// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('welcome');
//     const root = createRoot(container);
//     root.render(<Welcome />);
// });

export default Welcome;
