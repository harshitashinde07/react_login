import React from "react";
import { useContext } from "react";
import { AccountContext } from "./accountContext";
import { 
  BoxContainer, 
  FormContainer,
   Input,  
   MutedLink, 
   SumitButton ,
   BoldLink
   } 
from "./common";

import { Marginer } from "./common";




export function LoginForm(props) {

  const { switchToSignup } = useContext(AccountContext);

  return <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      </FormContainer>
       <Marginer  direction="vertical" margin={5} />
       <MutedLink herf="#">Forget Password</MutedLink>  
      <Marginer  direction="vertical" margin="1.6em" />
      <SumitButton type="submit">Sign In</SumitButton>
       <Marginer  direction="vertical" margin="1em" />
      <MutedLink herf="#">Don't have an account? <BoldLink herf="#" onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>

  </BoxContainer>


}