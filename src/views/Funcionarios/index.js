import React,{useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import api from '../../services/api';


function Funcionarios() {

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
      <Menu userName={nomeUsuario.nome} cargo={"Cargo"} />
      <S.Content>
        <S.Cadastro>
          <p>dasdas</p>
        </S.Cadastro>
      </S.Content>
    </S.Container>
  );
}

export default Funcionarios;
