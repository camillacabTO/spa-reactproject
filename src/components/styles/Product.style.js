import styled from 'styled-components';

export const ProductStyle = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 30px;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || '#fff'};

  &:hover {
    transform: scale(0.95);
    opacity: 0.9;
    cursor: pointer;
    transition: all 450ms;
  }

  h4 {
    font-weight: 400;
    text-align: center;
  }

  p {
    margin: 10px 0;
  }
`;
