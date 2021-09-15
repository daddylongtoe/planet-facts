import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 8.5rem;
  border-bottom: 1px solid #979797;
  padding: 0 3rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 16rem;
  }
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const Logo = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 2.8rem;
  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 4rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  column-gap: 3.5rem;
  /* width: 100%; */

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem 3.5rem 2rem;
  }
`;

export const NavItem = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  border-top: 4px solid ${(props) => props.theme.colors.dark_grey};
  font-weight: bold;
  opacity: 0.8;

  &:hover {
    border-top: 4px solid ${({ theme, name }) => theme.colors[name]};
    opacity: 1;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
`;
