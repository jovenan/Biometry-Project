import styled from "styled-components"

export const header = styled.header`    
    margin-bottom: 100px;
    
    #header-menu{
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        height: 80px;
        border-bottom: 1px solid #1351b4;
        box-shadow: 0 0 20px 0 #1351b4;
    }
    #header-menu #first{
        margin-left: 10%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #header-menu #first #btn-menu{
        height: 35px;
        width: 40px;
        background-color: #1351b4;
        color: #fff;
        border-radius: 5px;    
        display: flex;
        align-items: center;
    }
    #header-menu #first #btn-menu #lines{
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #header-menu #first #btn-menu #lines div{
        border-top: 2px solid #fff;
        height: 0px;
        width: 80%;
    }

    #header-menu #second{
        display: flex;
        align-items: center;
        margin-right: 50px;
    }
    #header-menu #second #dados-cliente{
        display: flex;
        align-items: center;
        justify-content: space-between;    
        width: 150px;
        margin-right: 30px;
    }
    #header-menu #second #dados-cliente img{
        width: 30%;
    }
    #header-menu #second #btn-logout button{
        width: 40px;        
        background: transparent;
        border: none;
    }
    #header-menu #second #btn-logout img{
        width: 100%;
    }
`

export const main = styled.main`
    #saudacoes h2{    
        margin: 60px auto 0;
        width: 80%;
        text-transform: uppercase;
        color: #1351b4;
    }
    #saudacoes h2 i{
        color: #000;
    }

    .sub-menu{    
        background-color: #f2f2f2;
        width: 80%;
        height: 400px;
        margin: 2px auto 100px;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }
    .sub-menu .sub-menu-item a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sub-menu .sub-menu-item a button{
        background-color: #fff;
        color: #1351b4;
        border:1px solid #1351b4;
        width: 90%;
        height: 80%;
        text-transform: uppercase;
        font-size: 25px;
    }
    .sub-menu .sub-menu-item a button:hover{
        background-color: #1351b4;
        color: #fff;
    }
`

export const footer = styled.footer`    
    width: 80%;
    margin: 0 auto;
    
    footer .banner{
        height: calc(100%*(346/1109));
    }
    footer .banner img{
        width: 100%;
    }
`