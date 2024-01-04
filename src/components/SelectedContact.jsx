import React from "react";
import { useState, useEffect } from "react";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    // let ignore = false;
    async function fetchContact(){
      try {
        const response = await fetch(`${API_URL}/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        console.log(result);
        console.log(contact);
      } catch (error) {
        console.error(error);
      }
    }
    // if(ignore) {
    //   return;
    // }

    fetchContact();
    // return () => ignore = true;
  },[])

  return (
    <>
    <table>
        <thead>
          <tr>
            <th colSpan="2">{contact.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email:</td>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{contact.phone}</td>
          </tr>
          {/* <tr>
            <td>Address:</td>
            <td>{
                  contact.map((info) => {
                  return `${info.address.street}, ${info.address.city}`;
                  })
                }
            </td>
          </tr> */}
        </tbody>
      </table>
      <button onClick={() => {setSelectedContactId(null)}}>Return</button>
    </>
      
  )
}