const agendaSlug = "JosetSinPh";

export const getContacts = async (dispatch) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`
  );
  console.log(response);
  if (!response.ok) {
    createAgenda(agendaSlug);
    return;
  }

  const data = await response.json();
  console.log(data);
  dispatch({ type: "set_contacts", payload: data.contacts });
};

export const createAgenda = async (slug) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${slug}`,
    {
      method: "POST",
    }
  );
  console.log("Agenda", "slug", "creada");
};

//editarContact
//eliminarContact

export const addContact = async (dispatch, newContact) => {
    const agendaSlug = 'JosetSinPh';
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            name: newContact.name,
            email: newContact.email,
            phone: newContact.phone,
            address: newContact.address
        })
    });
    
    if (response.ok) {
        dispatch({ type: 'GET_CONTACTS' });
    } else {
        throw new Error(await response.text());
    }
};

// export const addContact = async (dispatch, contact) => {
//   const response = await fetch(
//     `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(contact),
//     }
//   );

//   if (!response.ok) {
//     alert("Error creando el contacto");
//     return;
//   }
//   const data = await response.json();
//   dispatch({ type: "add_contacts", payload: data });
// };

export const editContact = async (contact, dispatch) => {  // Recibe contact completo
    const agendaSlug = 'JosetSinPh';
    
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: contact.name,      
            email: contact.email,
            phone: contact.phone,
            address: contact.address
        })
    });
    
    if (response.ok) {
        dispatch({ type: 'GET_CONTACTS' });  // Recarga lista
    } else {
        throw new Error(await response.text());
    }
};

// export const editContact = async (contact, navigate, dispatch) => {
//   const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contact.id}`, {
//     method: "PUT",
//     body: JSON.stringify(contact),
//     headers: { "Content-type": "application/json"}
//   });
//   const data = await response.json()
//   console.log(data);
//   await getContacts(dispatch);
//   navigate("/")
// };

export const deleteContact = async (contactId, dispatch) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contactId}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    await getContacts(dispatch);
  }
};
