import { useState, React } from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/soap.png';
import helloDark from '../components/soap.png';
import helloLight1 from '../components/jim.png';
import helloDark1 from '../components/jim.png';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';
import Alert from 'react-bootstrap/Alert';
import { Mdark } from './stylee';
 function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="dark" onClose={() => setShow(false)} dismissible>
        <Alert.Heading></Alert.Heading>
        <p>
         
        </p>
      </Alert>
    );
  }
  return <Button variant="dark" onClick={() => setShow(true)}>Click To Know The Latest Announcements!</Button>;
}


const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
             <br></br>
                    <h4 className="lead" align="center"><b>Past Year Papers and Sample Questions</b></h4>
                    <br></br>
                    <Row>
                      <Col lg={6}>
                     <Card className="skill-nbcard">
                       <Card.Img variant="top" src={darkMode ? helloDark : helloLight} width="450"/>
                     <Card.Header><div class={darkMode ? "lead" : "lead"}>MMO 2021 Day 1</div></Card.Header>
                                <Card.Body>
                                              
                                    <Card.Text align="left">
                                                   
                                       <a  href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" target="_blank" rel="noreferrer noopener"> 
                                            <br/> <Mdark  align="left">Download</Mdark>  </a>&nbsp;&nbsp; </Card.Text>
 
                                </Card.Body>

                            </Card></Col>
 <Col lg={6}>
                            <Card className="skill-nbcard">
                              <Card.Img variant="top" src={darkMode ? helloDark1 : helloLight1} width="400"/>
                           <Card.Header><div class={darkMode ? "lead" : "lead"}>MMO 2020 Day 2</div></Card.Header>
                                <Card.Body >
                                      
                                      
                                      <Card.Text align="left">
                                             
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" target="_blank" rel="noreferrer noopener">
                                        <br/>
                                            <Mdark  align="left">Download</Mdark> 
                                        </a>&nbsp;&nbsp;</Card.Text>
                                </Card.Body>

                             </Card></Col>  
                    </Row>


                    <br></br>
<AlertDismissibleExample />
  
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
