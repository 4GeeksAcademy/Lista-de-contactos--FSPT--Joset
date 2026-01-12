export const getContacts = async (dispatch) => {
  
  const response = await 
  fetch( `https://playground.4geeks.com/contact/agendas/Amigos/contacts`);
  console.log(response);
  if (!response.ok) {
    createAgenda();
    return;
  }

  const data = await response.json();
  console.log(data);
  dispatch({ type: "set_contacts", payload: data.contacts });
};

export const createAgenda = async (params) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/Amigos`,
    {
      method: "POST",
    }
  );
  console.log(response);
};

//editarContact
//eliminarContact

export const addContact = async (dispatch, contact) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/Amigos/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(contact)
    })

    if(!response.ok) {
      alert("Error creando el contacto")
      return 
    }
    const data = await response.json();
    dispatch({ type: "add_contacts", payload: data});
};

export const editContact = async (contact, navigate, dispatch) => {
  const response = await fetch(`https://playground.4geeks.com/contact/agendas/Amigos/contacts/${contact.id}`, {
    method: "PUT", 
    body: JSON.stringify(contact),
    headers: {
        "Content-type": "application/json"
    }
  })
  const data = await response.json()
  console.log(data);
  await getContacts(dispatch);
  navigate("/")
}