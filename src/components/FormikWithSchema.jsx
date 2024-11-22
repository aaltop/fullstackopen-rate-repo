

import { Formik } from "formik";

export default function FormikWithSchema({validationSchema, onSubmit, ...props})
{


    return <Formik
        initialValues={validationSchema.default()}
        validationSchema={validationSchema}
        onSubmit={values => {
            const castValues = validationSchema.cast(values);
            onSubmit(castValues);
        }}
    >
        {props.children}
    </Formik>;
}