import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {submitAnswer} from '../triviaRedux/actions';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
    root: {width:'90%', height: '100%', margin: '0 auto', paddingBottom: '5%'},

    header: {textAlign: 'center', backgroundColor: '#49a3df'},

    body: {textAlign:'center'},

    bodySize: {frontSize: '1.5rem'}
}))

function Question(props)
{
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header} title={props.question.category}/>
            <CardContent className={classes.body}>
                <Typography 
                    variant = 'body2'
                    component = 'p'
                    className={classes.bodySize}
                >
                {props.question.question.replace(/(&quot\;)/g, "\"").replace(/&#039;/g, "'")}
                </Typography>
            </CardContent>

            <CardActions>
                <Button className = {classes.bodySize}
                    variant="contained"
                    style={{backgroundColor: green[500]}}
                    onClick={() => props.submitAnswer('True')}
                    >True
                </Button>

                <Button className = {classes.bodySize}
                    variant="contained"
                    style={{backgroundColor: red[500]}}
                    onClick={() => props.submitAnswer('False')}
                    >False
                </Button>
            </CardActions>
        </Card>
    )
}

export default connect(null, {submitAnswer})(Question);