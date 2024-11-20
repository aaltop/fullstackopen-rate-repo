import FormikTextInput from "./FormikTextInput";
import FormView from "./FormView";

import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object().shape({
    repoOwnerUsername: yup.string()
        .required("Repository owner's username required"),
    repoName: yup.string()
        .required("Repository's name required"),
    rating: yup.number()
        .required("Rating for repository required")
        .integer("Value must be an integer")
        .min(0, "Rating needs to be at least ${min}")
        .max(100, "Rating needs to be at most ${max}"),
    review: yup.string()
});

const initial = {
    repoOwnerUsername: "",
    repoName: "",
    rating: "",
    review: ""
}

export default function ReviewForm({ onSubmit, disabled })
{

    const formContent = [
        {
            valueName: "repoOwnerUsername",
            placeholder: "Owner Username"
        },
        {
            valueName: "repoName",
            placeholder: "Repository Name"
        },
        {
            valueName: "rating",
            placeholder: "Rating",
        }
    ];

    return <Formik
        initialValues={initial}
        onSubmit={async (values) => {
            const castValues = await reviewSchema.cast(values);
            onSubmit(castValues);
        }}
        validationSchema={reviewSchema}
    >
        {(props) => {

            const { handleSubmit } = props;

            return <FormView
                handleSubmit={handleSubmit}
                buttonTitle={"Submit Review"}
                disabled={disabled}
            >
                {formContent.map(({ valueName, placeholder }) => (
                    <FormikTextInput
                        formikProps={props}
                        key={valueName}
                        valueName={valueName}
                        placeholder={placeholder}
                    />
                ))}
                <FormikTextInput
                    formikProps={props}
                    valueName={"review"}
                    placeholder={"Review Text"}
                    multiline
                    style={{ minHeight: 100 }}
                />
            </FormView>;
        }}
    </Formik>;
}