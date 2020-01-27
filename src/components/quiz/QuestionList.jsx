import React, { Component } from 'react'
import Question from './Question'

class QuestionList extends Component {
    render() {
        const { questions } = this.props
        return (
            <div className="questions">
                {
                    questions.map(question => {
                            return (
                                <Question
                                    question={question}
                                    key={question.id}
                                    {...this.props}
                                />
                            )
                        
                    })
                }
            </div>
        )
    }
}

export default QuestionList