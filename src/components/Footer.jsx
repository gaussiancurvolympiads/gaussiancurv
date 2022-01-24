import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import helloLight from '../components/images/GC image.png';
 import helloDark from '../components/images/GC image.png';


const Footer = ({ darkMode }) => {
    return (
        <div>
            <hr/>
 
      <Container>
       <Row className="footer-text">  
      <Column>
           img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" />
            <p>Copyright &copy; 2021 GC </p>
               
       
          </Column>  
          <Column>
           <Heading><h5>Info</h5></Heading>
            <FooterLink href="https://gcurvature.vercel.app/about">About</FooterLink>
            <FooterLink href="https://gcurvature.vercel.app/">Articles</FooterLink>
            <FooterLink href="https://gcurvature.vercel.app/mmo2020">Contests</FooterLink>
          </Column>
          <Column>
            <Heading><h5>Place</h5></Heading>
            <FooterLink href="https://gcurvature.vercel.app/">Fun Events</FooterLink>
            <FooterLink href="https://gcurvature.vercel.app/mmo2020">Problem Sets</FooterLink>
            <FooterLink href="https://gcurvature.vercel.app/mmo2020">Past Papers</FooterLink>
           
          </Column>
          <Column>
            <Heading><h5>Interact</h5></Heading>
            <FooterLink href="https://gcurvature.vercel.app/contact">Contact Form</FooterLink>
            <FooterLink href="gaussiancurv180@gmail.com">Email</FooterLink>
            <FooterLink href="https://discord.gg/yTKuF9GUtP">Discord</FooterLink>
          </Column>
                
        </Row>
      
      </Container>
<br/><br/><br/>
  );
};
        </div>
    )
}

export default Footer

