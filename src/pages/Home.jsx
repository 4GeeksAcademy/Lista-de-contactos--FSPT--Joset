import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../Services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getContacts(dispatch); 
    }, []);
    // useEffect(() => {
    //     getContacts(dispatch);
    // }, []);

    const contacts = store.contacts || [];

    return (
        <div className="container">
            <div className="contacts">
                {store.contacts.map((contact) => {
                    return <ContactCard contact={contact} key={contact.id} />;
                })}
            </div>
        </div>
    );
};

{
    /* <button onClick={() => createContact(dispatch, contact)}>Agregar contacto</button> */
}
