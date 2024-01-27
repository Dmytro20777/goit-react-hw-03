import { Formik, Form, Field, ErrorMessage  } from "formik";
import css from "./ContactForm.module.css";
import { useState } from "react";
import * as Yup from "yup";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  addUser: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  addNumber: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

const initialValues = {
  addUser: "",
  addNumber: ""
};


export const ContactForm = ({ addNewUser }) => {
    const nameFieldId = useId();
    const nummberlFieldId = useId();

    const [newUser, setNewUser] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewUser(newUser, newNumber);
        setNewUser("");
        setNewNumber("");
    };


    return (
        <div className={css.container}>
            <Formik initialValues={initialValues} onSubmit={() => {}} validationSchema={FeedbackSchema} >
                <Form onSubmit={handleSubmit}>
                    <label htmlFor={nameFieldId}>Name
                        <Field
                            type="text"
                            name="addUser"
                            placeholder="name"
                            value={newUser}
                            onChange={(event) => setNewUser(event.target.value)}
                            id={nameFieldId}
                        />
                        <ErrorMessage
                            name="addUser" component="span"
                            className={css.error}/>
                    </label>
                    <label htmlFor={nummberlFieldId}>Number
                        <Field
                            type="text"
                            name="addNumber"
                            placeholder="Number"
                            value={newNumber}
                            onChange={(event) => setNewNumber(event.target.value)}
                            id={nummberlFieldId}
                        />
                        <ErrorMessage name="addNumber" component="span"
                        className={css.error}/>
                    </label>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};
