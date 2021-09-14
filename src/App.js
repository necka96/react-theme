import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const AppStyled = styled.div`
width: 100%;
height: 50vh;
 header{
   width: 100%;
   height: 100%;
   background: var(--bg-header);
   /* clip-path: polygon(0 0, 100% 0, 100% 64%, 54% 100%, 0 64%); */
   h2{
     text-align: center;
     margin-top: 4rem;
    font-size: 5rem;
    color: var(--bg-body);
    text-transform: uppercase;
    letter-spacing: 20px;
   }
 }
 section{
   width: 100%;
   height: 50vh;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
   grid-gap: 40px;
   transition: 1s;
 .heart{
   margin: 50px;
   background: var(--bg-header);
   width: 100px;
   height: 100px;
   position: relative;
   place-self: center;
   transform: rotate(-45deg);
   
   animation: animation 5s ease-in-out infinite;
   &::after, &::before{
     position: absolute;
     content: "";
     width: 100px;
     height: 100px;
     border-radius: 50%;
     background: var(--bg-header);
   }
    &::after{
      left: 0;
      top: -44px;
    }
      &::before{
      top: 0;
      right: -44px;
    }
 }
 @keyframes animation {
   50%{
     transform: scale(1.2) rotate(-45deg);
   }
 }
 }
`
function App() {
  const[theme, setTheme] = useState("light");
 useEffect(()=>{
  document.documentElement.classList = theme
 },[theme])
  return (
    <AppStyled>
    <header>
    <Menu setTheme={setTheme}/>
    <h2>hearts</h2>
    </header>
    <section>
    <div className="heart"></div>
    <div className="heart"></div>
    <div className="heart"></div>
    
    </section>
    </AppStyled>
  );
}

export default App;
