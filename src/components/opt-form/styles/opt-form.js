import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
        

    @media (max-width:600px){
        flex-direction: column;
        align-items: center;
    }
`;
export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 3px 10px;
    height: 60px;
    box-sizing: border-box;

    @media (max-width: 600px){
        height: 45px;
    }
`;
export const Button = styled.button`
    display:flex;
    align-items:center;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover{
        background: #f40612;
    }

    
    img{
        margin-left: 10px;
        filter: brightness(0) invert(1);
        height: 20px;

    }
    
    @media (max-width: 1000px){
        font-size: 17px;
        padding: 0 10px;

        img{   
            margin: 0px 4px;
            height: 15px;
         }
    }
    
    @media (max-width: 703px){
        margin-top: 15px;
        font-size: 16px;
        padding: 0 12px;

        img{   
            margin: 0px 4px;
            height: 20px;
         }
    }



    @media (max-width: 600px){
        height: 37px;
        font-size: 15px;
        padding: 0 10px;
        margin-top: 20px;

        img{   
            margin: 0px 4px;
            height: 10px;
         }
    }


`;
export const Text = styled.p`
    font-size: 19.2px;  
    color:white;
    text-align:center;
    width: 100%;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`;