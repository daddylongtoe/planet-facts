import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  max-height: 100vh;
`;
export const Container = styled.div`
  max-width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const UpperContent = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  height: 100%;
  max-height: 666px;

  @media ${({ theme }) => theme.breakpoints.md} {
    /* height: 422px; */
  }

  /* img {
    @media ${({ theme }) => theme.breakpoints.md} {
      height: 50%;
    }
  } */
`;

export const FeatureImage = styled.div`
  position: absolute;
  top: 61%;
  left: 50%;

  img {
    position: relative;
    left: -50%;
    max-width: 16.3rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
`;

export const TextContent = styled.div`
  @media ${({ theme }) => theme.breakpoints.md} {
    /* width: 339px; */
    margin: 0 2rem;
  }
`;

export const Title = styled.h1`
  display: block;
  padding: 2rem;
  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 4.8rem;
    line-height: 5rem;
    padding: 1.5rem;
  }
`;

export const Overview = styled.p`
  display: grid;
  padding: 2rem;
  min-height: 19rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.1rem;
  }
`;

export const Source = styled.p`
  position: relative;

  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
  padding: 2rem;
  padding-top: 1rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.2rem;
  }

  a {
    font-size: inherit;
    font-weight: bold;
    text-decoration: underline;
    color: inherit;
  }

  img {
    position: absolute;
    top: 17px;
    height: 12px;
    width: auto;
    padding-left: 9px;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2rem;
  padding: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-left: 1.5rem;
    padding-right: 4rem;
    min-width: 33rem;
  }
`;

export const OptionButton = styled.button`
  display: flex;
  column-gap: 3rem;
  width: 100%;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: rgba(255, 255, 255, 0.5);
  background-color: ${({ active, theme, name }) =>
    active ? theme.colors[name] : theme.colors.dark_grey};
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1.5rem 2rem;

    font-size: 0.9rem;
    column-gap: 1.5rem;
  }

  &:hover {
    background-color: ${({ active, theme, name }) =>
      active ? theme.colors[name] : theme.colors.mid_grey};
  }
`;

export const Text = styled.p`
  color: #fff;
  text-transform: uppercase;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
  padding: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1.5rem 4rem 3.5rem 4rem;
    column-gap: 1rem;
  }

  > * {
    flex: 1 1 100%;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 0;
  justify-content: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1.5rem;
    height: 8.8rem;

    h2 {
      font-size: 2.4rem;
      line-height: 100%;
    }
  }
`;

export const StatTitle = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;
