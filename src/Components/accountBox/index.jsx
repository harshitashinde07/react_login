
import React, {useState} from "react";
import  styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";


const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
margin-top: 65px;
`;

const TopContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -280;
left: -90px;
background:  rgb(2,0,36);
background: linear-gradient(
    90deg,
     rgba(2,0,36,1) 0%,
      rgba(228,48,21,0.9363095580028886) 28%, 
      rgba(0,212,255,1) 100%);
`;

const HeaderContainer =styled.div`
width:100;
display: flex;
flex-direction: column;

`;

const HeaderText = styled.h2`
font-size: 30px;
font-weight: 600;
line-weight: 0.9;
color:#fff;
z-index: 7;
margin: 2;


`;

const SmallText = styled.div`
color: #fff;
font-weight:500;
font-size: 20px;
z-index: 5;
margin:0;
margin-bottom: 60px;

`;

const InnerContainer = styled.div`
width:100;
display: flex;
flex-direction: column;
padding: 0 1.8em;

`;

const backdropVariants ={
    expanded: {
        width:"233%",
        height: "1050px",
        borderRadius: "20%",
        trasform: "rotate(-180deg)"
        
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(20deg)"
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness:30,

};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
       
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToSignup , switchToSignin};

    return (
    <AccountContext.Provider value= {contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop 
            initial={false} 
            animate={isExpanded ? "expanded" : "collapsed"}
             variants={backdropVariants}  
             transition= {expandingTransition} />
             {active === "signin" && <HeaderContainer>
                <HeaderText>Welcome Back</HeaderText>
                 <SmallText>Sign-in !!!</SmallText>
             </HeaderContainer> }
             
             {active === "signup" && <HeaderContainer>
   <HeaderText>Create Account</HeaderText>
    <SmallText>Sign-up !!!</SmallText>
</HeaderContainer> }

        </TopContainer>
        <InnerContainer>
           {active === "signin" && <LoginForm />}
           {active === "signup" && <SignupForm />}
            
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>

    )
}