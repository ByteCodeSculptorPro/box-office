import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
export default function Navs() {
  const LINKS = [
    { text: 'Home', to: '/' },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];

  return (
    <nav>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      /* width: calc(100% - 30px); */
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
