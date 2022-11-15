import { NavLink } from 'react-router-dom';
import { HeaderStyle, Logo, Nav } from './styles/Header.style';
import logo from '../assets/logo.png';

const Header = () => {
  let activeStyle = {
    color: 'hsl(20,66%,49%)',
  };
  return (
    <HeaderStyle>
      <Logo src={logo} />
      <Nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/services'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
