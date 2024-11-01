import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {
    const questionsList = [
        { 
            title: "How to check if a key is present in a hash?", tag: "Ruby" 
        },
        { 
            title: "What is the difference between strings and symbol?", tag: "Ruby" 
        },        
        { 
            title: "What happens if you add two of the same keys in hash?", tag: "Ruby" 
        },
        { 
            title: "How to delete a given key from a hash?", tag: "Ruby" 
        },
        { 
            title: "How to check if two hashes are identical?", tag: "Ruby" 
        },
        { 
            title: "How to combine two hashes in Ruby", tag: "Ruby" 
        },
        { 
            title: "How to get uniwue keys from two hashes in Ruby?", tag: "Ruby" 
        },
        { 
            title: "What does the has_key?, key?, include?, member? do?", tag: "Ruby" 
        },
        { 
            title: "Does the order of keys matterwhen comparing two hashes?", tag: "Ruby" 
        },
    ]

    return (
        <div className = "row"> 
            <div className = "col-lg-10 mx-auto">
                {questionsList.map((question) =>
                <div className = "card rounded-0 mt-3">
                    <div className = "card-body">
                        <h3 className = "card-title">{question.title}</h3>
                        <p className = "lead">
                            <span className = "badge-bg-primary">{question.tag}</span>
                        </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default QuestionList;