
import {useState} from 'react'
import Home from "./components/Home";
import Match from './components/Match/Match'
import {url} from './components/constants/url'
import axios from "axios";
import styled from 'styled-components';


const Body = styled.div`
  border: 1px solid;
  width: 50vw;
  height: 80vh;
  margin: 0 auto;
  align-items:center;
  background-color: #fefbf3;
`;


export default function App() {
  const [pagina, setPagina] = useState('home')
  
  const mudanca = (pagina)=> {setPagina(pagina)}

  const escolha = ()=>{
    switch (pagina){
      case 'home':
        return <Home mudar={mudanca} />;
      case 'match':
        return <Match mudar={mudanca}/>;
        default:
          return <Home mudar={mudanca}/>
    }
  }

const limpa = ()=>{
  const urlLimpa = `${url}/clear`
  axios.put(urlLimpa)
  .then((res)=>{
    setPagina('home')
    alert('Lipeza efetuada!')
  })
  .catch((err)=>{
    console.log(err.response)
    // alert(err.response)
  })
}

  return (
    <div>
    <Body>
      {escolha()}
    
    </Body>
    <button onClick={()=>{limpa()}}>Limpar cachê</button>
    </div>
  );
}
