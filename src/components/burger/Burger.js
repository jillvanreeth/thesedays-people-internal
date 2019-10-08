import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Burger.scss';

export const Burger = () => {

	const {handleMenuToggle} = useContext(AppContext);
	
		return (
	
      <div onClick={handleMenuToggle} className="burger">
	      <div className="burger__inner">
	      	<span></span>
				  <span></span>
				  <span></span>
				  <span></span>
			  </div>
      </div>
             
		)
	}
