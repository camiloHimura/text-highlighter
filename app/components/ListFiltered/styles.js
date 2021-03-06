import styled from 'styled-components'


export const Container = styled.div`
  height: 20vh;
  padding: 6px;
  overflow: auto;
  border: 1px solid black;
  
  & > div{
    width: fit-content;
    padding: 2px 10px;
    margin-bottom: 6px;
    position: relative;
    transition: all .2s;
    overflow: hidden;
    
    &:hover{
      padding-left: 34px;
    
      & .close{
        transform: translateX(6px)
      }
    }
  }
`;

export const Close = styled.button`
  top: 50%;
  left: 0px;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  color: white;
  margin-top: -10px;
  position: absolute;
  background: black;
  transition: all .2s;
  transform: translateX(-20px)
`
