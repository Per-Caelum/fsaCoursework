const SelectedContact = ({ contact }) => {
  console.log(contact.address);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {contact.name} - {contact.username}
            </td>
          </tr>
          <tr>
            <td>{contact.phone}</td>
          </tr>

          <tr>
            <td>{contact.website}</td>
          </tr>

          <tr>
            <td>{contact.address.city}</td>
          </tr>
          <tr>
            <td>
              {contact.address.street} {contact.address.suite}{" "}
              {contact.address.zipcode}
            </td>
          </tr>
          
        </tbody>
      </table>
    </>
  );
};

export default SelectedContact;
