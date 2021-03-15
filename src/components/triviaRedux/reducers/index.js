import 
{
    START_GAME,
    LOADING, 
    SUBMIT_ANSWER, 
    NEXT_QUESTION, 
    RESET
} from '../constants'

const initialState = {
    isLoading: false, 
    isGameStarted: false, 
    isGameOVer: false, 
    currentQuestion: {}, 
    currentIndex: 0, 
    questionBank: [], 
    results: []
}

export const reducer = (state = initialState, action) => 
    {
        switch(action.type)
        {
            case LOADING: 
                return {
                    ...state, 
                    isLoading: true
                }
            

            case START_GAME:
                return {
                    ...state, 
                    questionBank: action.payload, 
                    currentQuestion: action.payload[0],
                    isLoading: false, 
                    isGameStarted: true
                }
            
            case SUBMIT_ANSWER:
                return {
                    ...state,
                    results: [...state.results, 
                        {...state.questionBank[state.currentIndex], 
                        userAnswer: action.payload}],
                        currentIndex:state.currentIndex + 1
                }

            case NEXT_QUESTION: 
                if(state.currentIndex < state.questionBank.length)
                    return {
                        ...state,
                        currentQuestion: state.questionBank[state.currentIndex]
                    }
                else {
                    return {
                        ...state, 
                        isGameOver: true,
                        isGameStarted: false
                    }
                }

            case RESET: 
                return {
                    ...initialState
                }
            default:
                return state
        }
    }