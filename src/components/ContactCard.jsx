import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


export const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = () => {
    if (confirm(`¿Eliminar a ${contact.name}?`)) {
      dispatch({ type: 'DELETE_CONTACT', payload: contact.id });
    }
  };

  return (
    <li className="row contact list-unstyled">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center align-items-center p-3">
            <img
              src="https://studentsforliberty.org/wp-content/uploads/2025/08/Maduro-Preso.jpg"
              className="rounded-circle"
              alt="Foto Random"
              style={{ width: "120px", height: "125px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 col-10 my-auto">
            <div className="fw-bold fs-4 text">
              {contact.name.toUpperCase()}
            </div>
            <div className="email">
              {" "}
              <i className="fa-solid fa-envelope me-2"></i> {contact.email}{" "}
            </div>
            <div className="phone">
              {" "}
              <i className="fa-solid fa-phone me-2"></i> {contact.phone}{" "}
            </div>
            <div className="address">
              {" "}
              <i className="fa-solid fa-location-dot me-2"></i>{" "}
              {contact.address}
            </div>
          </div>
          <div className="col-md-2 col-2">

            <Link to={`/edit/${contact.id}`}>
              <button
                type="button"
                className="btn p-0 border-0 bg-transparent me-2"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </Link>


            <button
              type="button"
              className="btn p-0 border-0 bg-transparent"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${contact.id}`} //data-bs-target={`modal.${contact.id}`}
              aria-label={`Delete ${contact.name}`}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>

          </div>
            <div className="modal fade" id={`modal-${contact.id}`} tabIndex="-1" aria-labelledby={`modalLabel-${contact.id}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel-${contact.id}`}>Eliminar {contact.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¿Estás seguro de eliminar a <strong>{contact.name}</strong>?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </li>
  );
};
