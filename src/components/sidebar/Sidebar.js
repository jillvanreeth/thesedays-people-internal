import React from 'react';

import './Sidebar.scss';

import KeyVisual from './graphics/wt-visual-balloons.jpg';
import { Icon } from './../../components/icon/Icon';


export const Sidebar = () => {

	return (
		<div className="sidebar">
			<div className="sidebar__header">
        <img src={KeyVisual} alt="" />
      </div>

      <div className="sidebar__content">
				<ul className="sidebar__nav">
					<li className="sidebar__nav__item">
						<a className="sidebar__nav__link" href="https://people.tdlinx.be">
						<span className="sidebar__icon"><Icon icon="user" width="20" height="24"/></span> People
						</a>
					</li>
					<li className="sidebar__nav__item">
						<h3 className="sidebar__nav__title">Downloads</h3>
					</li>
					<li className="sidebar__nav__item">
						<a className="sidebar__nav__link" href="https://people.tdlinx.be/excel/people">
						<span className="sidebar__icon"><Icon icon="download" width="26" height="24" /></span> Excel
						</a>
					</li>
					<li className="sidebar__nav__item">
						<a className="sidebar__nav__link" href="https://people.tdlinx.be/excel/receptie">
						<span className="sidebar__icon"><Icon icon="download" width="26" height="24" /></span> Frontdesk app
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}