import styled from 'styled-components';

export const Container = styled.div`
    background: #080038;
    width: 17%;
    min-height: 100%;
    display: flex;
    position: absolute;
    left: 0px;
    color: #80D1CD;
`
export const Perfil = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    img{
        width: 35px;
        height: 35px;
        margin: 3px ;
        border: 2px solid #4DFF94;
        border-radius: 50%;

        &:hover{
            opacity: 0.7;
            cursor: pointer;
        }
    }
`
export const PerfilArea = styled.div`
    justify-content: space-around;
    display: flex;
    margin-left: 5px;
    
    button {
        background: none;
        border: none;
        font-size: 17px;
        color: #80D1CD;
        height: 20px;
    }
    span{
        flex-direction: row;
        padding: 2px;
        height: 18px;
        &:hover{
            transform: 2s;
            background: #80D1CD;
            border-radius: 5px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    #iconStatus{
        width: 5px;
        height: 5px;
        display: flex;
        border-radius: 5px;
        margin: 8px 0px 20px 0px;
        background: ${props => props.on ? '#4DFF94'  : '#FF4D57'};
    }

            
 

`
export const PerNome = styled.div`
    p{
        flex-direction: row;
        margin: 4px 0px 0px 10px;
        font-weight: bold;
    }
`
export const Content = styled.div`

`

export const MenuBody = styled.div`
    width: 100%;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    color:  ${props => props.actived ? '#80D1CD'  : '#FFFFFF'};

    img{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        margin-top: 10px;
    }
    p{
        border-bottom: 1px solid #FFF;
        padding-bottom: 5px;
        font-size: 17px;
        height: 12px;
        width: 70%;
        margin-bottom: 10px;
    }

    &:hover{
        color: #80D1CD;
        cursor: pointer;
        transition: 0.2s;
    }

`
export const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`
