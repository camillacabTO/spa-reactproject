import Service from '../components/Service.js';
import { services } from '../content';
import { useState } from 'react';
import { ServicesStyle } from '../components/styles/ServicePage.styles';

export default function Services() {
  const [total, setTotal] = useState(0);

  function addToTotal(price) {
    setTotal((prevTotal) => prevTotal + price);
  }

  //create style for this page

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
      <p>Total: ${total.toFixed(2)}</p>
    </ServicesStyle>
  );
}
