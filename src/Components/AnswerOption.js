import React from 'react';

const AnswerOption = (props) => {

    return (
        <li>
            <button
                id={props.answerType}
                value={props.index}
                onClick={props.onAnswerSelected}
            >{props.answerContent}</button>
        </li>
    );

}

export default AnswerOption;
