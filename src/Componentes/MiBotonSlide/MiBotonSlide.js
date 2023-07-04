import React ,{useState} from 'react';
import styled from 'styled-components';

const MiBotonSlide = ( {toggleTheme} ) => { 
 

  const [valor,setValor]=useState('on')

 
  const manejadorOnOff=(e)=>{   
      setValor(valor==='on' ? 'off'  :'on')
   
      toggleTheme()
  }

  return (
    <ContenedorBoton>
      <BotonCentro   valor={valor}  onClick={manejadorOnOff} />  
    </ContenedorBoton>
  )
}


export default MiBotonSlide

const ContenedorBoton=styled.div`
    display:flex;
    position:relative;
    width: 100px;
    height:40px;
    margin-left:200px;
    background-color:   ${( {theme} ) => theme.fondo4};
    border-radius:30px;
    align-items:center;
 `
const BotonCentro=styled.button`
  
    width:30px;
    height:30px;
    border:none;
    background: ${ ( {theme}  )=> theme.bg};
 
    position:absolute;
  
    left:${props=>props.valor==='on'? '5px' : '65px'};
    border-radius:50%;
    cursor:pointer;

    &:hover{
     
        background-color: ${( {theme} ) => theme.resaltado};
      
    }
 `
