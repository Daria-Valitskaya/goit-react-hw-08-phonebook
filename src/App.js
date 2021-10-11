import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Section from "./Components/Section/Section";

export default function App() {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>My Contacts </h2>
        <Filter />
      </Section>
      <Section>
        <ContactList />
      </Section>
    </div>
  );
}
