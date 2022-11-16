import styled from 'styled-components';

export const ServiceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(135, 12%, 80%);
  margin: 20px 80px;
  height: 35vh;
  width: 80vw;
  border-radius: 5px;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};

  & > div:first-of-type {
    padding: 25px 0px 0px 50px;
    cursor: pointer;

    &:hover {
      transform: scale(0.95);
      opacity: 0.9;

      transition: all 450ms;
    }
    p {
      margin: 20px 0;
    }
  }

  & > div {
    flex: 1;
    ${'' /* height: 100%; */}
  }
`;
