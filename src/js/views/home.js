import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = ({ contacts, onAddContact, onDeleteContact, onEditContact }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    onDeleteContact(index);
  };

  const handleEdit = (contact, index) => {
    navigate("/add-contact", { state: { contact, index, editMode: true } });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact List</h1>
      <Link to="/add-contact" className="btn btn-success mb-3 float-right">Add new contact</Link>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div className="contact-card d-flex align-items-center mb-2" key={index}>
            <div className="contact-image">
              <i className="fas fa-user"></i>
            </div>
            <div className="contact-info ml-3">
              <h2>{contact.fullName}</h2>
              <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
              <p><i className="fas fa-phone"></i> {contact.phone}</p>
              <p><i className="fas fa-envelope"></i> {contact.email}</p>
            </div>
            <div className="contact-actions ml-auto">
              <i className="fas fa-pencil-alt mr-2" onClick={() => handleEdit(contact, index)}></i>
              <i className="fas fa-trash" onClick={() => handleDelete(index)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
