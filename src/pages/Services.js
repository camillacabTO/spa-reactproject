import Service from '../components/Service.js';
import { services } from '../content';
import { useState } from 'react';
import { ServicesStyle } from '../components/styles/ServicePage.styles';

export default function Services() {
  const [total, setTotal] = useState(0);

  // Grabbing the updated state using a callback function and adding the 'price' argument passed to the function.
  const addToTotal = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  };

  return (
    <ServicesStyle>
      <h3>Select one or more of our customized services</h3>
      <small>
        <i>Taxes included</i>
      </small>
      {services.map((service) => (
        <Service service={service} key={service.id} addService={addToTotal} />
      ))}
      <small>Click on the service description to add to your cart...</small>
      {/* Displaying the total (state) to user*/}
      <p>Total: ${total.toFixed(2)}</p>
    </ServicesStyle>
  );
}
