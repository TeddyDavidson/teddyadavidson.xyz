import React from 'react';
import Home from '../pages';
import About from '../pages/about';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav style={{color: 'blue'}}>
		<Bars />
		<NavMenu>
        <NavLink to={Home} >
			Home
		</NavLink>
		<NavLink to={About} >
			About
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
