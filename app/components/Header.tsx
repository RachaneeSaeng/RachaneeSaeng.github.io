import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Header extends React.Component<any, any> {

	constructor(props: any) {
    super(props);    	
  }

	render() {
		return (            
			<Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header className="page-scroll">
                    <Navbar.Brand >
                        <a href="#page-top"><b>RACHANEE S.</b></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>                
                <Navbar.Collapse>                    
                    <Nav pullRight>
                        <NavItem href="#about" className="page-scroll">ABOUT</NavItem>                        
                        <NavItem href="#experience" className="page-scroll">EXPERIENCE</NavItem>
                        <NavItem href="#skill" className="page-scroll">SKILL</NavItem>
                        <NavItem href="#portfolio" className="page-scroll">PORTFOLIO</NavItem>
                        <NavItem href="#contact" className="page-scroll">CONTACT</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
			);
	}
}