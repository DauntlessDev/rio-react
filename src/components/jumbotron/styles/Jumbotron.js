import styled from 'styled-components/macro';


export const Item = styled.div`
    display: flex;
    border-bottom: 5px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    flex-direction: ${({ direction }) => direction};
    margin: auto;
    width: 100%;

    @media (max-width: 1080px){
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px){
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px){
        font-size: 25px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px){
        font-size: 18px;
    }

`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;

    
    @media (max-width: 900px){
        max-height: 400px;
    }

    
    @media (max-width: 600px){
        max-height: 270px;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2{
            margin-bottom: 50px;
        }
    }
`;