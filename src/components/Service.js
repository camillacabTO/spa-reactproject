import { ServiceStyle } from './styles/Service.styles';

// Component used to display each service
// The service obj contains all information to be displayed in this page
// addService function is passed by props from the parent component. It is called when the Service component is clicked and the price of this specific service is passed as an argument in order to update the Total state in the parent component (Services)

// I passed flexDirection into props to ServiceStyle with the purpose of switching the position of the divs in the component if the id odd or even

export default function Service({ service, addService }) {
  return (
    <ServiceStyle flexDirection={service.id % 2 === 0 && 'row-reverse'}>
      <div onClick={() => addService(service.price)}>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <p>${service.price}</p>
      </div>
      <div>
        {/* I had to move all the images used here from the assets folder to the public folder. It would be hard to import them from assets and display here. With the images in the public folder there is no need to import, just use the image file name */}

        {/* All images are loyalty free. Downloaded from unsplash.com */}
        <img src={`${service.image}`} alt='service' />
      </div>
    </ServiceStyle>
  );
}
