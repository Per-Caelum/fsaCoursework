//import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
//import SelectedContact from "./SelectedContact";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = /* async ?**/ ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState(dummyContacts);
 // console.log("Contacts: ", contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        //code logic here
        const { data } = await axios.get(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          // Map over data here

          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId} /*🐝**/
              />
            );
          })
        }
      </tbody>
    </table>
  );
};

export default ContactList;
