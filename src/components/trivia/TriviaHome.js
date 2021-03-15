import './Trivia.scss';
// import Chat from './././components/chatComps/Chat';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ResultsScreen from './ResultsScreen';
import {connect} from 'react-redux';

function TriviaHome(props) {
  const {isGameStarted, isLoading, isGameOver} = props;
  return (
    <div className="App">
      {/* <Chat /> */}
     {!isGameStarted && !isGameOver && <HomeScreen />}
     {isGameStarted && !isLoading && <QuizScreen /> }
     {isGameOver && <ResultsScreen />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isGameStarted: state.isGameStarted, 
    isLoading: state.isLoading,
    isGameOver: state.isGameOver
  }
}

export default connect(mapStateToProps, {})(TriviaHome);
