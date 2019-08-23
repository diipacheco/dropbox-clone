import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');    
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100%;
`;

export const Content = styled.div`
   background: #61082B;
   header {
     display: flex;
     justify-content: space-around;
     align-items: center;
     text-align: center;
     flex-direction: row;
     width: 100%;
     min-width: 350px;
     height: 70px;

      img {
        max-height: 45px;
      }

        h1 {
          font-size: 16px;
          color: white;
          font-weight: lighter;
          margin-top: 19px;
          cursor: pointer;
          transition: 0.2s;
          &:hover{
            color: #B4D0E7;
            
         }
      }   
   }

   section {
     display: flex;
     height: 450px;
     flex-wrap: wrap;
     justify-content: center;
     color: #B4D0E7;
     padding: 0 110px;
     align-items: center; 
     text-align: left;
    
        article{
          font-size: 55px;
          font-family: 'Varela Round', sans-serif;
        }
   }
`;

export const FormSection = styled.div`
    padding: 0 45px;
       
    header {
      width: 100%; 
      height: 70px;
      text-align: right;  
  
      
    h1 {
        color: #292929;
        font-weight: normal;
        font-size: 16px;
        margin-top: 27px;
        margin-right: 34px;
             
    }
    
  }
  
form{
     display: flex;
     flex-direction: column;
      
    section {
      
      h1{
       color: #000;
       font-weight: bold;
     }      
 }

 input{
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
  padding-left: 18px;
  height: 44px;
  & + input{
    margin-top: 15px;
  }
 }

 button{
  border: none;
  font-size: 15px;
  background-color: #0061ff;
  height: 44px;
  margin-top: 15px;
  color: #fff;
  cursor: pointer;
  padding: 0 30px;
  &:hover{
    opacity: 0.8;
  }
 }
}
`;
