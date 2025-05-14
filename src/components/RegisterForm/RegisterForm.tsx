import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);

    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Usarname
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
