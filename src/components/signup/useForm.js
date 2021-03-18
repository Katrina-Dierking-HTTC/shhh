
import {useState, useEffect} from 'react'
// import {useHistory} from 'react-router'

const useForm =(callback, validate) => {
    // const history = useHistory();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        // history.push({
            // pathname: '/dashboard', 
            // state: {
                // response: "Let's get started. "
            // }
        // })

        setErrors(validate(values));
        setIsSubmitting(true);

    


    }

    useEffect ( () => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;