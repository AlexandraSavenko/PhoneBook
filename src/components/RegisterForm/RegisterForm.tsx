import { useDispatch } from "react-redux";
import css from "../FormStyles.module.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";


export interface RegFormValues {
email: string,
name: string,
password: string,
}

export default function RegisterForm() {

  const [visible, setVisible] = useState(false)

  const FormSchema = Yup.object().shape({
    name: Yup.string().required(""),
    email: Yup.string().email("Must be a valid email!").required(""),
    password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  });

  
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: RegFormValues, actions: FormikHelpers<RegFormValues>): void => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}>
        {({ errors }) => (
      <Form className={css.form}>
        <div className={css.inputwrap}>
        <Field type="text" name="name" className={css.input} placeholder=" " autoComplete="off" />
        <label htmlFor="name" className={css.label}>Usarname *</label>
        {errors.name && <p className={css.warning}>{errors.name}</p>}
        </div>
        <div className={css.inputwrap}>
        <Field type="email" name="email" className={css.input} placeholder=" " autoComplete="off" />
        <label htmlFor="email" className={css.label}>Email *</label>
        {errors.email && <p className={css.warning}>{errors.email}</p>}
        </div>
        <div className={css.inputwrap}>
        <Field type={visible ? "text" : "password"} name="password" className={css.input} placeholder=" " autoComplete="off"/>
        <label htmlFor="password" className={css.label}>Password *</label>
        <span className={css.eye} onClick={() => setVisible(!visible)} >{visible ? <FaEyeSlash/> : <FaEye/>}</span>
        {errors.password ? 
        <ErrorMessage name="password" component="span" className={css.warning} />
        // <p className={css.warning}>{errors.password}</p> 
        : <p className={css.warning}>The password must be 8+ characters long, including at least one uppercase letter, one number and one symbol</p> }
        </div>
        <button type="submit">Register</button>
      </Form>
        )}
    </Formik>
  );
}
