import useGlobalReducer from "../hooks/useGlobalReducer";
import {Link } from "react-router-dom";


export const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <li className="row contact list-unstyled">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center align-items-center p-3">
            <img
              src="https://previews.123rf.com/images/belopoppa/belopoppa1809/belopoppa180900006/108863772-profile-placeholder-image-gray-silhouette-no-photo.avif"
              className="rounded-circle"
              alt="Foto Random"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
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

            <Link to= {`/edit/${contact.id}`}>
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
              data-bs-target={`modal.${contact.id}`}
              aria-label={`Delete ${contact.name}`}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
