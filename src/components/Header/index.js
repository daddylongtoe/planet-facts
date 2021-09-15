import { NavLink } from 'react-router-dom';
import { Container, Logo, Menu, Nav, NavItem, Link } from './HeaderStyles';
import { useLocation } from 'react-router-dom';

export default function Header({ data }) {
  const { pathname } = useLocation();
  const slug = pathname.substring(1);

  return (
    <Nav>
      <Container>
        <NavLink to="/">
          <Logo>The Planets</Logo>
        </NavLink>

        <Menu>
          {data.map(({ name }) => (
            <NavItem key={name} name={slug}>
              <Link to={`/${name.toLowerCase()}`}>{name}</Link>
            </NavItem>
          ))}
        </Menu>
      </Container>
    </Nav>
  );
}
