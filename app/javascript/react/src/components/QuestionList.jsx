import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
    const questionsList = [
        { 
            id: 1,
            title: "How to check if a id is present in a hash?", tag: "Ruby" 
        },
        { 
            id: 2,
            title: "What is the difference between strings and symbol?", tag: "Ruby" 
        },        
        { 
            id: 3,
            title: "What happens if you add two of the same ids in hash?", tag: "Ruby" 
        },
        { 
            id: 4,
            title: "How to delete a given id from a hash?", tag: "Ruby" 
        },
        { 
            id: 5,
            title: "How to check if two hashes are identical?", tag: "Ruby" 
        },
        { 
            id: 6,
            title: "How to combine two hashes in Ruby", tag: "Ruby" 
        },
        { 
            id: 7,
            title: "How to get uniwue ids from two hashes in Ruby?", tag: "Ruby" 
        },
        { 
            id: 8,
            title: "What does the has_id?, id?, include?, member? do?", tag: "Ruby" 
        },
        { 
            id: 9,
            title: "Does the order of keys matterwhen comparing two hashes?", tag: "Ruby" 
        },
    ]

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