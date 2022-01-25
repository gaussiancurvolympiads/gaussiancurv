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
const About = ({ darkMode }) => {




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
          <Row>
            <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                           
                    <Card.Header><div class= "lead"><h5>GC Establishment </h5></div></Card.Header>      <Card.Body> 
                     <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>This will be relatively short otherwise, the details might bore you. <b className="footer-text">Gaussian Curvature</b> was founded by <b className="footer-text">me (Aritra Mondal, Aritra12)</b> during the beginning of the Corona Virus pandemic in the <b className="footer-text">December of 2020</b> when everything was being shifted online. This implicates that GC is now <b className="footer-text">over a year old</b>. Someday I (Aritra) will say more about it, but for now, this should suffice.
<br></br>


 </Card.Text>
                            </Card.Body> </Card>
            </Col>
 </Row> &nbsp;
<Row>   <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                           
                    <Card.Header><div class= "lead"><h5>Starting Works and Experience With Team</h5></div></Card.Header>      <Card.Body> 
                     <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}> Along the start of the Gaussian Curvature Project from our whole hard working and sincere team  of GC some peoples deserves a special mention in GC, six of my friends <b className="footer-text">Orestis Lignos, Agamjeet Singh, Agaman Chatterjee, Papon Lapate, i3435, Arkan Manva</b>  who are the <b className="footer-text">founder team members</b> who helped in their all ways with me to curve the GC in a elegant way. As time past we improved our methods and new members were added in GC,  when other
                    members joined  and later some others  also deserves a special mention such as <b className="footer-text">gghx, Starchan, Patrick Lu</b> and  finally in past year maybe after some more time(might be the mid point of GC's age) someone joined who too deserves a special mention in team and his name is <b className="footer-text">Vlad Spataru</b> who was also very energetic like the initial six, with him a enjoyful different experience was the contest OIMC(founded by Vlad) which flourished quite well.  More new members have joined in by the year and I hope they too help GC the same way the other members did.
 All team members experienced a great time in GC along the time and we all became like a family now.
 <br></br>


 </Card.Text>
                            </Card.Body></Card>
            </Col>

            </Row> &nbsp;  




<Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>About Articles and Past Contests</h5></div></Card.Header>
                                    <Card.Body>   
                                     
                                   
                                     
                                     <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>   You can find the articles in the article's page of the website and past contest(s) info can be found in the contest's page. The main 
                                     
                                     contest of GC is the <b className="footer-text">GIMO series</b> which consists of a USA(J)MO  type contest which  is <b className="footer-text">GAMO and GJMO</b> being the first stage of GIMO and <b className="footer-text">GIMO</b> which is an IMO type contest being the second and last stage of the contest.<br></br> <br></br> Another two main events which are both IMO type contests which are <b className="footer-text">semi independent(events which have total control by it's founder and not by GC admin(s) unless founder is himself a GC admin and has got a certain help/support or partnering whilist content making from GC)</b> of GC is <b className="footer-text">MetriX Mathematical Olympiad(MMO Founder is Aritra12)</b> and <b className="footer-text">Online International Mathematical Cup(OIMC Founder is oVlad)</b>. <br></br> <br></br> GC  has upto now seven to eight olympiad articles with some on number theory, geometry and rest of algebra. 
<br></br>


</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>&nbsp;  


<Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>Some fun events</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}> Well besides mathematics, here some other certian kind of events too take place such as some creative contests like a <b className="footer-text">olympiad style problem writting contest</b>, some games such as <b className="footer-text">chess contest</b> and much more things.
<br></br>


</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>&nbsp;  
      <Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5> I found a error in material</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}> Whenever you face any type of error or other <b className="footer-text">typographical mistakes</b> in any kind of material, first of all shoot a message to the material author personaly, in 
                                      case he/she does not respond to you in a day or two, you can then contact us via our official mail.
<br></br>


</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>&nbsp;  
                                   
        <Row>                           <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>How can we contact GC staff</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}> You can email at our offcial gmail account which is <b className="footer-text">gaussiancurv180@gmail.com</b>  or you can contact us through the contact form on the contact us page. Feel free to contact us anytime you face any kind of problem.
<br></br>


</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>
 </Container>
      </Fade>
    </div>
  )
}

export default About
