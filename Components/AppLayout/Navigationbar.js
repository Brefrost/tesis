import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Navigationbar=(props)=>{
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}
export default Navigationbar


/*
      <nav>
            <div classNameName="nav-wrapper #0288d1 light-blue darken-2">
            <img src="../../Logo.png"></img>
            <Link href="/" ><a classNameName="brand-logo left"> Apliacion_prueba </a></Link>
            <ul id="nav-mobile" classNameName="right hide-on-med-and-down">
                <li classNameName={isActive('/Login')}><Link href="/Login"><a> Sass </a></Link></li>
            </ul>
            </div>
        </nav>
        <style jsx>
            {`
            img{
                width:60px;
                height:60px;
            }
            `}
        </style>
        


*/