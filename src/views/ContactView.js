import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import ContactList from "../Components/ContactList/ContactList";
import ContactForm from "../Components/ContactForm/ContactForm";

import Filter from "../Components/Filter/Filter";
import s from "./Views.module.css";
import MyLoader from "../Components/MyLoader/MyLoader";

import { contactsOperations } from "../redux/Contacts";

function ContactViews() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);
  return (
    <>
      <Filter />

      <h3 className={s.title}>Contacts:</h3>
      <MyLoader />
      <ContactForm />
      <ContactList />
    </>
  );
}

export default ContactViews;
