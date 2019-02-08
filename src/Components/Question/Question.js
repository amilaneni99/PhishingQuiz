import React from "react";
import Button from "../../UI/Button/Button";
import Body from "../Body/Body";

const Question = (props) => {
    return(
        <div>
            <Body
                Title={props.title}
                Desc={props.desc} />
            <div>
                <Button onClick={props.renderCorrectAnswer}>
                    Phishing
                        </Button>
                <Button onClick={props.renderWrongAnswer}>
                    Legitimate
                        </Button>
            </div>
        </div>
    );
};

export default Question;