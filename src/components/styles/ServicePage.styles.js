import styled from 'styled-components';

export const ServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;

  h3 {
    text-align: center;
    font-style: oblique;
    margin-bottom: 30px;
    font-weight: 400;
  }

  & > div {
    flex: 1;
  }

  & > p {
    align-self: flex-start;
    margin: 5px 5px;
  }

  & > small {
    margin: 15px 0;
  }
`;
