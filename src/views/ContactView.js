import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ContactList from "../Components/ContactList/ContactList";
import ContactForm from "../Components/ContactForm/ContactForm";
import Section from "../Components/Section/Section";
import Filter from "../Components/Filter/Filter";
import s from "../App.module.css";
import MyLoader from "../Components/MyLoader/MyLoader";

import { contactsOperations, getLoading } from "../redux/Contacts";

function ContactViews() {
  const dispatch = useDispatch();

  // const isLoading = useSelector(getLoading);
  // console.log(isLoading);
  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);

  return (
    <>
      <Section>
        <div className={s.block}>
          <Filter />
        </div>
        <h3 className={s.mainTitle}>Contacts:</h3>
        {/* {getLoading && <MyLoader />} */}
        <MyLoader />
        <ContactForm />
        <ContactList />
      </Section>
    </>
  );
}

export default ContactViews;
