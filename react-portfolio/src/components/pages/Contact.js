import React, { useState } from 'react';
import '../styles/Contact.css';
import { validateEmail, validateName, validateMessage } from '../../utils/helpers';
export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

      if (!validateName(userName)) {
        setErrorMessage('Name cannot be empty!');
        return;
      }
  
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }

      if (!validateMessage(message)) {
        setErrorMessage('Message is empty!');
        return;
      }

  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setUserName('');
      setEmail('');
      setMessage('')
    };
  
    return (
      <div className="contactPage bg-desert min-w-full">
        <form className="form">
            Name:
            <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
            />
            Email:
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            Message:
            <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                rows="6"
            />



            <button type="button" className="messageButton" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div className="form-errorMessage">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
    
}
