import styled from 'styled-components'


export const Triangle = styled.span`
  width: 0;
  height: 0;
  cursor: pointer;
  margin-left: 10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 14px solid #555;
  transition: all .2s;

  &.rotate{
    transform: rotate(180deg);
  }
}
`;
