import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 18%;

    
    table{
        border-radius: 15px 15px 0px 0px;
        background: #4DFF94;
        width: 1100px;
        margin-top: 20px;
    }
    h1{
        color: #9D9D9D;
    }
    tbody{
        color: #9D9D9D;
        border: 0px ;
        background: #FFFFFF;
    }
    td{
        font-size: 13px;
        padding: 8px;
    }
    th{
        color: #FFFFFF;
    }
    thead{ 
        height: 50px;
    }
    #estado{
        border-radius: 9px;
        border: 1px solid #4DFF94;
        color: '#FFFFFF';
        padding: 5px;
    }
    .w-100{
        width: 100px;
    }
    .w-200{
        width: 200px;
    }

`

export const Table = styled.div`
    max-height: 320px;
    overflow-y: auto;
    margin-right: 5px;

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-button {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: #61ff7e;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #61ff7e;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #51cd6a;    
    }
    ::-webkit-scrollbar-track {
        background: #b3b3b3;
        border: 0px none #61ff7e;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #bfbfbf;
    }
    ::-webkit-scrollbar-track:active {
        background: #bdbdbd;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

`