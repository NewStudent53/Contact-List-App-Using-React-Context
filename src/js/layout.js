import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { AddContact } from "./views/addContact";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const [contacts, setContacts] = useState([
    {
      fullName: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com"
    }
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleEditContact = (updatedContact, index) => {
    const newContacts = contacts.map((contact, i) => (i === index ? updatedContact : contact));
    setContacts(newContacts);
  };

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home contacts={contacts} onDeleteContact={handleDeleteContact} onEditContact={handleEditContact} />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/add-contact" element={<AddContact onAddContact={handleAddContact} onEditContact={handleEditContact} />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
