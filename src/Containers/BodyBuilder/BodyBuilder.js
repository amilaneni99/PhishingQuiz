import React,{Component} from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import db from "../../API/db";
import Question from "../../Components/Question/Question";
import Answer from "../../Components/Answer/Answer";

class BodyBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 0,
            title: db[0].title.origTitle,
            desc: db[0].desc.origDesc,
            answerIndex: 0,
        };
        // this.setNextQuestion = this.setNextQuestion.bind(this);
        // //this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        // this.renderCorrect = this.renderCorrect.bind(this);
        // this.renderWrong = this.renderWrong.bind(this);
        // //this.renderQuestion = this.renderQuestion.bind(this);
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            title: db[counter].title.origTitle,
            desc: db[counter].desc.origDesc,
            answerIndex: db[counter].answerIndex,
            question:true,
        });

        this.renderQuestion();

    }

    renderCorrect () {
        console.log("Phishing");
        return (
            <Answer
                correct={true}
                correctTitle={db[this.state.counter].title.correctTitle}
                correctDesc={db[this.state.counter].desc.correctDesc}
                setNextQuestion={this.setNextQuestion}
            />
        );
    }

    renderWrong () {
        return (
            <Answer
                correct = {false}
                wrongTitle = {db[this.state.counter].title.wrongTitle}
                wrongDesc = {db[this.state.counter].desc.wrongDesc}
                setNextQuestion = {this.setNextQuestion}
            />
        );
    }

    renderQuestion() {
        return(
            <Question
                title={this.state.title}
                desc={this.state.desc}
                renderCorrectAnswer={() => this.renderCorrect}
                renderWrongAnswer={() => this.renderWrong}
            />
        );
    }

    render() {
        return (
            <Auxiliary>
                <Question
                    title={this.state.title}
                    desc={this.state.desc}
                    renderCorrectAnswer={() => this.renderCorrect}
                    renderWrongAnswer={() => this.renderWrong}
                />
            </Auxiliary >
        );
    }
    
    
}   

export default BodyBuilder;