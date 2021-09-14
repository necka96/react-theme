import React from 'react';
import styled from 'styled-components';
const MenuStyled = styled.nav`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
place-items: center;
grid-template-rows: masonry;
height: 10vh;
.buttons{
  border-top: 2px solid var(--border);
 background: var(--btn-color);
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 background: var(--bg-menu);
 border-radius: 20px;
 box-shadow: 10px 5px 15px rgba(0,0,0,0.2);
 .button{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-1);
   &:not(:last-child){
    margin-right: 1rem;
   }
   .circle{
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    margin-right: 0.2rem;
    display: flex;
    place-items: center;
   }
  .light{
    background: #fff;
    border: 2px solid #000;
  }
  .dark{
    background: #000;
    border: 2px solid #fff;
  }
  .green{
    background:green;
    border:  2px solid yellow;
  }
  .blue{
    background: blue;
    border:  2px solid red;
  }
 }
}
`
function Menu({setTheme}) {
 
 return (
  <MenuStyled>
   <div className="buttons">
   <div className="button" onClick={()=> setTheme("light")}>
   <div className="circle light" >
   </div>
    Light
   </div>
    <div className="button" onClick={()=> setTheme("dark")}>
   <div className="circle dark">
   </div>
    Dark
   </div>
    <div className="button" onClick={()=> setTheme("green")}>
   <div className="circle green">
   </div>
    Green
   </div>
    <div className="button" onClick={()=> setTheme("blue")} >
   <div className="circle blue" >
   </div>
    Blue
   </div>
   </div>
  </MenuStyled>
 )
}

export default Menu
