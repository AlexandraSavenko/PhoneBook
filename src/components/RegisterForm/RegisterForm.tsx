import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { AppDispatch } from "../../redux/store";

export interface RegFormValues {
  email: string,
name: string,
password: string,
}

export default function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: RegFormValues, actions: FormikHelpers<RegFormValues>): void => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">
          Usarname
        </label>
        <Field type="text" name="name" />
        <label htmlFor="email">
          Email
        </label>
        <Field type="email" name="email" />
        <label htmlFor="password">
          Password
        </label>
        <Field type="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
