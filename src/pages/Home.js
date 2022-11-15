import { Button } from '../components/styles/Button';
import { HomeStyle } from '../components/styles/Home.style';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <div>
        <h1>WELCOME TO SPADESY</h1>
        <p>
          Magna cupidatat enim id consectetur. Qui do deserunt duis esse cillum
          anim mollit amet magna do voluptate magna in. Officia cupidatat nulla
          deserunt labore tempor voluptate. Irure ipsum aute labore id nulla et
          quis aliquip velit aliquip. Officia proident nostrud nisi officia
          cupidatat cupidatat ex fugiat mollit dolore aliqua nulla deserunt ut.
          Est Lorem culpa ullamco irure
        </p>
        <div>
          <Button
            onClick={() => {
              navigate('/services');
            }}
          >
            Book a Massage Today
          </Button>
          <Button
            onClick={() => {
              navigate('/products');
            }}
          >
            Buy Our Products
          </Button>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
