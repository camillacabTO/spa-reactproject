import { ServiceStyle } from './styles/Service.styles';

export default function Service({ service, addService }) {
  return (
    <ServiceStyle flexDirection={service.id % 2 === 0 && 'row-reverse'}>
      <div onClick={() => addService(service.price)}>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <p>${service.price}</p>
      </div>
      <div>
        <img src={`${service.image}`} alt='service' />
      </div>
    </ServiceStyle>
  );
}
