import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export interface RegFormValues {
email: string,
name: string,
password: string,
}

export default function RegisterForm() {

  const [visible, setVisible] = useState(false)
  
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: RegFormValues, actions: FormikHelpers<RegFormValues>): void => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputwrap}>
        
        <Field type="text" name="name" className={css.input} placeholder=" " autocomplete="off" />
        <label htmlFor="name" className={css.label}>Usarname</label>
        </div>
        <div className={css.inputwrap}>
        
        <Field type="email" name="email" className={css.input} placeholder=" " autocomplete="off" />
        <label htmlFor="email" className={css.label}>Email</label>
        </div>
        <div className={css.inputwrap}>
        
        <Field type={visible ? "text" : "password"} name="password" className={css.input} placeholder=" " autocomplete="off"/>
        <label htmlFor="password" className={css.label}>Password</label>
        <span className={css.eye} onClick={() => setVisible(!visible)} >{visible ? <FaEyeSlash/> : <FaEye/>}</span>
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
