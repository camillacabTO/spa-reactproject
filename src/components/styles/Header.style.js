import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: fit-content;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    margin-top: 20px;
    li {
      margin-left: 25px;
      a {
        color: #000;
        font-weight: 300;
      }
    }
    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }
  }
`;

export const Logo = styled.img`
  width: 180px;
`;
