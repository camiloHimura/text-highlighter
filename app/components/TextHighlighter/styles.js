import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  padding: 6px;
  height: 40vh;
  border: 1px solid black;

& > textarea, & > div{
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 16px;
  font-family: Times;
}

&.red textarea::selection{
  background-color: red;
}
&.yellow textarea::selection{
  background-color: yellow;
}
&.green textarea::selection{
  background-color: green;
}
`;
