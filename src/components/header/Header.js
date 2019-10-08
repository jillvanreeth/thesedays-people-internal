import React from 'react';

import './Header.scss';

import {Burger} from './../burger/Burger';
import {Logo} from './../logo/Logo';

export const Header = (props) => {
	return (
		<header className="header">
			<div className="header__inner">
			
				<Burger />

				<Logo />

			</div>
		</header>
	)
}