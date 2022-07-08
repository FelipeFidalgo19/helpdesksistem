import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 650px;
`

export const Content = styled.div`
    padding-top: 80px;
    margin-left: 18%;
    margin-right: 15px;
`

export const Cadastro = styled.div`

    border: 1px solid #4DFF94;
    padding: 10px;
    background: #FFFFFF;
    width: 800px;
    height: 535px;
    border-radius: 8px;

    p,h1,label{
        color: #4DFF94;
    }
    input,select{
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #4DFF94;
    }
    select{
        color: #4DFF94;
    }
  
    .nome{
        width: 350px;
    }
  
    input::placeholder{
        color: #4DFF94;
        opacity: 0.5;
    }

`