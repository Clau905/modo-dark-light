import React, { useState } from 'react';
import MiBotonSlide from './Componentes/MiBotonSlide/MiBotonSlide';
import styled from 'styled-components';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { ThemeProvider } from 'styled-components';
import { light } from './Componentes/Temas/Temas'
import { dark } from './Componentes/Temas/Temas'



//
const App = () => {

  const  [theme,setTheme]  =useState(light)
  const isDark= (theme.nombre === 'dark')

  const  toggleTheme =()=>{
     
    setTheme(isDark ? light :  dark )
  
  }



  const funcionDelOnOff=(e)=>{

  }
  return (
    <>

      < ThemeProvider theme={theme} toggleTheme={toggleTheme}>
    
            <ContenedorApp  toggleTheme={toggleTheme}>
              
                <Comph3><BsFillBrightnessHighFill/></Comph3> 
                <Comph2>    I'am </Comph2>
                <Comph1 >Clau905 {isDark?' Dark ': ' Light '}</Comph1>
                <MiBotonSlide  toggleTheme={toggleTheme} />
             
            </ContenedorApp>
        
        </ThemeProvider>
      
    </>

  );
};

export default App;


const ContenedorApp=styled.div`

  font-family:Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width:1600px;
  height:1600px;
  display:block;
  margin:0;
  padding:0;
  
  background-color:${props=>props.theme.fondo1};

 

`

const Comph2=styled.h2`
display :block;
color:${({theme})=>theme.h2color};
padding-left:200px;
`
const Comph1=styled.h1`
display :block;
padding-left:200px;

color:${({theme})=>theme.h1color};


`
const Comph3=styled.h3`
padding-left:200px;
padding-top:100px;
svg{font-size:80px};
color:${({theme})=>theme.svgcolor}


`