import styled from 'styled-components';

interface PlayerShape {
  name: string;
  age: number;
}

const SayHello = (
  playerObj: PlayerShape //SayHello Object 선언!!!
) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

SayHello({ name: 'jini', age: 30 }); //SayHello function
SayHello({ name: 'rararu', age: 1 }); //SayHello function

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// const CircleProps = ( bgColor:string ) => <div>{bgcolor}</div>;
interface CircleProps {
  bgColor: string;
}

//App의 Circle component는, bgColor를 받아서, Container에 보내고 있다.
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
//Container는 div이므로, 어떤 props(bgColor)도 받고 있지 않다!
//따라서, TypeScript에게 bgColor를 styled-component에게도 보내고 싶다고 코드작성이 필요함!!!

export default Circle;
