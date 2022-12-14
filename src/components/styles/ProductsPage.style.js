import styled from 'styled-components';

export const ProductsStyle = styled.div`
  padding: 40px 50px;
  margin: 0 auto;

  h3 {
    text-align: center;
    font-style: oblique;
    margin-bottom: 30px;
    font-weight: 400;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
    gap: 50px;
    margin: 50px auto;
    width: 70%;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  & > span,
  small {
    margin: 5px 0;
    display: block;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 20px 0;
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;
