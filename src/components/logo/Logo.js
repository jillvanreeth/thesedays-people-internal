import React from 'react';

import './Logo.scss';

import WuThomLogo from './graphics/wunderman-thompson-logo-blue.png';

export const Logo = () => {
	return (
		<div className="wulogo">
			<img src={WuThomLogo} alt="Wunderman Thompson" />
		</div>
	)	
}