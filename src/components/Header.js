import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react'
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelpers"


export default class Header extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
      }
    render() {
        const { menuFixed } = this.state
        return (
            <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
            >
              
                    <Container text>
                        <Menu.Item>
                            <Image size='mini' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHecguruMqMun0BB60kQV68dTmdjJMwhfBA&usqp=CAU' />
                        </Menu.Item>
                    <Menu.Item header>WELCOME TO MY MOVIE PAGE</Menu.Item>
                        <Menu.Item as={Link} to="/">Home Page</Menu.Item>
                    <Menu.Item as={Link} to="/movies">Movies</Menu.Item>
                    <Menu.Item as={Link} to="/movies/new">Add New</Menu.Item>
                    </Container>
                </Menu>
        )
    }
}
