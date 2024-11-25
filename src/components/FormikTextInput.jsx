import { formikErrorCheck } from "../utils/formik";
import TextInput from "./TextInput";


export default function FormikTextInput({ valueName, placeholder, formikProps, ...props})
{

    return <TextInput
        errorMessage={formikErrorCheck(formikProps, valueName) ?? formikProps.errors[valueName]}
        placeholder={placeholder}
        value={formikProps.values[valueName]}
        onChangeText={formikProps.handleChange(valueName)}
        {...props}
    />;
}