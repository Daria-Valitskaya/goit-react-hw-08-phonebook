// import PropTypes from "prop-types";

const ContactItem = ({ id, number, name, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactItem;
