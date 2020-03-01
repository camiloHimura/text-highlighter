import styled from 'styled-components'

export const Container = styled.div`
  width: 60px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 2px;
  transition: all .2s;
  border: 1px solid black;
  
  &.selected{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`


export const Title = styled.h2`  
  margin-left: 20px;
`

