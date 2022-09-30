import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
} from 'reactstrap';

//component com export default na função
export default function Header() {
    return (
        <div>
            <Nav tabs>
                <NavbarBrand>
                    <NavLink active href='/'>DTIS</NavLink>
                </NavbarBrand>

                <NavItem>
                    <NavLink href="/">Principal</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/frontend">Frontend</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/backend">Backend</NavLink>
                </NavItem>
            </Nav>
        </div>
    );

}
//component com export default na função
