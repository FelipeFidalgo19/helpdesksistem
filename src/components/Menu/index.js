import React, {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';

import * as S from './styles';

import Perfil from '../../assets/perfil.png';
import Gerenciamento from '../../assets/iconGerenciamento.png';
import Funcionarios from '../../assets/iconFuncionarios.png';
import Departamento from '../../assets/iconDepartamento.png';
import Ticket from '../../assets/iconTicket.png';
import Cliente from '../../assets/iconCliente.png';
import Configuracoes from '../../assets/iconConfiguracoes.png';

function Menu( { userName , cargo } ) {
  const [actived,setActived ] = useState("");
  const [statusSuporte, setStatusSuporte] = useState(false);

  return (
    <S.Container>
      <S.Cont>
        <S.Perfil>
            <img src={Perfil} alt="Perfil"/>
            <S.Content>
              <S.PerNome>
                  <p>{userName}</p>
              </S.PerNome>
              <S.PerfilArea on={statusSuporte}>
                  <span>{cargo}</span>
                  <button onClick={() => setStatusSuporte(!statusSuporte)}>
                    <span >{statusSuporte ? "Online" : "Offline"}</span>
                  </button>
                    <span id="iconStatus"></span>
              </S.PerfilArea>
            </S.Content>
        </S.Perfil>

        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <S.MenuBody actived={actived === "Gerenciamento"} onClick={() => setActived("Gerenciamento")}>
            <img src={Gerenciamento} alt="Icon Gerenciamento"/>
            <p>Gerenciamento</p>
          </S.MenuBody>
        </Link>

        <Link to={`/funcionarios`} style={{ textDecoration: 'none' }}>
          <S.MenuBody actived={actived === "Funcionarios"} onClick={() => setActived("Funcionarios")}>
            <img src={Funcionarios} alt="Icon Funcionarios"/>
            <p>Funcionarios</p>
          </S.MenuBody>
        </Link>

        <Link to={`/departamento`} style={{ textDecoration: 'none' }}>
          <S.MenuBody actived={actived === "Departamento"} onClick={() => setActived("Departamento")}>
            <img src={Departamento} alt="Icon Departamento"/>
            <p>Departamento</p>
          </S.MenuBody>
        </Link>


        <S.MenuBody actived={actived === "Cliente"} onClick={() => setActived("Cliente")}>
          <img src={Cliente} alt="Icon Cliente"/>
          <p>Cliente</p>
        </S.MenuBody>
        <S.MenuBody actived={actived === "Ticket"} onClick={() => setActived("Ticket")}>
          <img src={Ticket} alt="Icon Ticket"/>
          <p>Ticket</p>
        </S.MenuBody>
        <S.MenuBody actived={actived === "Configuracoes"} onClick={() => setActived("Configuracoes")}>
          <img src={Configuracoes} alt="Icon Configuracoes"/>
          <p>Configuracoes</p>
        </S.MenuBody>
      </S.Cont>
    </S.Container>
  );
}

export default Menu;
