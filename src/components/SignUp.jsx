import FormView from "./FormView";
import FormikTextInput from "./FormikTextInput";
import { signupSchema } from "../schemas/login";
import FormikWithSchema from "./FormikWithSchema";

export default function SignUp({ onSubmit, disabled })
{

    const formContent = [
        {
            valueName: "username",
            placeholder: "Username"
        },
        {
            valueName: "password",
            placeholder: "Password",
            secureTextEntry: true
        },
        {
            valueName: "passwordMatch",
            placeholder: "Repeat password",
            secureTextEntry: true
        }
    ];


    return <FormikWithSchema
        validationSchema={signupSchema}
        onSubmit={onSubmit}
    >
        {props => {
            const { handleSubmit } = props;

            return <FormView
                handleSubmit={handleSubmit}
                buttonTitle={"Sign up"}
                disabled={disabled}
            >
                {formContent.map(content => <FormikTextInput 
                    key={content.valueName}
                    formikProps={props}
                    {...content}
                />)}
            </FormView>
        }}
    </FormikWithSchema>;
}