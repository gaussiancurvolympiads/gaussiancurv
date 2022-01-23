import { useState, React} from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function ControlledTabs() {
  const [key, setKey] = useState('home');
return (
<Tabs
 id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
>
  <Tab eventKey="home" title="Home">
   kimmy 
  </Tab>
  <Tab eventKey="profile" title="Profile">
    danpa
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
   bapa
  </Tab>
</Tabs>
);
}
<ControlledTabs />

 
const Team = ({ darkMode }) => {

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1800;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Fade>
        <Container align='center'>
     <br></br>
                    <h2 className="lead" align="center"><b>Gaussian Curvature Team</b></h2>
                    <br></br>
          <Row>    

                                   <Col lg={4} align="center">
               <Card className="nbcard">
                                <Card.Body>
                                   
                                    <Card.Text><ul align="left">
                                       <b>     <li class={darkMode? "text-secondary" : "text-light"}>MNJ2357, Korea</li>   <li>TLP.39, Thailand</li> <li class={darkMode? "text-secondary" : "text-light"}>IndoMathXDZ, Indonesia</li>  <li>Aritra12, India</li> <li class={darkMode? "text-secondary" : "text-light"}>k12byda5h, Thailand</li><li>CANBANKAN, Canada</li>

       

 <li class={darkMode? "text-secondary" : "text-light"}>EpicNumberTheory, India</li>

 <li>Orestis Lignos, Greece</li> <li class={darkMode? "text-secondary" : "text-light"}>Jelena, India</li> <li>sk_pi3145, USA</li>  <li class={darkMode? "text-secondary" : "text-light"}>Justin Lee, USA</li> <li>NJOY, India</li><li class={darkMode? "text-secondary" : "text-light"}>L567, India</li><li>Borao, Switzerland</li>

<li class={darkMode? "text-secondary" : "text-light"}>CyclicISLscelesTrapezoid, USA</li>
<li>Mindstormer, Ukraine</li>
<li class={darkMode? "text-secondary" : "text-light"}>Sealsrock, USA</li>
<li>ELectroWiz, USA</li>

<li class={darkMode? "text-secondary" : "text-light"}>saadbd, Bangladesh</li>
<li>Spiderduckpig, USA</li>

 
</b>





                                          </ul></Card.Text>
                                </Card.Body></Card>
  </Col>
                                   <Col lg={6} align="center">
               <Card className="nbcard">
                                <Card.Body>
                                    
                                    <Card.Text><ul align="left">
                                              
<b>
 
<li class={darkMode? "text-secondary" : "text-light"}>Starchan, India</li>
<li> i3435, USA </li> 
 <li class={darkMode? "text-secondary" : "text-light"}>MathLuis, Bolivia</li>
<li>Squareman, USA</li>
 <li class={darkMode? "text-secondary" : "text-light"}>GGHX, Singapore</li>
 <li>Jupiter_is_Big, India</li>
 <li class={darkMode? "text-secondary" : "text-light"}>oVlad, Romania</li>
<li>phoenixfire, India</li>
<li class={darkMode? "text-secondary" : "text-light"}>lneis1, India</li>
 <li>Awesome_Guy, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Anirrudha Sharma, India</li> 

<li>Mathicorn, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Ramtin cheraghi nia, Iran</li>
<li>Sherlock, Iran</li>

<li class={darkMode? "text-secondary" : "text-light"}>Amar_04, India</li>
<li>EmilXM, USA</li>


<li class={darkMode? "text-secondary" : "text-light"}>pog, USA</li>
<li>v4913, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Aryan-23, India</li>
<li>player_01, Unknown</li>





</b>

</ul></Card.Text>
</Card.Body></Card>
 </Col> </Row> &nbsp;

      
 </Container>
      </Fade>
    </div>
  )
}

export default Team
