import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border-bottom: 8px solid #222; */
  text-align: center;
  padding: 100px 70px;
  margin: 0 20px;


  @media (max-width: 800px) {
    padding: 150px 20px;
  }
  
  @media (max-width: 600px) {
    padding: 120px 15px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 60px;
  font-weight: bold;
  margin: auto;
  
  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 1000px) {
    max-width: 450px;
  }
  
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;