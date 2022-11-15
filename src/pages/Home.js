import { Button } from '../components/styles/Button';
import { HomeStyle } from '../components/styles/Home.style';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <div>
        <h1>WELCOME TO RAGDALE HALL SPA</h1>
        <p>
          We are all a bit obsessed with time. Seconds, minutes, hours, days,
          gone before we can even count them. The present can never really be
          measured, but it can be valued. A moment doesn’t always need to be
          fleeting. We know the best moments become memories, and these last
          forever. For more than 30 years we’ve been dedicated to turning your
          time into You Time. Because we believe that time is the most precious
          gift that we can give you.
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
