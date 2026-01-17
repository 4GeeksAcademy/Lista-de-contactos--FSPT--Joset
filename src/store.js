export const initialStore = () => ({
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

