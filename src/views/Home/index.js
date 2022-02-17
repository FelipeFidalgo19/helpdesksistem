import React,{useState,useEffect} from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import TabelaHome from '../../components/TabelaHome';

import api from '../../services/api';

import imgFun from '../../assets/imgFuncionarios.png';
import imgDep from '../../assets/imgDepartamentos.png';
import imgCli from '../../assets/imgClientes.png';
import imgTick from '../../assets/imgTicket.png';

function Home() {

  const [nomeUsuario,setNomeUsuario] = useState([]);

  async function sendUsu(){
    await api.get('/user/senduser/3')
      .then(response => {
        setNomeUsuario(response.data);
      });
    }
    
  useEffect(() => {
      console.log("nomeUsuario");
  },[nomeUsuario]);

  return (
    <S.Container>
      <Header countNotification={3} />
      <Menu 
      userName={nomeUsuario.nome}
      cargo={"Cargo"} 
      />
      <S.Content>
        <Card img={imgFun} color={"#4DD4FF"} titulo={"Funcionarios"} descricao={"Total de Funcionarios"}/>
        <Card img={imgDep} color={"#4DFF94"} titulo={"Departamentos"} descricao={"Total de Departamentos"}/>
        <Card img={imgCli} color={"#FF4D57"} titulo={"Clientes"} descricao={"Total de Clientes"}/>
        <Card img={imgTick} color={"#FFD84D"} titulo={"Tickets"} descricao={"Total de Tickets"}/>
      </S.Content>

      <TabelaHome />
    </S.Container>
  );
}

export default Home;
