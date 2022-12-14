import styled from 'styled-components';
import background from '../../assets/main2.jpg';

export const HomeStyle = styled.div`
  background-image: url(${background});
   {
    /* All images are loyalty free. Downloaded from unsplash.com */
  }
  background-position: center;
  background-size: cover;
  height: 100vh;
  opacity: 1;
  position: relative;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  & > div {
    position: relative;
    z-index: 10;
    color: white;
    font-size: 1.5rem;
    margin: auto;
    max-width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 60px 0;

    div > button {
      margin: 0 30px;
    }

    @media (max-width: 900px) {
      font-size: 1.15rem;
      div > button {
        display: block;
        margin: 20px auto;
      }
    }
  }
`;
