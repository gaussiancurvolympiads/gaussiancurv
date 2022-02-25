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
                   <p> <h2 className="lead" align="center"><b>GC TEAM</b></h2> </p>
                    <br></br>
          <Row>    

                                   <Col lg={4} align="center">
               <Card className="nbcard">
                                <Card.Body>
                                   
                                    <Card.Text><ul align="left">
                                       <b>     <li class={darkMode? "text-secondary" : "text-light"}>Jimin Kim, Korea</li>   <li>Papon Lapate, Thailand</li> <li class={darkMode? "text-secondary" : "text-light"}>Valentino Iverson, Indonesia</li>  <li>Aritra Mondal, India</li> <li class={darkMode? "text-secondary" : "text-light"}>k12byda5h, Thailand</li><li>Kaixin Wang, Canada</li>

       

 <li class={darkMode? "text-secondary" : "text-light"}>EpicNumberTheory, India</li>

 <li>Orestis Lignos, Greece</li> <li class={darkMode? "text-secondary" : "text-light"}>Sunaina Pati, India</li> <li>sk_pi3145, USA</li>  <li class={darkMode? "text-secondary" : "text-light"}>Justin Lee, USA</li> <li>NJOY, India</li><li class={darkMode? "text-secondary" : "text-light"}>Atul Nadig, India</li><li>Bora Olmez, Switzerland</li>



 
</b>





                                          </ul></Card.Text>
                                </Card.Body></Card>
  </Col>
                                   <Col lg={4} align="center">
               <Card className="nbcard">
                                <Card.Body>
                                    
                                    <Card.Text><ul align="left">
                                              
<b>
 
<li class={darkMode? "text-secondary" : "text-light"}>Archit Manas, India</li>
<li> i3435, USA </li> 
 <li class={darkMode? "text-secondary" : "text-light"}>Andre Luis, Bolivia</li>
<li>Evan Chang, USA</li>
 <li class={darkMode? "text-secondary" : "text-light"}>GGHX, Singapore</li>
 <li>Anand, India</li>
 <li class={darkMode? "text-secondary" : "text-light"}>Vald Spataru, Romania</li>
<li>Arkan Manva, India</li>
<li class={darkMode? "text-secondary" : "text-light"}>Fedir Yudin, Ukraine</li>
<li>Sealsrock, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>ELectroWiz, USA</li>

<li >saadbd, Bangladesh</li>
<li class={darkMode? "text-secondary" : "text-light"}>Spiderduckpig, USA</li>

<li >Vedant Saini, India</li>





</b>

</ul></Card.Text>
</Card.Body></Card>
 </Col> 












<Col lg={4} align="center">
               <Card className="nbcard">
                                <Card.Body>
                                    
                                    <Card.Text><ul align="left">
                                              
<b>
 
<li class={darkMode? "text-secondary" : "text-light"}>Agaman Chatterjee, India</li>
 <li>Patrick Lu, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Anirrudha Sharma, India</li> 

<li>Hanna Chen, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Ramtin cheraghi nia, Iran</li>
<li>Sherlock, Iran</li>

<li class={darkMode? "text-secondary" : "text-light"}>Samarth, India</li>
<li> Emil Khalilov , Azerbaijan</li>


<li class={darkMode? "text-secondary" : "text-light"}>Ryan Shin, USA</li>
<li>Vivian Loh, USA</li>
<li class={darkMode? "text-secondary" : "text-light"}>Aryan-23, India</li>
<li>player_01, Unknown</li>
<li class={darkMode? "text-secondary" : "text-light"}>CyclicISLscelesTrapezoid, USA</li>





</b>

</ul></Card.Text>
</Card.Body></Card>
 </Col>










</Row> &nbsp;

      
 </Container>
      </Fade>
    </div>
  )
}

export default Team
