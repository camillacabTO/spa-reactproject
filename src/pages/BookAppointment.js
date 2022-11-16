import { useState } from 'react';
import { Button } from '../components/styles/Button.js';
import { BookAppointmentStyle } from '../components/styles/BookAppointmentPage.style.js';
import { services } from '../content.js';

const BookAppointment = () => {
  // 4 states were created for the controlled form. The 'value' property of all fields are controlled by the state and are updated as the user type
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // When the form is submitted a new object is created and logged in the console. Form fields is also cleared
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactInfo = {
      name,
      service,
      phoneNumber,
      message,
    };
    console.log(contactInfo);
    setName('');
    //first service in list is the default for this select input
    setService(services[0].title);
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <>
      <BookAppointmentStyle onSubmit={handleSubmit}>
        <p>Schedule your appointment at Spadesy today! </p>
        <label>
          <span>Name:</span>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Type of Service:</span>
          <select onChange={(e) => setService(e.target.value)} value={service}>
            <option value={services[0].title}>{services[0].title}</option>
            <option value={services[1].title}>{services[1].title}</option>
            <option value={services[2].title}>{services[2].title}</option>
            <option value={services[3].title}>{services[3].title}</option>
          </select>
        </label>
        <label>
          <span>Phone Number:</span>
          <input
            type='text'
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>
        <Button>Submit</Button>
      </BookAppointmentStyle>
    </>
  );
};

export default BookAppointment;
