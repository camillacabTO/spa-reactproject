import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid hsl(20, 66%, 49%);
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor || 'hsl(20,66%,49%)'};
  color: ${({ textColor }) => textColor || 'hsl(50,15%,92%)'};

  &:hover {
    transform: scale(0.95);
    opacity: 0.9;

    transition: all 450ms;
  }
`;
