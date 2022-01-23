import { React } from 'react'
import { Fade } from 'react-awesome-reveal'
import Container from 'react-bootstrap/esm/Container'




const Experience = ({ darkMode }) => {

    

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>Sponsors and Prizes</b></h2>
                    <br></br>
                  </Container>
            </Fade>
            <br></br>
<Container>
        <div className="lead" align="center">
      <h5>  <b> Prizes will be sponsored by organisation(s), we will inform you about the prizes very soon.</b></h5> </div> </Container>
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> <br></br>
         
            <br></br> 
         
            <br></br>
        </div>
    )
}

export default Experience
