   import styled from "styled-components";

   export const BoxContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top:10px;
   border: 20px, solid rgba(200, 200, 200, 0.0.);

 `;

 export const FormContainer = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 box-shadow: 0px 0px 2.5px rgba(15,15,15,0.19)
 `;


 export const MutedLink = styled.a`
 font-size: 13px;
 color: rgba(200, 200, 200, 0.8);
 font-weight: 500;
 text-decoration: none;
 padding: 10px;
 cursor:pointer;
 outline: none;
 textAlign: center;
 `;

 export const Marginer = styled.a`
 border: 1px solid rgba (1,0,0,0.05);
 color: "#20232a"
 `;

 export const BoldLink= styled.a`
 font-size: 12px;
 color: rgb(2,0,36);
 font-weight: 500;
 text-decoration: none;
 `;

 export const Input = styled.input`
width: 100%;
height: 42px;
outline: none;
border: 20px, solid rgba(200, 200, 200, 0.0.3);
padding:  10px;
border-bottom: 1.8px solid trasnparent;
transition: all 200ms ease-in-out;
font-size: 13px;

&:: placeholder{
    color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type){
    border-bottom: 1.4px ,solid  rgba(200, 200, 200, 0.4);  
}
&:focus {
    outline:none;
    border-bottom: 2px ,solid rgba(200, 200, 200 ,0.8);
}
`;

export const SumitButton = styled.button`
width: 90% 
padding: 11px 40%;
color: #fff;
font-size: 15px;

font-weight: 600;
border:none;
border-radius: 100px;
cursor:pointer;
transition: all, 240ms ease-in-out;
background:  rgb(2,0,36);
background: linear-gradient(
    90deg,
     rgba(2,0,36,1) 0%,
      rgba(228,48,21,0.9363095580028886) 28%, 
      rgba(0,212,255,1) 100%);
 &:hover {
     filter:brightness(1.03);
 }     
`;








