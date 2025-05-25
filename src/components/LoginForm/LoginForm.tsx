import { Formik, Form, Field, FormikHelpers } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

export interface LogFormValues {
email: string,
password: string,
}
export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: LogFormValues, actions: FormikHelpers<LogFormValues>): void => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputwrap}>
        <Field type="email" name="email" className={css.input} placeholder=" " autocomplete="off" />
        <label htmlFor="email" className={css.label}>Email</label>
        </div>
        <div className={css.inputwrap}>
        <Field type="password" name="password" className={css.input} placeholder=" " autocomplete="off"/>
        <label htmlFor="password" className={css.label}>Password</label>
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
