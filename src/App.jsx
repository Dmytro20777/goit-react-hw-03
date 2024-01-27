// import { useState } from "react";
// import { SearchPerson } from "./SearchPeson/SearchPeson";
// import { ListPersons } from "./ListPersons/ListPersons";
// import { AddPerson } from "./AddPerson/AddPerson";

// export const App = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [persons, setPersons] = useState([
//     { username: "Apolon", id: 1 },
//     { username: "Anna", id: 2 },
//     { username: "Saske", id: 3 },
//     { username: "Fanny", id: 4 },
//     { username: "Ramona", id: 5 },
//     { username: "Dimitresku", id: 6 },
//     { username: "Alex", id: 7 },
//     { username: "Hans", id: 8 },
//     { username: "Friedrich", id: 9 },
//     { username: "Saasch", id: 10 },
//   ]);

//   const visiblePerson = persons.filter((person) => person.username.toLowerCase().includes(inputValue.toLowerCase()));

//   const deletePerson = (personId) => {
//     setPersons((prevPersons) => {
//       return prevPersons.filter((person) => person.id !== personId)
//     });
//   };

//   const personAdd = (newPerson) => {
//     setPersons((preventPersons) => {
//       return [...preventPersons, {
//         username: newPerson,
//         id: Date.now()
//       }]
//     })
//   }

//   return (
//     <>
//       <SearchPerson value={inputValue} onChange={setInputValue} />
//       <AddPerson onAdd={ personAdd } />
//       <ListPersons items={visiblePerson} onDelete={deletePerson} />
//     </>
//   )
// }



// FeedbackForm.jsx

import { Field, Form, Formik, ErrorMessage  } from "formik";
import css from "./FeedbackForm/FeedbackForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
	level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good"
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId} className={css.label}>
            Username
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Enter your username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" className={css.error} />
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Enter your email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        
        <div className={css.fieldContainer}>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            name="message"
            id={msgFieldId}
            rows="5"
            cols="10" />
          <ErrorMessage name="message" component="span" className={css.error} />
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={levelFieldId}>Service satisfaction</label>
            <Field className={css.field} as="select" name="level" id={levelFieldId}>
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span" className={css.error} />
        </div>

        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export const App = () => {
  return (
    <>
      <FeedbackForm/>
    </>
  );
};
