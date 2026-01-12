export const initialStore = () => ({
  message: null,
  todos: [
    {
      id: 1,
      title: "Hacer la cama",
      background: null,
    },
    {
      id: 2,
      title: "Hacer la tarea",
      background: null,
    },
    {
      id: 3,
      title: "Hacer la comida",
      background: null,
    }
  ],
  contacts: []
});

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    
   
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      };
    
     
    case 'DELETE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };
    
    default:
      return store;
  }    
}

//Este store necesita que alguien dispare (distpach) una accion para el actuar e indicamos a quien modifica y con que modifica.

