import * as yup from "yup";



export const loginSchema = yup.object({
    username: yup.string()
        .required("Username is required")
        .min(5, "Username should be at least ${min} characters")
        .max(30, "Username should be at most ${max} characters")
        .default(""),
    password: yup.string()
        .required("Password is required")
        .min(5, "Password should be at least ${min} characters")
        .max(50, "Password should be at most ${max} characters")
        .default("")
});


export const signupSchema = loginSchema.shape({
    passwordMatch: yup.string()
        .required("Repeat password")
        .oneOf([yup.ref("password")], "Passwords must match")
        .default("")
});