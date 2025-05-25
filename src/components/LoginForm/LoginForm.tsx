import { Formik, Form, Field, FormikHelpers } from "formik";
import css from "../FormStyles.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";


export interface LogFormValues {
email: string,
password: string,
}
export default function LoginForm() {
const [visible, setVisible] = useState(false)

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: LogFormValues, actions: FormikHelpers<LogFormValues>): void => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputwrap}>
        <Field type="email" name="email" className={css.input} placeholder=" " autoComplete="off" />
        <label htmlFor="email" className={css.label}>Email</label>
        </div>
        <div className={css.inputwrap}>
        <Field type={visible ? "text" : "password"} name="password" className={css.input} placeholder=" " autoComplete="off"/>
        <label htmlFor="password" className={css.label}>Password</label>
        <span className={css.eye} onClick={() => setVisible(!visible)} >{visible ? <FaEyeSlash/> : <FaEye/>}</span>
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
