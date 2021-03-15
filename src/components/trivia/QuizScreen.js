import Question from './Question';
import {connect} from 'react-redux';

function QuizScreen(props) {
    const {currentQuestion, currentIndex, questionBank} = props;
    return (
        <section className = 'quiz-screen'>
            <div clasName='quiz-screen-question'>
                <Question question={currentQuestion} />
            </div>
            <p>{currentIndex + 1} of {questionBank.length}</p>
        </section>
    )
}

const mapStateToProps =(state) => {
    return {
        currentQuestion: state.currentQuestion, 
        currentIndex: state.currentIndex, 
        questionBank: state.questionBank
    }
}

export default connect(mapStateToProps, {})(QuizScreen);