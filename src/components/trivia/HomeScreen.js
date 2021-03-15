import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import {startGame} from '../triviaRedux/actions';

function HomeScreen(props) {
    const {isLoading, startGame} = props;
    return (
        <section className = "home-screen">
            <div className="home-screen-header">
                <h1>Welcome to the Trivia Challenge!!</h1>
            </div>

            <div className="home-screen-intro">
                <h3>You will be presented with 10 True or False Questions.</h3>
            </div>

            <div className ="home-screen-cta">
                <h3>Can you score 100%?</h3>
            </div>

            {!isLoading ? <Button 
                variant="contained"
                color="primary"
                onClick={startGame}>Begin</Button>
                :<Button
                variant="contained"
                color="primary"
                disabled><CircularProgress/>
                Loading
            </Button>}

        </section>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {startGame})
(HomeScreen);