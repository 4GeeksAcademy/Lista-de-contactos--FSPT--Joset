import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editarContact } from "../Services/APIServices";


export const Form = () => {

    const {store, dispatch} = useGlobalReducer()

    const {id} = useParams()

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    console.log(contact);

    const [editing, setEditing] = useState(false)

    const [alert, setAlert] = useState(false);

    const handleInputsChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();  

        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
            return;
        }

        // TODO: petición al API para agrgar o editar el contacto
        if(editing){
            editarContact(contact)
        }
    }

    const contactEdit = () => {
        const contactFinded = store.contacts.find(contact => {

            
            return contact.id ===  Number(id)
    })
       console.log(contact.id, id);
       setContact(contactFinded)
    }

    useEffect(() => {
        if (id) {
            console.log("estoy editando");
            setEditing(true)
            contactEdit()
        }else{
            console.log("Estoy creando el contacto nuevo");
            setEditing(false)
        }

    }, [])



    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {alert && (
                    <div className="alert alert-warning" role="alert">
                        Todos los campos son obligatorios
                    </div>
                )}
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    name="name"
                    value={contact.name}
                    onChange={handleInputsChange}
                />
                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={contact.email}
                    onChange={handleInputsChange}
                />
                <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleInputsChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address"
                    name="address"
                    value={contact.address}
                    onChange={handleInputsChange}
                />
                <button type="submit" className="btn btn-success w-100">Salvar</button>
            </form>
        </div>

    );
};



/**
 *   Formulario 
        Html de formulario con 
        usestate para manejar informacion del contacto que se esta creando. 
        HandleChange para que cuando se modifique algo en los  input se modifique el contacto
 */

