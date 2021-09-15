import { useState } from 'react';
import {
  Container,
  ButtonsGroup,
  OptionButton,
  Overview,
  Section,
  Source,
  StatBox,
  StatsContainer,
  StatTitle,
  Title,
  UpperContent,
  ImageContainer,
  FeatureImage,
  MainContent,
  Text,
  TextContent,
} from './planetStyles';

const buttons = [
  {
    name: 'overview',
    image: 'planet',
    featureImage: false,
  },
  {
    name: 'structure',
    image: 'internal',
    featureImage: false,
  },
  {
    name: 'geology',
    image: 'planet',
    featureImage: true,
  },
];

export default function Planet({ planet }) {
  const { name, images, rotation, revolution, radius, temperature } = planet;

  const [activeContent, setActiveContent] = useState('overview');
  const [mainImage, setmainImage] = useState('planet');
  const [featureImagePresent, setfeatureImagePresent] = useState(false);
  const [activeButton, setactiveButton] = useState(buttons[0]);

  const setContent = (optionsArray) => {
    setactiveButton(buttons[optionsArray[0]]);
    setActiveContent(optionsArray[1]);
    setmainImage(optionsArray[2]);
    setfeatureImagePresent(optionsArray[3]);
  };

  return (
    <Section>
      <Container>
        <UpperContent>
          <ImageContainer>
            <img src={images[`${mainImage}`]} alt={`Vector of ${name}`} />
            {featureImagePresent ? (
              <FeatureImage>
                <img src={images.geology} alt={`Feature of ${name}`} />
              </FeatureImage>
            ) : null}
          </ImageContainer>
          <MainContent>
            <TextContent>
              <Title>{name}</Title>
              <Overview>{planet[`${activeContent}`].content}</Overview>
              <Source>
                Source:{' '}
                <a href={planet[`${activeContent}`].source}>
                  Wikipedia{' '}
                  <img src={`/assets/icon-source.svg`} alt="external link" />
                </a>
              </Source>
            </TextContent>
            <ButtonsGroup>
              {buttons.map(({ name, image, featureImage }, index) => {
                return (
                  <OptionButton
                    key={name}
                    active={activeButton.name === name}
                    name={planet.name.toLowerCase()}
                    onClick={() =>
                      setContent([index, name, image, featureImage])
                    }
                  >
                    <span>0{index + 1}</span>
                    <Text>{name}</Text>
                  </OptionButton>
                );
              })}
            </ButtonsGroup>
          </MainContent>
        </UpperContent>

        <StatsContainer>
          <StatBox>
            <StatTitle>Rotation Time</StatTitle>
            <h2>{rotation}</h2>
          </StatBox>
          <StatBox>
            <StatTitle>Revolution Time</StatTitle>
            <h2>{revolution}</h2>
          </StatBox>
          <StatBox>
            <StatTitle>Radius</StatTitle>
            <h2>{radius}</h2>
          </StatBox>
          <StatBox>
            <StatTitle>Average Temp.</StatTitle>
            <h2>{temperature}</h2>
          </StatBox>
        </StatsContainer>
      </Container>
    </Section>
  );
}
