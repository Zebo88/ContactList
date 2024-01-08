import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  // const [contacts, setContacts] = useState(dummyContacts);
  const [contacts, setContacts] = useState([]);
  // let ignore = false;
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        // console.log(result);
          setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
// if(ignore){
//   return;
// }
    fetchContacts();
  // return () => ignore = true;
  },[])

  return (  
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="col-head">Name</td>
          <td className="col-head">Email</td>
          <td className="col-head">Phone</td>
        </tr>
        {
          //Map over data here:
          contacts.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
          })
        }
      </tbody>
    </table>
  )
}