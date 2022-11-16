import { Button } from '../components/styles/Button';
import { HomeStyle } from '../components/styles/HomePage.style';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <div>
        <h1>WELCOME TO SPADESY</h1>
        <p>
          Our luxury spa turns from a European-feel escape in the summer, to an
          indulgent thermal heaven in the winter. Experience a range of pools
          and jacuzzis both indoors and outdoors, an extensive range of thermal
          cabins of differing temperatures, humidities and aromas, along with
          experience showers, relaxations rooms and our incredible spa
          treatments. Tailor your journey to achieve your desired results, be it
          to unwind and de-stress or invigorate and rejuvenate.
        </p>
        <div>
          {/* When user clicks the button she/he is redirected to another page in the application */}
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
