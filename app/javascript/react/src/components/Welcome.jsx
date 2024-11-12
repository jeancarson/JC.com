import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import QuestionList from './QuestionList';
import MyButton from './myButton/MyButton';

// const Welcome = () => {
//     return (
//     <div>
//         <h1>Hello!</h1>
//         < QuestionList />
//      </div>
//     )
//     }

//apparently you cant interact with browser with class components
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hell!</h1>
          <MyButton />
        </div>
        <div>
          <QuestionList />
        </div>
      </div>
    );
  }
}

// const root = ReactDOM.createRoot(document.getElementById('welcome'));
// root.render(
//   <React.StrictMode>
//     <Welcome />
//   </React.StrictMode>
// );
// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('welcome');
//     const root = createRoot(container);
//     root.render(<Welcome />);
// });

export default Welcome;
