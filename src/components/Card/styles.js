import styled from 'styled-components';

export const Container = styled.div`
    background: ${prop => prop.color};
    border-radius: 25px;
    width: 250px;
    color: #FFFFFF;
    height: 180px;

    p{
        font-size: 25px;
        margin-top: 0px;
        margin-left: 20px;
        border-bottom: 2px solid #FFFFFF;
        width: 200px;
    }

    span{
        position: relative;
        margin-left: 20px;
        bottom: 20px;
    }


    img{
        width: 85px;
        height: 85px;
        margin: 20px 0px 0px 20px;
    }

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
        cursor: pointer;
    }

`