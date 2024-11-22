import SignUpComponent from "../components/SignUp";


export default function SignUp()
{
    
    return <SignUpComponent
        onSubmit={values => console.log(values)}
    />
}