import { Container, Number, Text } from './buttonStyles';

export default function OptionButton({ name, number, setContent }) {
  return (
    <Container onClick={() => setContent(name)}>
      <Number>{number}</Number>
      <Text>{name}</Text>
    </Container>
  );
}
