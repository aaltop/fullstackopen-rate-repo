

/**
 * Check the error status of a formik form property
 */
export function formikErrorCheck(formikProps, property: string)
{
    return formikProps.touched[property] && formikProps.errors[property];
}