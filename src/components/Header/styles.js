import styled from 'styled-components';

export const Container = styled.div`
    background: #080038;
    width: 85%;
    height: 45px;
    display: flex;
    position: absolute;
    right: 0px;

    border-bottom: 3px solid #3AE8B1;

`
export const RightSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img{
        margin-right: 20px;
        width: 30px;
        height: 30px;
        &:hover{
            opacity: 0.7;
            transition: 0.2s;
            cursor: pointer;
        }
    }
    span{
        font-size: 12px;
        font-weight: bold;
        color: #080038;
        background: #FFFFFF;
        padding: 4px 5px;
        border-radius: 50%;
        position: relative;
        top: -8px;
        right: 30px;
    }

`
export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`