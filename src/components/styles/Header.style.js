import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 100px;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    li {
      margin-left: 25px;
      a {
        color: #000;
        font-weight: 300;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
`;
