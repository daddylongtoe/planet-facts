import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  column-gap: 3rem;
  width: 100%;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: rgba(255, 255, 255, 0.5);
  background-color: ${(props) => props.theme.colors.dark_grey};
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    background-colour: rgba(216, 216, 216, 1);
  }
`;

export const Number = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;
export const Text = styled.p`
  text-transform: uppercase;
`;
