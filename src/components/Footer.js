import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <Container className="footer__wrapper">
                    <Row>
                        <Col><img className={"logo"} src={'images/sushi.jpg'}  alt="lorem"/></Col>
                        <Col>
                            <img src="https://img.icons8.com/plasticine/100/000000/facebook-new.png"/>
                            <img src="https://img.icons8.com/nolan/64/000000/instagram-new.png"/>
                        </Col>
                        <Col className="footer__last-data">
                            <div>☎️<span>345 675 87</span> </div>
                            <div>📍<span>12345 Netherlands</span></div>
                        </Col>
                    </Row>
                    <hr className="footer__underline" />
                </Container>
                <span className="footer__wrapper-rights">&copy; All rights reserved 2019</span>
            </footer>
        </div>
    );
};

export default Footer;
