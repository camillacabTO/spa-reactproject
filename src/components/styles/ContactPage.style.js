import styled from 'styled-components';

export const ContactStyle = styled.form`
  max-width: 40vw;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid hsl(20, 66%, 49%);
  border-radius: 7px;
  background-color: #f3f3f3;

  label,
  input,
  select,
  textarea,
  p {
    display: block;
    text-align: left;
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.1em;
  }

  input,
  select,
  textarea {
    border: 1px solid hsl(20, 66%, 49%);
    border-radius: 7px;
  }

  button {
    margin: 30px 10px;
  }
`;
