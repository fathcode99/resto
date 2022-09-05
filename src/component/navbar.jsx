import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Container, Row, Col, Nav, Navbar
} from 'react-bootstrap'

import { Link } from "react-router-dom";
import './component.css'

export default function NavBar() {
    const state = useSelector((state) => state.reducer)
    const dispatch = useDispatch()

    const onLogOut = () => {
        localStorage.removeItem('idUser')
        dispatch({
            type: "LOGOUT"
        })
    }

    return (

        <Navbar className="navbar-main-container" expand="lg">
            <Container className="p-0">
                <Row >
                    <Col className="col-lg-4 col-sm-5 nav-brand-style fs-2">Kedai Pahlawan</Col>

                    <Navbar.Toggle className="toogle-style"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Col className="col-lg-4 col-sm-7 nav-menu-style">
                            <Nav className="nav-text-menu" as={Link} to="/">HOME</Nav>
                            <Nav className="nav-text-menu" as={Link} to="/">ABOUT US</Nav>
                            <Nav className="nav-text-menu" as={Link} to="/history">HISTORY</Nav>
                        </Col>
                        <Col className="col-lg-2 col-sm-7 offset-2 nav-menu-style">
                            {state.username ?
                                <>
                                    <Nav className="nav-text-menu" as={Link} to="/login">Hello, {state.username}</Nav>
                                    <Nav className="nav-text-menu" as={Link} to="/" onClick={onLogOut}>Log Out</Nav>
                                </>
                                :
                                <>
                                    <Nav className="nav-text-menu" as={Link} to="/login">LOGIN</Nav>
                                    <Nav className="nav-text-menu" as={Link} to="/register">SIGN UP</Nav>
                                </>
                            }
                        </Col>

                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    )
} 