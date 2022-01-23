import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

 
const Footer = ({ darkMode }) => {
    return (
        <div>
            <hr/>
 
      <Container>
       <Row className="footer-text">  
      <Column>
           
           
             Copyright &copy; 2021 GC 
               
       
          </Column>  
          <Column>
           <Heading><h5>Info</h5></Heading>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Articles</FooterLink>
            <FooterLink href="#">Contests</FooterLink>
          </Column>
          <Column>
            <Heading><h5>Place</h5></Heading>
            <FooterLink href="#">Articles</FooterLink>
            <FooterLink href="#">Problem Sets</FooterLink>
            <FooterLink href="#">Past Papers</FooterLink>
           
          </Column>
          <Column>
            <Heading><h5>Interact</h5></Heading>
            <FooterLink href="#">Contact Form</FooterLink>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Discord</FooterLink>
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

