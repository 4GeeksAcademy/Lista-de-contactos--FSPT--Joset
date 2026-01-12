import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editContact } from "../Services/APIServices";
import { useNavigate } from "react-router-dom";
import { addContact } from "../Services/APIServices.js";



export const Form = () => {

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()

    const navigate = useNavigate()

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
            return;
        }

        try {
            if (editing) {
                await editContact(contact, dispatch,);  // Añade await + id
            } else {
                await addContact(dispatch, contact);  // ← AQUÍ LA LLAMADA FALTANTE
                await dispatch({ type: 'GET_CONTACTS' });  // Recarga lista (o llama getContacts)
            }
            navigate("/");  // ← Navega a Home actualizada
        } catch (error) {
            console.error("Error:", error);
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
        }


        // TODO: petición al API para agrgar o editar el contacto
        // if(editing){
        //     editContact(contact, navigate, dispatch)
        // }
        //por hacer: que pasa si yo no estoy editando. funcion crear contacto, esa funcion recibe algo, etc
        //La comunicacion esta en API y cuando se cree debe navegar al Home 
        //Cuando se le da ok al modal de delete el boton debe tener un onclick con peticion a la api para eliminar contacto con id y cuando tenga respuesta se actualiza
    }

    // const contactEdit = () => {
    //     const contactFinded = store.contacts.find(contact => {


    //         return contact.id ===  Number(id)
    // })
    //    console.log(contactFinded);
    //    setContact(contactFinded)
    // }
    const contactEdit = () => {
        const contactFinded = store.contacts.find(contact => contact.id == id);  // == loose para string/number
        if (!contactFinded) {
            console.error("Contacto no encontrado, id:", id);
            navigate("/");  // Vuelve si no existe
            return;
        }
        console.log("Edit contact:", contactFinded);
        setContact(contactFinded);
    };

    useEffect(() => {
        if (id) {
            console.log("estoy editando");
            setEditing(true)
            contactEdit()
        } else {
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
                    value={contact?.name || ""} //antes: value={contact.name}
                    onChange={handleInputsChange}
                />
                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={contact?.email || ""} //value={contact.email}
                    onChange={handleInputsChange}
                />
                <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={contact?.phone || ""} //value={contact.phone}
                    onChange={handleInputsChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address"
                    name="address"
                    value={contact?.address || ""} //value={contact.address}
                    onChange={handleInputsChange}
                />

                <button type="button" className="btn btn-danger btn-lg px-4 py-1 shadow-sm" onClick={() => navigate("/")}> <i className="fas fa-times me-1"></i> Cancelar </button>
                <button type="submit" className="btn btn-success btn-lg px-4 py-1 shadow-sm"><i className="fas fa-save me-2"></i>Salvar</button>

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

