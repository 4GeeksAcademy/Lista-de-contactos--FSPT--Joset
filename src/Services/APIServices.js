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

const createAgenda = async (params) => {
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

const addContact = async (dispatch, contact) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/Amigos/contacts`,
    {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type":"application/json"
      }
    })
    const data = responde.json()
    getContacts(dispatch)
};

export const editarContact = async (contact) => {
  const responde = await fetch(`https://playground.4geeks.com/contact/agendas/Amigos/contacts/${contact.id}`, {
    method: "PUT", 
    body: JSON.stringify(contact),
    headers: {
        "Content-type": "application/json"
    }
  })
  const data = await response.json()
  console.log(data);
  
}