import React from 'react';
import {Form, Nav, Navbar} from "react-bootstrap";
const Header = () => {
    return (
        <div>
            <Navbar className="header-top" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav navbar-light">
                    <Nav className="mr-auto">
                        <div className={"header-top__shipping"}>
                            <span>Shipping <span className={"mnemonic"}>&middot; </span></span>
                            <span>Reviews <span className={"mnemonic"}>&middot; </span></span>
                            <span>About Us</span>
                        </div>
                    </Nav>
                    <span className={"header-top__time"}>
                        <span>&#128343;9:00 - 23:00</span>
                    </span>
                    <Form inline>
                        <div className={"header-top__shipping"}>
                            <span>&#128100; Login  |  </span>
                            <span>Registration</span>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="header-middle">
                <div className="header-middle__left">☎️ <span className="header-middle__left-phone">345 675 87</span></div>
                <img className="logo" src={'images/sushi.jpg'}  alt="lorem"/>
                <div className="header-middle__right">🛒️ <span className="header-middle__left-phone">125 гр.</span></div>
            </div>
            <hr/>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Guncan">Guncan</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Poke Bowl">Poke Bowl</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Maki">Maki</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Maki">Nigiri</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Maki">Temaki Handrol</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Uramaki">Uramaki</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Dragon Uramaki">Dragon Uramaki</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Sashimi">Sashimi</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Sashimi">Bijgerechten</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
