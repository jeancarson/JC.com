import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
    

    return (
        <div className = "row"> 
            <div className = "col-lg-10 mx-auto">
                {questionsList.map((question) =>
                <QuestionDetail question = { question } key = { question.id}/>
                )}
            </div>
        </div>
    )
}

export default QuestionList;