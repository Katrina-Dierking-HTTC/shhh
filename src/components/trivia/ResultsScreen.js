import {connect} from 'react-redux';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import {reset} from '../triviaRedux/actions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ResultsScreen(props) {
    const calculateResults = () => {
        let count = 0;
        props.results.forEach(result =>{
            if(result.userAnswer === result.correct_answer)
                count++;
        })

        return count;
    }

    const checkAnswer = (result) => {
        if(result.userAnswer === result.correct_answer)
            return <Check style={{color:green[500]}} />
        else
            return <Close color="error"/>
    }

    return (
        <section className="results-screen">
            <div className = "results-screen-header">
                <h3>You Scored</h3>
                <h3>{calculateResults()}/ {props.results.length}</h3>
            </div>
            <List>
                {props.results.map((result, index) => <ListItem key={index}>
                    <ListItemIcon>{checkAnswer(result)}</ListItemIcon>
                    <ListItemText> {result.question.replace(/(&quot\;)/g, "\"").replace(/&#039;/g, "'")}</ListItemText>
                </ListItem>)}
            </List>

            <Button 
                variant="contained"
                color="primary"
                onClick={props.reset}
                >Play Again?
            </Button>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps, {reset})(ResultsScreen);