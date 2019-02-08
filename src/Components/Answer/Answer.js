import React from "react";
import Button from "../../UI/Button/Button";
import Body from "../Body/Body";

const Answer = (props) => {
    if(props.Correct){
        return(
            <div>
                <Body
                    Title={props.wrongTitle}
                    Desc={props.worngDesc} />
                <div>
                    <Button onClick={props.setNextQuestion}>Next</Button>
                </div>
            </div>
        );
    }

    else{
        return(
            <div>
                <Body
                    Title={props.correctTitle}
                    Desc={props.correctDesc} />
                <div>
                    <Button onClick={props.setNextQuestion}>Next</Button>
                </div>
            </div>
        );
    }
}

export default Answer;