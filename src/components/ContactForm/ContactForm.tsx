import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "../FormStyles.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
const UserScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! Not less than 3 symbols.")
    .max(50, "Too many! No more than 50 symbols.")
    .required("You have to write a name!"),
  number: Yup.string()
    .matches(/^\d+$/, "Must be a valid number.")
    .min(3, "Too short! Not less than 3 symbols.")
    .max(50, "Too many! No more than 50 symbols.")
    .required("The phone number should be here!"),
});

export interface ContactInfo {
  name: string,
  number: string
}
export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch<AppDispatch>();
  const handleAddContact = (contactInfo: ContactInfo) => {
    dispatch(addContact({ ...contactInfo }));
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserScheme}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.inputwrap}>
        <Field
          className={css.input}
          type="text"
          id={`${id}-name`}
          name="name"
          placeholder=" " 
          autoComplete="off"
        />
        <label className={css.label} htmlFor={`${id}-name`}>Name</label>
        <ErrorMessage name="name" component="span" className={css.errText} />
        </div>
        <div className={css.inputwrap}>
        <Field
          className={css.input}
          type="text"
          id={`${id}-number`}
          name="number"
          placeholder=" " 
          autoComplete="off"
        />
        <label className={css.label} htmlFor={`${id}-number`}>Number</label>
        <ErrorMessage name="number" component="span" className={css.errText} />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
