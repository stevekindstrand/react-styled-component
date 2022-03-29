import styled, { keyframes } from "styled-components";

const Container = styled.div`
  border: 1px solid grey;
  margin: 1em;
  padding: 3em;
`;

const Heading = styled.h1`
  font-size: 1.75em;
  color: pink;
`;

// Modified Heading
const ModifiedHeading = styled(Heading)`
  color: green;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  &:hover {
    background-color: purple;
    color: white;
  }
`;

// attrs
const Input = styled.input.attrs((props) => ({
  type: "text",

  size: props.size || "1em",
}))`
  color: pink;
  font-size: 1em;
  border: 2px solid pink;
  border-radius: 10px;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// animation
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Animation = styled.div`
    animation: ${rotate} 2s linear infinite;
    padding: 2rem;
`;

export function Parent() {
  return (
    <Container>
      <Heading>Detta är min rubrik</Heading>
      <ModifiedHeading>Detta är min modifierade rubrik</ModifiedHeading>
      <Button color="orange">My button</Button>
      <br />
      <Input placeholder="1 em" />
      <Input placeholder="2 em" size="2em" />
      <Animation>Jag roterar</Animation>
    </Container>
  );
}
