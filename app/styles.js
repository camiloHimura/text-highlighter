import styled from 'styled-components'

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
export const GeneralStyle = styled.div`
h2{
  font: 16px;
}

div{
	box-sizing: border-box;
}

&.container{
  width: 90%;
  margin: 20px auto;
}

.--flex{
  display: flex;
}
.--flexBetween{
  justify-content: space-between;
}
.--flexEvenly{
  justify-content: space-evenly;
}
.--alignCenter{
  align-items: center;;
}

div.--clear-10{
  height: 10px;
}
div.--clear-20{
  height: 20px;
}
`