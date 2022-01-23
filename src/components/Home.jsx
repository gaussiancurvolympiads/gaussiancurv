import { React } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from "../components/particles";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { AttentionSeeker } from 'react-awesome-reveal';
import { MagicalButton, Flex, Mdark } from './stylee';

const Home = ({ darkMode }) => {
 


    return (
        <div>
            <AttentionSeeker effect="pulse">
                <Row>  <Particles />
  
                    <Col lg={12} xs={12}>
     
                        <h2 className="display-3 hello" align="center"><b>  Gaussian Curvature </b> </h2>
                        <h2 className="lead" align="center">
                            <span
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[ " MetriX Mathematical Olympiad", " Is An IMO-Type Contest", " Held Online", "Every Year" ]'>
                                 <br></br>
                            </span>
                        </h2>
                 </Col>   
                </Row>

              
<Container align="center"><Col lg={15} align="center">
<div align="center" class="text-secondary" >  
<div align="center" class="lead">
  
            <h5 align="center"> GIMO 2022 is our next contest, so stay tuned. </h5> </div> 
           
</div>
 
              </Col> 
  </Container>
 </AttentionSeeker>
         

            <br></br>
           
      <Container align='left'> <Row>
            <Col lg={15} align='left'>
          <Card className="skill-nbcard">
                <Card.Header><div class= "lead" >About Us</div></Card.Header>
                                <Card.Body>
                                   
                                    <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>The Gaussian Curvature team consists of Math Olympiad students who enjoy Mathematics to a great extent. We aim to help others discover their love for Mathematics beyond the school syllabus, and to develop their passion for problem-solving. Through our training materials and contests, we hope to help those who have a keen interest in Math Olympiad excel.
<br></br>
<br></br>   <Flex>
       {darkMode? <MagicalButton href="">Details</MagicalButton> : <Mdark href="">About Us</Mdark> }
       {darkMode? <MagicalButton>Welcome</MagicalButton> : <Mdark>Welcome</Mdark> }
      </Flex> </Card.Text>
                                </Card.Body></Card>
            </Col>
 
            </Row>    </Container> &nbsp;   
        </div>
    )
}

export default Home
